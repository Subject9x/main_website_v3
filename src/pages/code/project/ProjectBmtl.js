import React, { useEffect, useState } from "react";
import CodeProject from "../../../components/projects/code/CodeProject";
import prjBmtlData from "../../../assets/data/proj/projBattleMETAL.json";
import { useNavigate } from "react-router";


export default function ProjectBmtl({props}){

    const nav = useNavigate();
    const [data, setData] = useState(prjBmtlData);

    useEffect(()=>{
        setData(prjBmtlData);
    },[data]);

    return(
        <CodeProject projectData={data} />
    )
};