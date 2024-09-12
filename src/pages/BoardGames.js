import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";
import LandingCard from "../components/main/landing/LandingCard";


export default function BoardGames({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-10 large-8 medium-offset-1 large-offset-2">
        This section details the many art projects I’ve undertaken across a wide selection of mediums; from concept art, 3D modeling, to painting miniatures for tabletop wargaming. Majority of my artwork is in a hobby capacity, or with the case of Concetp art; in-service to another project that I am working on.
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-10 large-8 medium-offset-1 large-offset-2">
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><h5><b><u></u></b></h5></td>
                    </tr>
                </tbody>
            </table>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <LandingCard navPath={"../art/models"} imgPath={""} altTxt={"3DArt"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"../art/concepts"} imgPath={""} altTxt={"Concepts"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"../art/minis"} imgPath={""} altTxt={"Minis"}/>
                </div>
                <div className="cell auto">
                    <LandingCard navPath={"../art/recoil"} imgPath={""} altTxt={"Recoil"} />
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );
}