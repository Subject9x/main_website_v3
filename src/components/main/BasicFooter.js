import React from "react";


export default function BasicFooter({props}){

    const year = new Date().getFullYear();

return(
    <div className="grid-x grid-margin-x">
        <div className="cell small-11 medium-8 large-6 small-offset-1 medium-offset-2 large-offset-3">
            (c)2015 - {year} Peter Roohr. All rights reserved.
        </div>
    </div>
);
};