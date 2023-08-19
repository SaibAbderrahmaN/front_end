import { Button } from "@mui/material"
import styled from "styled-components"

import data from "../Data/data.json"



const DivC = styled.div`

margin: 6px;
overflow: hidden;
padding: 6px;
display: flex;
flex-direction: column;
align-items: center;
.imageC{
    padding-top: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    transform: scale(.98);
    width: 100%;
    box-shadow: 0px 0px 2px 0px #0003;
}
.name{
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color:#333;
    margin-top: 12px;
}


`


function CategoryCard({ data }) {
    return (
        <DivC>
            <div className="imageC" style={{ backgroundImage: 'url(' + data.image + ')' }}>

            </div>
            <div className="name">
                {data.name}
            </div>
        </DivC>
    )
}






export default CategoryCard



