import {useEffect, useState} from "react";
import {fetchMovies} from "../api/films-api";
import {fetchCharacters} from "../api/people-api";

const useDataHooks = (type: string) => {
    const [data, setData] = useState<any>(null);
    const [searchName, setSearchName] = useState<string>("");

    useEffect(() => handleFetch(), []);

    const handleFetch = () => {
        const fn = async () => {
            let response = null;
            switch (type) {
                case 'film':
                    response = await fetchMovies();
                    break;
                case 'char':
                    response = await fetchCharacters();
                    break;
                default:
                    response = null;
                    break;
            }

            response && setData(response.results)
        }
        fn().then();
    }

    const handleChange = (search: string) => {
        if (search === "") {
            handleFetch();
        } else {
            setSearchName(search)
            let filteredMonsters = null;
            switch (type) {
                case 'film':
                    filteredMonsters = data.filter((monster: any) => monster?.title.toLowerCase().includes(search.toLowerCase()));
                    break;
                case 'char':
                    filteredMonsters = data.filter((monster: any) => monster?.name.toLowerCase().includes(search.toLowerCase()));
                    break;
                default:
                    filteredMonsters = null;
                    break;
            }

            filteredMonsters && setData(filteredMonsters)
        }
    }

    return {
        searchName,
        handleChange,
        data
    }
}

export default useDataHooks