import React from 'react'
import {Card} from "antd";
import {
    GlobalOutlined,
    UserOutlined,
    TeamOutlined,
    ScheduleOutlined
} from "@ant-design/icons";
import {CardProps} from "../../../global/types";

const { Meta } = Card

const CardComponent: React.FC<CardProps> = (props: CardProps) => {
    const doc = props.document || null
    const index = props.index || '0'

    return (
        <div key={doc.id} id={index} className="card-wrapper">
            <Card
                bordered={true}
                className="media-card">
                <div className={"mt-10"}>
                    <Meta
                        title={doc?.title}
                    />
                    <Meta
                        description={doc?.director}
                        avatar={<UserOutlined/>}
                    />
                    <Meta
                        description={doc?.producer}
                        avatar={<TeamOutlined/>}
                    />
                    <Meta
                        description={doc?.release_date}
                        avatar={<ScheduleOutlined/>}
                    />
                    <Meta
                        description={doc?.opening_crawl}
                        avatar={<GlobalOutlined/>}
                    />
                </div>
                <br />
            </Card>
        </div>
    )
}

export default CardComponent
