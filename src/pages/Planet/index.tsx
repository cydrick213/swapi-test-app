import React from "react";
import {
    PageHeader,
} from 'antd'
import SearchComponent from "../../components/SearchComponent";
import CardList from "../../components/PlanetComponent/CardList/CardListComponent";
import useDataHooks from "../../hooks/useDataHook";
import {LoadingScreen} from "../../components/LoadingScreenComponent/LodingScreenComponent";

const PlanetPage: React.FC = () => {
    const {data, searchName, handleChange, loader} = useDataHooks('planet')
    return (
        <div className="content-wrapper">
            <PageHeader className="site-page-header" title="The Star Wars" />
            <PageHeader className="site-page-header" subTitle="Planets" />
            <SearchComponent search={searchName} handleChange={handleChange}/>
            {loader && <LoadingScreen/>}
            <CardList data={data}/>
        </div>
    );
}

export default PlanetPage