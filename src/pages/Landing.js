import React from "react";
import LandingCard from "../components/main/landing/LandingCard";
import { useNavigate } from "react-router";
import BasicFooter from "../components/main/BasicFooter";

export default function LandingPage({props}){

    const nav = useNavigate();

    return(
<div className="grid-container fluid">
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-8 large-4 medium-offset-2 large-offset-4">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <h2 style={{fontWeight: "700"}}>Roohr Orbital Yards</h2>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell small-11 medium-8 large-8 small-offset-1">
                    <h4 style={{fontFamily : "monospace"}}>Main site for all my works</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-10 large-8 medium-offset-1 large-offset-3">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"code"} imgPath={"/img/landing/codeThumb.png"} altTxt={"Code Projects"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"artwork"} imgPath={"/img/landing/artThumb.png"} altTxt={"Artwork"}/>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"boardgame"} imgPath={"/img/landing/tableThumb.png"} altTxt={"Board Games"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"networking"} imgPath={"/img/landing/netThumb.png"} altTxt={"Networking"} />
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );

};