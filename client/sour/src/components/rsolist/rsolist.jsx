import './rsolist.css';
import { rsosendCollectionRef } from '../../firebase/Firebase';
import { getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';


function Rsolist() {

    const [rso, setrso] = useState("");

    useEffect(() => {
        const getrso = async () => {
            const data = await getDocs(rsosendCollectionRef)
            setrso(data.docs.map((doc) => ({...doc.data()})))
            console.log(data.docs.map((doc) => ({...doc.data()})))
        }
        getrso()
    },[])


  return (
    <>
    <div className="rso-list"> 
        
    {
        rso !== undefined && rso !== "" ? 
        rso.map((val) => {
            return (
                <>
                <div className="RSO">
                    <div className='LogoParent'>
                        <img src={val.Logo} width={100} height={100} />
                    </div>
                    <div className='RsoText'>
                        <div className="Title">
                            <h4>{val.Organization_Name}</h4></div>

                        <div className="Description">
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
}

export default Rsolist; 


/* 

<div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 1</h4></div>

                    <div className="Description">
                        <p>Description of RSO 1</p></div>
                </div> 
            </div>


            <div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 2</h4></div>

                    <div className="Description">
                        <p>Description of RSO 2</p></div>
                </div>
            </div>
            <div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 1</h4></div>

                    <div className="Description">
                        <p>Description of RSO 1</p></div>
                </div> 
            </div>


            <div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 2</h4></div>

                    <div className="Description">
                        <p>Description of RSO 2</p></div>
                </div>
            </div>
            <div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 1</h4></div>

                    <div className="Description">
                        <p>Description of RSO 1</p></div>
                </div> 
            </div>


            <div className="RSO">
                <div className="Logo"></div>
                <div className='RsoText'>
                    <div className="Title">
                        <h4>RSO 2</h4></div>

                    <div className="Description">
                        <p>Description of RSO 2</p></div>
                </div>
            </div>
    

-----------------------------------------------------------------


{
            rso.map((val) => {
                return (
                  <>
                    <div className="RSO">
                        <div className='LogoParent'>
                            <img src={val.Logo} width={100} height={100} />
                        </div>
                        <div className='RsoText'>
                            <div className="Title">
                                <h4>{val.Name}</h4></div>

                            <div className="Description">
                                <p>{val.Description}</p></div>
                        </div> 
                    </div>
                  </>
                )
              })
        }

    */