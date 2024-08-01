import React, { useState } from 'react'

export default function Player({initialName,symbol,isActive}) {
    const [playerName,setplayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editing)=> !editing);
    }
    function handleChange(e){
            setplayerName(e.target.value);
        }


    let editablePlayerName = <span className="player-name">{playerName}</span>;
    
    if(isEditing){
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}></input>
    }
    
    return(
    <li className={isActive ? 'active':undefined}>
        <span className='player'>        
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
    </li>
    );
}
