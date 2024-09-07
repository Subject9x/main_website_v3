import React from "react";
import { useNavigate } from "react-router";


export default function LandingCard({navPath, imgPath, altTxt}){

    const nav = useNavigate();

    return(
        <button onClick={()=>{nav(navPath);}}>
            <img className="thumbnail thumbnail-size" src={imgPath} alt={altTxt} />
        </button>
    );
};