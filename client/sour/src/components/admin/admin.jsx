import {Link, Route, Routes} from "react-router-dom";
import { rsoCollectionRef } from '../../firebase/Firebase';
import { getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import "./admin.css"


function Admin() {

    const [rso, setrso] = useState("");

    useEffect(() => {
        const getrso = async () => {
            const data = await getDocs(rsoCollectionRef)
            setrso(data.docs.map((doc) => ({...doc.data()})))
            console.log(data.docs.map((doc) => ({...doc.data()})))
        }
        getrso()
    },[])


  return (
    <>

    <div className="A1"><p>ADMIN PAGE</p></div>


    <div className="rso-list-check"> 
    {
    rso !== undefined && rso !== "" ? 
    rso.map((val) => {
        return (
            <>
            <div className="RSO-c">
                <div className='LogoParent-c'>
                    <img src={val.Logo} width={100} height={100} />
                </div>
                <div className='RsoText-c'>
                    <div className="Title-c">
                        <h4>{val.Organization_Name}</h4></div>

                    <div className="Description-c">
                        <p>{val.Description}</p></div>
                </div> 
            </div>
            </>
        )
    })
    : <></>
    }     

        
    </div>


    </>
  );
};
    
export default Admin;