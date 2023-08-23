import React from "react";
import {
    PageHeader,
} from 'antd'
import SearchComponent from "../../components/PeopleComponent/SearchComponent";
import CardList from "../../components/PeopleComponent/CardList/CardListComponent";
import useDataHooks from "../../hooks/useDataHook";
import {LoadingScreen} from "../../components/LoadingScreenComponent/LodingScreenComponent";

const CharacterPage: React.FC = () => {
    const {data, searchName, handleChange, loader} = useDataHooks('char')
    return (
        <div className="content-wrapper">
            <PageHeader className="site-page-header" title="The Star Wars" />
            <PageHeader className="site-page-header" subTitle="Characters" />
            <SearchComponent search={searchName} handleChange={handleChange}/>
            {loader && <LoadingScreen/>}
            <CardList data={data}/>
        </div>
    );
}

export default CharacterPage