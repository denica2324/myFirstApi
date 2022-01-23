import React from "react";
import { useNavigate } from "react-router-dom";
import './User.css';


const User = ({
    userInfo,
}) => {


    let navigate = useNavigate()

    let { name, email, address, phone, website,id } = userInfo
    console.log(userInfo)
    return (
        <div className="container">
            <div>
                <input className="field" type='text' value={email}  disabled/>
            </div>
            <div>
                <input className="field" type='text' value={name} disabled/>
            </div>
            <div>
                <input className="field" type='text' value={phone} disabled/>
            </div>
            <div>
                <input className="field" type='text' value={website} disabled/>
            </div>
            <div>
                <input className="field" type='text' value={address.street} disabled/>
            </div>
            <div>
                <input className="field" type='text' value={address.suite} disabled/>
            </div>
            <div>
                <input className="field" type='text' value={address.city} disabled/>
            </div>
            <div style={{display:'flex',alignItems:'center',marginLeft:5}}>
                <button 
                onClick={()=>navigate('/posts',{
                    state:{
                        name:name,
                        id:id,
                        
                    }
                })}
                style={{backgroundColor:'#32a5f5',color:'white',height:35,fontWeight:'bold'}}>   
                
                GetPost
             </button>
            </div>

        </div>
    )
}

export default User;