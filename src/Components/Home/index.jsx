import { useState, useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../View/Product'

import styled from "styled-components"
import SwiperF from '../View/Swiper';
import CategoryCard from '../View/CategoryCard';




const DivC = styled.div`
/* padding:12px; */

.imgBanner{
   height: 260px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 20px;
    box-shadow: 0 0 4px 0 #0003;
}

`

const dt = [
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/3.png',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/1.png',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/tranding/4.png',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'No.2 All White (Breathable)',
        price: '5000'
    }
]

const dt2 = [
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/3.png',
        name: 'Cat1',
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'Cat2',
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/1.png',
        name: 'Cat3',
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/tranding/4.png',
        name: 'Cat4',
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'Cat5',
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'Cat6',
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'Cat7',
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/1.png',
        name: 'Cat8',
    },
    {
        image: 'https://admin.elevatealgerie.com/public/assets/images/products/file_6496e21190ebe1687609873.webp',
        name: 'Cat9',
    },
    {
        image: 'https://zwin.io/react/stoon/assets/img/arrival/1.png',
        name: 'Cat10',
    },
]
export default function Home(props) {
    useEffect(() => {

        setTimeout(() => {
            //document.getElementById("contentV").scroll(0, 0)
        }, 100)

    }, [])

    return <DivC >
        <Container className='mt-4'>
            <Row>
                <Col>
                    <div className="imgBanner" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/004/299/835/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg)' }}>

                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col sm={12}>

                    <SwiperF
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 4,
                                    spaceBetween: 0
                                },
                                740: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                },
                                830: {
                                    slidesPerView: 6,
                                    spaceBetween: 0
                                },

                                900: {
                                    slidesPerView: 7,
                                    spaceBetween: 0
                                    // partialVisibilityGutter: 30
                                },
                                1200: {
                                    slidesPerView: 8,
                                    spaceBetween: 0
                                },
                                8000: {
                                    slidesPerView: 8,
                                    spaceBetween: 0
                                }
                            }
                        }
                        items={
                            dt2.map(el => {
                                return <CategoryCard
                                    data={el}
                                />
                            })
                        }
                    />

                </Col>
                
            </Row>
            <Row className='mt-4'>
                <Col>
                    <h2>New Products</h2>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col sm={12}>

                    <SwiperF
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                740: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                830: {
                                    slidesPerView: 3,
                                    spaceBetween: 0
                                },

                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 0
                                    // partialVisibilityGutter: 30
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                },
                                8000: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                }
                            }
                        }
                        items={
                            dt.map(el => {
                                return <Product
                                    data={el}
                                />
                            })
                        }
                    />

                </Col>
                
            </Row>
            <Row className='mt-4'>
                <Col>
                    <h2>All Products</h2>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col sm={12}>

                    <SwiperF
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                740: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                830: {
                                    slidesPerView: 3,
                                    spaceBetween: 0
                                },

                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 0
                                    // partialVisibilityGutter: 30
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                },
                                8000: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                }
                            }
                        }
                        items={
                            dt.map(el => {
                                return <Product
                                    data={el}
                                />
                            })
                        }
                    />

                </Col>
                
            </Row>
        </Container>

    </DivC>;
}
