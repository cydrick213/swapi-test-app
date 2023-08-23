import React from "react";
import {
    PageHeader,
} from 'antd'
import SearchComponent from "../../components/SearchComponent";
import CardList from "../../components/ShipsComponent/CardList/CardListComponent";
import useDataHooks from "../../hooks/useDataHook";
import {LoadingScreen} from "../../components/LoadingScreenComponent/LodingScreenComponent";

const StarshipPage: React.FC = () => {
    const {data, searchName, handleChange, loader} = useDataHooks('ship')
    return (
        <div className="content-wrapper">
            <PageHeader className="site-page-header" title="The Star Wars" />
            <PageHeader className="site-page-header" subTitle="Star Ships" />
            <SearchComponent search={searchName} handleChange={handleChange}/>
            {loader && <LoadingScreen/>}
            <CardList data={data}/>
        </div>
    );
}

export default StarshipPage