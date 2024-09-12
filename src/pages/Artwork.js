import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";
import LandingCard from "../components/main/landing/LandingCard";

export default function Artwork({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <p>This section details the many art projects I’ve undertaken across a wide selection of mediums; from concept art, 3D modeling, to painting miniatures for tabletop wargaming. Majority of my artwork is in a hobby capacity, or with the case of Concetp art; in-service to another project that I am working on.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-10 large-8 medium-offset-1 large-offset-3">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"../art/models"} imgPath={"/img/art/cover_3d.png"} altTxt={"3DArt"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"../art/concepts"} imgPath={"/img/art/cover_concept.png"} altTxt={"Concepts"}/>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"../art/minis"} imgPath={"/img/art/cover_mini.png"} altTxt={"Minis"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"../art/recoil"} imgPath={"/img/art/cover_recoil.png"} altTxt={"Recoil"} />
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );
}