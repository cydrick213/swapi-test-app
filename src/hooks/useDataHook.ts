import {useEffect, useState} from "react";
import {fetchMovies} from "../api/films-api";
import {fetchCharacters} from "../api/people-api";
import {fetchStarShips} from "../api/starship-api";
import {fetchPlanets} from "../api/planet-api";

const useDataHooks = (type: string) => {
    const [data, setData] = useState<any>(null);
    const [loader, setLoader] = useState<boolean>(false)
    const [searchName, setSearchName] = useState<string>("");

    useEffect(() => handleFetch(), []);

    const handleFetch = () => {
        setLoader(true)
        const fn = async () => {
            let response = null;
            switch (type) {
                case 'film':
                    response = await fetchMovies();
                    break;
                case 'char':
                    response = await fetchCharacters();
                    break;
                case 'ship':
                    response = await fetchStarShips();
                    break;
                case 'planet':
                    response = await fetchPlanets();
                    break;
                default:
                    response = null;
                    break;
            }

            if (response) {
                setData(response.results)
                setLoader(false)
            }
        }
        fn().then();
    }

    const handleChange = (search: string) => {
        if (search === "") {
            handleFetch();
        } else {
            setLoader(true)
            setSearchName(search)
            let filteredMonsters = null;
            switch (type) {
                case 'film':
                    filteredMonsters = data.filter((monster: any) => monster?.title.toLowerCase().includes(search.toLowerCase()));
                    break;
                case 'char':
                    filteredMonsters = data.filter((monster: any) => monster?.name.toLowerCase().includes(search.toLowerCase()));
                    break;
                case 'ship':
                    filteredMonsters = data.filter((monster: any) => monster?.name.toLowerCase().includes(search.toLowerCase()));
                    break;
                case 'planet':
                    filteredMonsters = data.filter((monster: any) => monster?.name.toLowerCase().includes(search.toLowerCase()));
                    break;
                default:
                    filteredMonsters = null;
                    break;
            }

            if (filteredMonsters) {
                setData(filteredMonsters)
                setLoader(false)
            }
        }
    }

    return {
        loader,
        searchName,
        handleChange,
        data
    }
}

export default useDataHooks