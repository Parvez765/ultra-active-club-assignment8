import React from 'react';
import "./Sport.css"

const Sport = (props) => {
    const { item } = props
    const {picture, name, time} = item
    return (
        <div className='sportContainer'>
            <img src={picture} alt="" />
            <h2>Excercise Name: {name}</h2>
            <h2>Time: {time}</h2>
            <button className='addBtn'>Add To Cart</button>
        </div>
    );
};

export default Sport;