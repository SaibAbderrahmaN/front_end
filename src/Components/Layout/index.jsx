import { useState, useContext, useEffect } from 'react';


import styled from "styled-components"
import Navbar from './Navbar';
import Footer from './Footer';




const DivC = styled.div`
min-height: 100vh;
background-color: #f0f0f0;
`


export default function Layout(props) {


    return <DivC >
        <Navbar></Navbar>

        {props.children}
        <Footer></Footer>


    </DivC>;
}

































