import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";
import ListCard from "../components/projects/code/ListCard";

export default function Networking({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <p>Quick Reference to people I've worked with and various projects.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-10 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            <div className="grid-x">
                <div className="cell auto small-6 medium-6 large-4">
                    <ListCard key={1} backgroundClr={"lightgreen"} rowData={{type:"People", data :[]}} />
                </div>
            </div>
            
        </div>
    </div>
    <BasicFooter />
</div>
    );
}