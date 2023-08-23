import React from "react";
import {Col, Form, Input, Row} from "antd";
import {SearchProps} from "../global/types";

const SearchComponent: React.FC<SearchProps> = (props: SearchProps) => {
    const {search, handleChange} = props
    return (
        <Row justify="space-around" className="mb-20">
            <Col flex="500px">
                {/* search div - start */}
                <Form className="search-form" layout="inline">
                    <Form.Item name="searchName">
                        <Input
                            className="search"
                            placeholder="search by name or title..."
                            value={search}
                            onChange={(e) => handleChange(e.target.value)}
                            allowClear
                        />
                    </Form.Item>
                </Form>
                {/* search div - end */}
            </Col>
        </Row>
    )
}

export default SearchComponent