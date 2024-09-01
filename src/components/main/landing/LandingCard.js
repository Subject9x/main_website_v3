import React from "react";


export default function LandingCard({clickPath, imgPath, altTxt}){

    return(
        <a href={clickPath}>
            <img className="thumbnail" src={imgPath} alt={altTxt} />
        </a>
    );
};