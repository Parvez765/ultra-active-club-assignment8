import React from 'react';
import "./Sports.css"
import myImage from "../../images/myImage-01.png"

const Sports = () => {
    return (
        <div className='sportsContainer'>
            <div className='imgContainer'>
                <h2>Get A Jump Of Your Day</h2>
            </div>
            <div>
                <div className='infoContainer'>
                     <img src={myImage} alt=""></img>
                    <div className='information'>
                    <h2>Md. Parvez Hossain Sakib</h2>
                    <h5>Chattagram, Bangladesh</h5>
                </div>
               </div>
                <div className='breakInfo'>
                    <h2>Add A Break</h2>
                </div>
            </div>
        </div>
    );
};

export default Sports;