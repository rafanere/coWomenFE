import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Header from "../header/header";
import HomePage from "../home-page/home-page";

export default function SearchPage () {
    return (
        <div className="App-searchPage">
            <div className="App">
                <Header />
                <HomePage />
            </div>
            <div className="App-cards">
                <Card className="App-card">
                    <CardMedia 
                    className="App-media"
                    component="img"
                    image="https://picsum.photos/200/"
                    title="teste do teste"
                    height="200"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            But I must explain to you
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="medium">Saber mais...</Button>
                    </CardActions>
                </Card>
                <Card className="App-card">
                    <CardMedia 
                    className="App-media"
                    component="img"
                    image="https://picsum.photos/200/"
                    title="teste do teste"
                    height="200"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            But I must explain to you
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                        how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="medium">Saber mais...</Button>
                    </CardActions>
                </Card>
                <Card className="App-card">
                    <CardMedia 
                    className="App-media"
                    component="img"
                    image="https://picsum.photos/200/"
                    title="teste do teste"
                    height="200"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            But I must explain to you
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                        how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves 
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" size="medium">Saber mais...</Button>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
}