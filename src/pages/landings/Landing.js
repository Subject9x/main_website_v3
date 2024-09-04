import React from "react";
import LandingCard from "../../components/main/landing/LandingCard";
import { useNavigate } from "react-router";

export default function LandingPage({props}){

    const nav = useNavigate();

    return(
<div className="grid-container fluid">
    <div className="grid-x grid-margin-x">
        <div className="cell shrink small-10 medium-9 large-8 small-offset-1 medium-offset-1 large-offset-2">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <h2 style={{fontWeight: "700"}}>Roohr Orbital Yards</h2>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell auto small-offset-2 medium-offset-1 large-offset-1">
                    <h4 style={{fontFamily : "monospace"}}>Main site for all my works</h4>
                </div>
            </div>
            <div className="grid-x">
                <div className="cell auto">
                    <LandingCard navPath={"code"} imgPath={"/img/landing/codeThumb.png"} altTxt={"Code Projects"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={""} imgPath={"/img/landing/artThumb.png"} altTxt={"Artwork"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={""} imgPath={"/img/landing/tableThumb.png"} altTxt={"Board Games"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={""} imgPath={"/img/landing/netThumb.png"} altTxt={"Networking"} />
                </div>
            </div>
        </div>
    </div>
</div>
    );

};