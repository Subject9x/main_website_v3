import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";


export default function BoardGames({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />

    <BasicFooter />
</div>
    );
}