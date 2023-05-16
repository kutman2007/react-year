
import React from "react";
import './user.css'
export const User =({color,el})=>{
    return <div className=" cont">
        <div className="user-card">
          <h2>{el.from}</h2>
        <div className="avatar">
            <img src={el.img} alt="" />
        </div>
        <b>{el.full_name}</b>
        <b className="year">{el.year}</b>

    </div>
    </div>
}