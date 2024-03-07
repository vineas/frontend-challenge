import React, { useEffect, useState } from 'react';
import { Card, Space, Image, Col, Row, Pagination } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Detail from '../../pages/Detail';

interface ApiType {
    title: string;
    urlToImage: string;
    author: string;
    description: string;
    publishedAt: string;
}

const CardView: React.FC = () => {
    const [news, setNews] = useState<ApiType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        fetchNews();
    }, [currentPage]);

    const fetchNews = () => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-02-07&sortBy=publishedAt&apiKey=a1fe683889f04784afac206b96ce54fa&page=${currentPage}`)
            .then((res) => {
                setNews(res.data.articles);
                setTotalItems(res.data.totalResults);
                console.log(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Space direction="vertical" size={10}>
                <Row gutter={20}>
                    {news.map((newss, index) => (
                        <Col span={6} key={index}>
                            <Card size="small" title={newss.title} style={{ width: 300 }}>
                                <div style={{ width: '280px', height: '180px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={newss.urlToImage} />
                                </div>
                                <p>author: {newss.author}</p>
                                <p>{newss.description && newss.description.length > 100 ? `${newss.description.substring(0, 100)}...` : newss.description}</p>
                                {/* <Link to={`news/`}>Full Content..</Link> */}
                                <p>{newss.publishedAt}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Space>
            <Pagination
                defaultCurrent={1}
                current={currentPage}
                total={totalItems}
                onChange={handlePageChange}
            />
        </>
    );

};

export default CardView;
