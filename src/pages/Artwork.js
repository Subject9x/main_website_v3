import React from "react";
import NavHeader from "../components/main/NavHeader";
import BasicFooter from "../components/main/BasicFooter";


export default function Artwork({props}){
    return(
<div className="grid-container fluid">
    <NavHeader />

    <BasicFooter />
</div>
    );
}