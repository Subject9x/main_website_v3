import React from "react";
import {useNavigate} from "react-router";
import ProjectCard from "../components/projects/ProjectCard";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";

export default function CodeGarage({props}){

    const nav = useNavigate();

    function onClickProject(navPath){
        nav("../project/code/"+navPath);
    }

    return(
<div className="grid-container fluid">
    <NavHeader />
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
    <div className="grid-x">
        <div className="cell small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <div className="grid-x grid-margin-x">
                <ProjectCard projName={"battleMETAL"} iconImg={"/img/code/proj_battlemetal.png"} navPath={"projBattleMETAL"} clickNav={onClickProject}/>
                <ProjectCard projName={"LANDWAR App"} iconImg={"/img/code/proj_landwar.png"} navPath={"projLANDWAR"} clickNav={onClickProject}/>        
            </div>
        </div>
    </div>
    <div className="grid-x">
        <div className="cell small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <div className="grid-x grid-margin-x">
                <ProjectCard projName={"Earthsiege 2 Toolkit"} iconImg={"/img/code/proj_ES2RE.png"} navPath={"projES2RE"} clickNav={onClickProject}/>        
                <ProjectCard projName={"ByteRunners"} iconImg={"/img/code/proj_ByteRun.png"} navPath={"projByteRun"} clickNav={onClickProject}/>            
            </div>
        </div>
    </div>
    <div className="grid-x">
        <div className="cell small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <div className="grid-x grid-margin-x">
                <ProjectCard projName={"Zond I"} iconImg={"/img/code/proj_zond.png"} navPath={"projZondI"} clickNav={onClickProject}/>        
                <ProjectCard projName={"Battletech-2D"} iconImg={"/img/code/proj_bt2d.png"} navPath={"projBT2D"} clickNav={onClickProject}/>
            </div>
        </div>
    </div>
    <BasicFooter />
</div>
    );
};