import { createGlobalStyle } from 'styled-components';
import data from "./Data/data.json"
const GlobalStyle = createGlobalStyle`

.btn-primary{
    background-color: ${data.theme.Primary};
    border:none!important;
    border-radius:4px;
}
.btn-primary:hover,.btn-primary:active{
    background-color: ${data.theme.Primary}cc!important;
}
.btn-primary-light{
    background-color: #F5F5F5;
    color:#333;
}
.form-check-input:checked {
    background-color: ${data.theme.Primary};
    border-color: ${data.theme.Primary};
}
.btn-primary:hover,.btn-primary:active,.btn-primary:focus,
.btn-primary-light:hover,.btn-primary-light:active,.btn-primary-light:focus{
    background-color: ${data.theme.Primary};
}
.btn.full-width{
    width:100%;
}
.btn{
  box-shadow: none!important;
}

.title1{
    font-size:22px;
    font-weight: 700;
    /* text-decoration: underline; */
    text-decoration-color: ${data.theme.Primary};
    text-align: center;
}

.btn-danger.delete{
    color:#333;
    border:none!important;
    background-color: #FAFAFA;
}
.btn-danger.delete:hover{
    background-color: #dc3545;
    color:#FFF;
}
.one-line{
    white-space: nowrap;
/* text-overflow: ellipsis;  */
    /* overflow: hidden; */
}
`;
 
export default GlobalStyle;