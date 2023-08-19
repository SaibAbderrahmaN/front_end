import styled from "styled-components"


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



const DivC = styled.div`

.swiper-button-prev,.swiper-button-next{
    
    width:46px;
    height:46px;
    background-color:#0008;
    border-radius:50%;
    
    color:#FFF;  
}
.swiper-button-prev:after,.swiper-button-next:after{
    font-size: 22px!important;
}
.swiper-button-prev:hover,.swiper-button-next:hover{
    background-color:#000A;
}
.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{
    opacity: 0;
}
.swiper-pagination{
    display: none!important;
}
@media screen and (max-width:600px){
    .swiper-button-prev,.swiper-button-next{
        width:34px;
        height:34px;
    } 
    .swiper-button-prev:after,.swiper-button-next:after {
        font-size:18px!important
    }  
}
`


function SwiperF(props) {    
    return (
        <DivC>
            <Swiper
                    spaceBetween={30}
                    modules={[Navigation,Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={props.breakpoints}
                    className="mySwiper"
                >
                    {
                        props.items.map((el, index) => {


                            return <SwiperSlide>
                                {el}
                            </SwiperSlide>
                                
                        })
                    }
                </Swiper>
        </DivC>
    )
}






export default SwiperF




/*


.swiper-button-prev,.swiper-button-next{
    top:0;
    bottom: 0 !important;;
    width:46px;
    height:100%;
    margin-top: 0;
    
    border-radius:0%;
    
    color:${colors.main};  
}
.swiper-button-prev{
    left:0;
    background:linear-gradient(90deg,#FAFAFA,#FAFAFACC);
    border-top-right-radius:10px 50%;
    border-bottom-right-radius:10px 50%;
}
.swiper-button-next{
    background:linear-gradient(90deg,#FAFAFACC,#FAFAFA);
    right:0;
    border-top-left-radius:10px 50%;
    border-bottom-left-radius:10px 50%;
}

.swiper-button-prev:active{
    background:linear-gradient(90deg,${colors.maintr+"00"},#FAFAFACC);
}
.swiper-button-next:active{
    background:linear-gradient(90deg,#FAFAFACC,${colors.maintr+"00"}); 
}
.swiper-button-prev:after,.swiper-button-next:after{
    font-size: 24px!important;
}
.swiper-button-prev:hover,.swiper-button-next:hover{
    
    font-size: 24px;
}

.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{
    opacity: 0;
}
.swiper-pagination{
    display: none!important;
}
@media screen and (max-width:600px){
    .swiper-button-prev,.swiper-button-next{
        width:34px;
    } 
    .swiper-button-prev:after,.swiper-button-next:after {
        font-size:18px!important
    }  
}



*/