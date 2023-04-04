import React, { useState } from "react";
import { useQuery } from "@apollo/client";


import { addFruitQuery } from "../queries/addFruitQuery";


const AddFruit = ( ) => { 

    const [scientificName , setScientificName] = useState('')
    const [treeName , setTreeName] = useState('')
    // const [origin , setOrigin] = useState('')
    // const [fruitName , setFruitName] = useState('')
    const [loading , data] = useQuery(addFruitQuery)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const displayFruits = ( loading , data ) =>{

        if(loading)
        return (<option disabled>Loading data ....</option>)
    
        else 
        {       return data.map(_data =>{
                return (<option key={_data.id}  value= {_data.id}>_data</option>)
            })
        }
    
    } 
    return ( 
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>scientific Name:</label>
                <input type="text" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
            </div>
            <div className="field">
                <label>Tree Name:</label>
                <input type="text" value={treeName} onChange={(e) => setTreeName(e.target.value)}  />
            </div>
            <div className="field">
                <label>origin:</label>
                <div>{displayFruits}</div>
            </div>
            <button>+</button>
        </form>
    )

}

export default AddFruit