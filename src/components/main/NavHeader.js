import React from "react";
import {Link} from "react-router-dom";

export default function NavHeader({props}){

    return(
        <div className="grid-x grid-margin-x">
            <div className="cell auto small-12 medium-6 large-6 medium-offset-2 large-offset-3">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><Link to={"../code"}><h4><b>Code Garage</b></h4></Link></td>
                            <td><Link to={"../artwork"}><h4><b>Artwork</b></h4></Link></td>
                            <td><Link to={"../boardgame"}><h4><b>Board Games</b></h4></Link></td>
                            <td><Link to={"../networking"}><h4><b>Networking</b></h4></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};