import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";
import LandingCard from "../components/main/landing/LandingCard";

export default function Artwork({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-8 large-4 medium-offset-2 large-offset-4">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"code"} imgPath={"/img/art/cover_3d.png"} altTxt={"3DArt"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"artwork"} imgPath={"/img/art/cover_concept.png"} altTxt={"Concepts"}/>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"boardgame"} imgPath={"/img/art/cover_mini.png"} altTxt={"Minis"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"networking"} imgPath={"/img/art/cover_recoil.png"} altTxt={"Recoil"} />
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );
}