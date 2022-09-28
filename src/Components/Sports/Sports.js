import React, { useState } from 'react';
import "./Sports.css"
import myImage from "../../images/myImage-01.png"
import Swal from 'sweetalert2'
const Sports = () => {

    const [timer, setTimer] = useState(0)
    
    const activityCompleted = () => {
        Swal.fire(
    'Good job!',
    'You Have Achieve Your Goal',
  'success'
)
    }

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
                    <div className='selfInfo'>
                        <h3>75kg Weight</h3>
                        <h3>5.2 Height</h3>
                        <h3>24 Years</h3>
                    </div>
               </div>
                <div className='breakInfo'>
                    <h2>Add A Break</h2>
                    <button className='btnAdd' onClick={() => setTimer(10)}>
                        <h3>10s</h3>
                  </button>
                    <button className='btnAdd' onClick={() => setTimer(20)}>
                        <h3>20s</h3>
                  </button>
                    <button className='btnAdd' onClick={() => setTimer(30)}>
                        <h3>30s</h3>
                  </button>
                    <button className='btnAdd' onClick={() => setTimer(40)}>
                        <h3>40s</h3>
                  </button>
                </div>
                <div className='excerciseDetails'>
                    <h2>Excercise Detail</h2>
                    <div className='excerciseTime'>
                        <h3>Excercise Time</h3>
                        <h3>0 Seconds</h3>
                    </div>
                </div>
                <div className='excerciseDetails'>
                    <h2>Break Detail</h2>
                    <div className='excerciseTime'>
                        <h3>Break Time</h3>
                        <h3>{timer}</h3>
                    </div>
                </div>
            <button className='completedBtn' onClick={activityCompleted}>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sports;