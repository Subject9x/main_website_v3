import React, {useEffect, useState} from "react";

export default function ListCard({backgroundClr, rowData}){

    const [bColor, setBColor] = useState("lightgrey");

    useEffect(()=>{
        if(rowData.type === "Team"){
            setBColor("#a9d9f9");
        }
        else if(rowData.type === "Tech"){
            setBColor("lightgreen");   
        }
    }, [bColor])

    return(
    <table className="unstriped">
        <thead style={{borderBottom : "3px solid black"}}><tr><td style={{textAlign : "center", backgroundColor: bColor}}>{rowData.type}</td></tr></thead>
        <tbody style={{backgroundColor : bColor}}>
        {rowData.data.map((row, idx)=>(
                <tr key={idx} style={{backgroundColor: bColor, borderStyle : "none", borderBottom: "1px solid gray"}}>
                    <td>
                        {row.url !== undefined &&
                            <a href={row.url}>{row.name}</a>
                        }
                        {row.url === undefined &&
                            row.name
                        }
                        {row.roles !== undefined &&
                        <ul style={{listStyle : "none"}}>
                            {row.roles.map((role)=>(
                                <li>{role}</li>
                            ))}
                        </ul>
                        }
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};