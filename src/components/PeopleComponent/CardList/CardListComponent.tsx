import React from "react";
import {CardListProps} from "../../../global/types";
import CardComponent from "../Card/CardComponent";

const CardList: React.FC<CardListProps> = (props: CardListProps) => {
    const data = props.data || null
    return <div className="flex-wrap">
        {data &&
            data.map((doc: any, index: any) => <CardComponent document={doc} index={index}/>)}
    </div>
};

export default CardList;