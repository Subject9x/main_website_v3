import React from "react";


export default function BasicFooter({props}){

    const year = new Date().getFullYear();

return(
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-8 medium-6 large-4 small-offset-2 medium-offset-3 large-offset-4">
            (c)2015 - {year} Peter Roohr. All rights reserved.
        </div>
    </div>
);
};