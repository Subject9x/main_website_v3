import React from "react";
import { useNavigate } from "react-router";

export default function ProjectCard({navPath, projName, iconImg, clickNav}){

  const nav = useNavigate();

  return(
  <div className="card" style={{width:"300px"}} onClick={(e)=>{clickNav(navPath)}}>
    <img src={iconImg} />
    {(projName !== undefined && projName !== "") &&
      <div className="card-section" style={{textAlign:"center"}}>
        <h5>{projName}</h5>
      </div>
    }
  </div>
  );   
}