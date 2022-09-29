import React from 'react';
import "./Sport.css"

const Sport = (props) => {
    const { item, handleAddToList} = props

    
    const { picture, name, time } = item
    
   


    return (
        <div className='sportContainer'>
            <img src={picture} alt="" />
            <h4>Excercise Name: {name}</h4>
            <h5>Time:{time}</h5>
            <button className='addBtn' onClick={()=>handleAddToList(time)}>Add To List</button>
        </div>
    );
};

export default Sport;