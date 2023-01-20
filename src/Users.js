import React from "react";
import './User.css';
const Users = (props) => {
    return (
        <>
                 <div className="bigbox">
                    <div className="upper">
                        <div><img src={props.av} alt="" /></div>
                    </div>
                    
                    <div className="lower">
                    <h3>{props.name} {props.lname}</h3>
                          <h3>{props.email}</h3>
                          <h4>User ID: {props.id}</h4>
                    </div>
                 </div>
                   
        </>
    );
}
export default Users;