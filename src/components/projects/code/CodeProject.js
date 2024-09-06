import React, {useEffect, useState} from "react";
import ListCard from "./ListCard";
import {useParams} from "react-router";
import NavHeader from "../../main/NavHeader";
import BasicFooter from "../../main/BasicFooter";

/* 
    Template Component for rendering code project pages,
    wrap with target page for easier routing.
 */
export default function CodeProject({props}){

    const [dataLoaded, setDataLoaded] = useState(false);
    const [projData, setProjData] = useState({});
    const {projId} = useParams();

    useEffect(()=>{
        getProjectData();

    }, []);

    async function getProjectData() {
        if(dataLoaded){
            return;
        }
        fetch("/dat/proj/"+projId+".json", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setProjData(myJson);
            setDataLoaded(true);
        });
    }

return(
<div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x">
        <div className="cell auto small-6 medium-6 large-6 small-offset-3 medium-offset-3 large-offset-3" style={{textAlign : "center"}}>
            <h2>{projData.title}</h2>
        </div>
    </div>

    <div className="grid-x">
        <div className="cell small-6 medium-6 large-6 small-offset-3 medium-offset-3 large-offset-3">
            <div className="grid-x">
                {projData.date !== undefined && 
                    <div className="cell auto" >
                        <h4>{projData.date}</h4>
                    </div>  
                }
                {projData.subtitle !== undefined && 
                    <div className="cell auto">
                        <h5>{projData.subtitle}</h5>
                    </div>  
                }
            </div>
        </div>
    </div>
    <div className="grid-x">
        <div className="cell small-10 medium-8 large-4 small-offset-1 medium-offset-2 large-offset-4">
                <div className="grid-x">
                    {projData.details !== undefined &&
                        projData.details.map((entry, idx)=>(
                            <div className="cell shrink small-4 medium-4 large-4 small-offset-1 medium-offset-1 large-offset-1">
                                <ListCard key={idx} backgroundClr={"lightgreen"} rowData={entry} />
                            </div>
                        ))
                    }
                </div>

        </div>
    </div>
    {/* Features of project*/}
    {projData.features !== undefined && 
        <div className="grid-x grid-margin-x">
            <div className="cell auto small-8 medium-6 large-4 small-offset-2 medium-offset-3 large-offset-4">
                <div className="grid-x">
                    <div className="cell shrink">
                        <h5><u>Core Features</u></h5>
                    </div>
                    <div className="cell auto">
                        <ul>
                            {projData.features.map((item,id)=>(
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    } 

    {/* project Description*/}
    {projData.desc !== undefined &&
        projData.desc.map((row, idx)=>(
            <div key={idx} className="grid-x grid-margin-x">
                <div className="cell small-8 medium-6 large-4 small-offset-2 medium-offset-3 large-offset-4">
                    <p>{row}</p>
                </div>
            </div>
        ))
    }
    {/* */}
    {projData.media !== undefined &&
        <div className="grid-x">
            <div className="cell auto small-12 medium-10 large-8 medium-offset-1 large-offset-2">
                <div className="grid-x grid-margin-x">
                    {projData.media.map((icon)=>(
                        <div className="cell shrink small-4 medium-4 large-4 small-offset-1 medium-offset-1 large-offset-1">
                            <img className="thumbnail" src={icon} alt="projectData icon image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    }
    <BasicFooter />
</div>
);
};
