import React from "react";
import {
    PageHeader,
} from 'antd'
import SearchComponent from "../../components/HomeComponent/SearchComponent";
import CardList from "../../components/HomeComponent/CardList/CardListComponent";
import useDataHooks from "../../hooks/useDataHook";

const HomePage: React.FC = () => {
    const {data, searchName, handleChange} = useDataHooks('film')
    return (
        <div className="content-wrapper">
            <PageHeader className="site-page-header" title="The Star Wars" />
            <PageHeader className="site-page-header" subTitle="Movies" />
            <SearchComponent search={searchName} handleChange={handleChange}/>
            <CardList data={data}/>
        </div>
    );
}

export default HomePage