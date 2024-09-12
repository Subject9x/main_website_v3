import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";
import { useNavigate } from "react-router";


export default function BoardGames({props}){

    const nav = useNavigate();

    return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <p>Over the years I’ve worked several board game projects as a designer and co-designer. Most projects are focused around my passion of miniatures wargaming like <i>Warhammer 40k</i> and <i>Battletech</i>.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell small-8  medium-6 large-4 small-offset-2 medium-offset-3 large-offset-4">
            <div className="grid-x grid-margin-x">
                <div className="cell shrink" style={{border : "4px solid #fefefe", borderRadius: "0"}}>
                    <h4><a href="../project/board/projLANDWARactual" ><u>LANDWAR</u></a></h4>
                </div>
                <div className="cell shrink" style={{border : "4px solid #fefefe", borderRadius: "0"}}>
                    <h4><a href="../project/board/projPitFight" ><u>Pit Fight!</u></a></h4>
                </div>
                <div className="cell shrink" style={{border : "4px solid #fefefe", borderRadius: "0"}}>
                    <h4><a href="../project/board/projBattlesuit" ><u>Battlesuit</u></a></h4>
                </div>
                <div className="cell shrink" style={{border : "4px solid #fefefe", borderRadius: "0"}}>
                    <h4><a href="../project/board/projMechaTTRPG" ><u>Mecha Squadron</u></a></h4>
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );
}