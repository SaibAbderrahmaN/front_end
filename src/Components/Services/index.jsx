import { useState, useContext, useEffect } from 'react';

import images from "../images/"
import styled from "styled-components"
import { Button, Divider, Grid, Paper, Typography } from '@mui/material';




const DivC = styled.div`
/* padding:12px; */
.box{
    border-radius: 8px;
}
.responsive-img img{
  transform: scale(.7);
}
.img80{
    height:60px
}
.img90{
    height:80px
}

`


export default function Services(props) {
    useEffect(() => {
        document.getElementById("contentV").scroll(0, 0)

    }, [])

    return <DivC >
        <div style={{ padding: "12px", marginTop: "8px" }}>
            <Typography variant='h1' fontSize={24} fontWeight={700}>
                Services
            </Typography>
            <Typography variant='body2' fontSize={14} fontWeight={700} sx={{ mt: 2 }}>
                Allez n'importe où
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80">
                            <img src={images.car} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        Course
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80">
                            <img src={images.moto} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        Deux roues
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80 ">
                            <img src={images.vola} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>

                        Réserver
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80" >
                            <img src={images.train} alt="" />
                        </div>


                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        T.publics
                    </Typography>
                </Grid>


            </Grid>



        </div>
        <Divider sx={{ bgcolor: "#FFF", height: "6px" }}></Divider>
        <div style={{ padding: "12px", marginTop: "8px" }}>
            <Typography variant='body2' fontSize={14} fontWeight={700} sx={{ mt: 2 }}>
                Faites-vous livrer tout ce que vous voulez
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} sm={6}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box p-3">
                        <div className="d-flex justify-content-end">
                            <div className=" responsive-img img90" style={{ height: "50px" }}>
                                <img src={images.bizza} alt="" />
                            </div>
                        </div>
                        <Typography variant='body2' fontSize={15} fontWeight={500} sx={{}}>
                            Repas
                        </Typography>


                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box p-3">
                        <div className="d-flex justify-content-end">
                            <div className=" responsive-img img90" style={{ height: "50px" }}>
                                <img src={images.eats} alt="" />
                            </div>
                        </div>
                        <Typography variant='body2' fontSize={15} fontWeight={500} sx={{}}>
                            Courses
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box p-2 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-end">
                            <div className=" responsive-img img90" style={{ height: "50px" }}>
                                <img src={images.book} alt="" />
                            </div>
                        </div>
                        <Typography variant='body2' fontSize={14} fontWeight={500} sx={{}}>
                            Épicerie
                        </Typography>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box p-2 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-end">
                            <div className=" responsive-img img90" style={{ height: "50px" }}>
                                <img src={images.machinlavi} alt="" />
                            </div>
                        </div>
                        <Typography variant='body2' fontSize={14} fontWeight={500} sx={{}}>
                            Alcool
                        </Typography>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box p-2 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-end">
                            <div className=" responsive-img " style={{ height: "50px" }}>
                                <img src={images.pc} alt="" />
                            </div>
                        </div>
                        <Typography variant='body2' fontSize={14} fontWeight={500} sx={{}}>
                            Hygiène
                        </Typography>


                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80">
                            <img src={images.phone} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        Commerce de
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80">
                            <img src={images.manita} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        Fleurs
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80">
                            <img src={images.veste} alt="" />
                        </div>

                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>

                        Boutique
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ bgcolor: "background.paper1" }} className="box">
                        <div className="p-2 responsive-img img80" >
                            <img src={images.eat1} alt="" />
                        </div>


                    </Paper>
                    <Typography variant='body2' fontSize={13} fontWeight={500} sx={{ mt: 1 }} textAlign={"center"}>
                        Électronique
                    </Typography>
                </Grid>


            </Grid>
        </div>

    </DivC>;
}
