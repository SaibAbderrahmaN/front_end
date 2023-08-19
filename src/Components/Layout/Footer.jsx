import React from 'react'
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import images from "../images/"
import { BiMessageSquareDetail } from "react-icons/bi"
import { FaLinkedin, FaTiktok } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import { MdOutlineRemoveShoppingCart, MdFacebook, MdInsta } from "react-icons/md"
import data from "../Data/data.json"
const DivC = styled.div`
color: #444;
padding-top:30px;
padding-bottom:30px;
margin-top: 24px;
background-color: #fff;
overflow: hidden;
.logow{
    height:40px
}
.linkM{
    color:#666;
    font-size:40px
}
.linkM:hover{
    color:${data.theme.Primary}
}
hr{
    border-color: #666;
    margin:32px 20px
}
h1{
    font-size:16px;
    font-weight:600;
    margin-bottom:12px;
    text-transform: uppercase;
}
ul{
    list-style-type: none;
    padding:0;
    font-size:14px
}
.app img{
    height:40px
}
a{
    color:#666;
    /* text-decoration: none; */
}
@media screen and (max-width: 768px){
    .rw{
        text-align:center
    }
}
.mm{
    font-size:13px ;
    text-align:center
}
.mm a:hover{
    color:${data.theme.Primary}
}
.rw li{
    cursor: pointer;
}
.rw li:hover{
    color:${data.theme.Primary}
}
`
function Footer() {
    return (
        <DivC>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center">
                        <img src={"https://risecart.net/static/media/logoff.3665b3ae8542d6493e76.png"} alt="" height="40" className="logow" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                        <a href="https://www.facebook.com/hanouteek.dz" target="_blank" className="linkM me-1">
                            <MdFacebook />
                        </a>
                        <a href="https://www.instagram.com/hanouteek.dz/" target="_blank" className="linkM me-1">
                            <RiInstagramFill />
                        </a>
                        <a href="https://www.tiktok.com/@hanouteek" target="_blank" className="linkM ">
                            <FaTiktok />
                        </a>

                    </Col>
                </Row>
                <hr />
                <Row className="rw">

                    <Col lg={3} md={6} sm={12} >
                        <h1>{data.Menu.aboutMenu.Title}</h1>
                        <ul>
                            {
                                data.Menu.aboutMenu.listLinks.map((el, k) => {
                                    return <li key={k}>{el.name}</li>
                                })
                            }

                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <h1>{data.Menu.mainMenu.Title}</h1>
                        <ul>
                            {
                                data.Menu.mainMenu.listLinks.map((el, k) => {
                                    return <li key={k}>{el.name}</li>
                                })
                            }

                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <h1>{data.Menu.contactUs.Title}</h1>
                        <ul>
                            {
                                data.Menu.contactUs.listLinks.map((el, k) => {
                                    return <li key={k}>{el.name}</li>
                                })
                            }

                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                        <h1>{data.Menu.termsAndConditions.Title}</h1>
                        <ul>
                            {
                                data.Menu.termsAndConditions.listLinks.map((el, k) => {
                                    return <li key={k}>{el.name}</li>
                                })
                            }

                        </ul>
                        {/* <h1>Télécharger l'application</h1>
                    <ul className="app">
                        <li className="mb-1">
                            <a href="#" target="_blank">
                                <img src={images.googleplay} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" >
                                <img src={images.appstore} alt="" />
                            </a>
                        </li>
                                
                    </ul> */}
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="d-flex justify-content-center flex-column mm">
                        {/* <div>
                            <Link to={"#"} className="me-1">
                                Termes et conditions
                            </Link>
                            |
                            <Link to={"#"} className="ms-1">
                                Politique de confidentialité
                            </Link>
                        </div> */}


                        <div>
                            © 2023. All rights reserved by <a href="#" target="_blank" className="ms-1"> Devgate</a>.
                        </div>

                    </Col>
                </Row>
            </Container>

        </DivC>
    )
}






export default Footer