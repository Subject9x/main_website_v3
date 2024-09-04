import React from "react";
import { useNavigate } from "react-router";
import ProjectCard from "../../components/main/code/ProjectCard";


export default function CodeGarage({props}){

    const nav = useNavigate();

    return(
<div className="grid-container fluid">
    <div className="grid-x grid-margin-x">
        <div className="cell shrink small-10 medium-9 large-8 small-offset-1 medium-offset-1 large-offset-2">
            <h3 style={{fontFamily : "monospace"}}>Code Garage</h3>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell shrink small-10 medium-9 large-8 small-offset-1 medium-offset-1 large-offset-2">
            <p>All my independent coding projects.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell shrink small-10 medium-9 large-8 small-offset-2 medium-offset-2 large-offset-3">
            <h4><u>Completed works</u></h4>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-10 medium-10 large-10 small-offset-2 medium-offset-2 large-offset-2">
            <div className="grid-x">
                <div className="cell auto medium-3 medium-offset-2 large-2 large-offset-2">
                    <ProjectCard projName={"battleMETAL"} iconImg={"/img/code/proj_battlemetal.png"} navPath={"/code/projBattleMETAL"}/>        
                </div>
                <div className="cell auto medium-3 large-2">
                    <ProjectCard projName={"LANDWAR App"} iconImg={"/img/code/proj_landwar.png"} navPath={""}/>        
                </div>
                <div className="cell auto medium-3 large-2">
                    <ProjectCard projName={"Zond I"} iconImg={"/img/code/proj_zond.png"} navPath={""}/>        
                </div>
            </div>
        </div>
    </div>
</div>
    );
};