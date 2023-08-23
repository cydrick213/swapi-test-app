import React from 'react'
import {Card} from "antd";
import {
    GlobalOutlined,
    UserOutlined,
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
                        title={doc?.name}
                    />
                    <Meta
                        description={doc?.eye_color}
                        avatar={<UserOutlined/>}
                    />
                    <Meta
                        description={doc?.birth_year}
                        avatar={<ScheduleOutlined/>}
                    />
                    <Meta
                        description={doc?.gender && doc?.gender.includes("n/a") ? 'robot' : doc?.gender}
                        avatar={<GlobalOutlined/>}
                    />
                </div>
                <br />
            </Card>
        </div>
    )
}

export default CardComponent
