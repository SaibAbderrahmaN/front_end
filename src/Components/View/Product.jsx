import { Button } from "@mui/material"
import styled from "styled-components"

import data from"../Data/data.json"



const DivC = styled.div`
min-height: 280px;
box-shadow:  1px 1px 6px 0px rgba(0, 0, 0, 0.1);
border-radius: 12px;
margin: 6px;
overflow: hidden;
background-color: #FFF;
.imageP{
    padding-top: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
    
}
.name{
    color:#333
}
.name,.price{
    text-align: center;
    font-size: 14px;
    font-weight: 700;
}
.price{
    margin:0 0 0 4px;
    color:${data.theme.Primary};
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: fit-content;
block-size: fit-content;
min-width: fit-content;
}
.productBody{
    padding: 12px 8px;
}
.btn{
    width:100%
}

`


function Product({ data }) {
    return (
        <DivC>
            <div className="imageP" style={{ backgroundImage: 'url(' + data.image + ')' }}>

            </div>
            <div className="productBody">
                <div className="d-flex " >
                    <div className="name flex-grow-1" >
                        {data.name}
                    </div>
                    <div className="price">
                        {data.price} $
                    </div>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary">
                        Buy
                    </button>
                </div>
            </div>
        </DivC>
    )
}






export default Product



