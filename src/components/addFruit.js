import React, { useEffect, useState } from "react";
import {useQuery, useMutation} from "@apollo/client";
import { Fruits, Fruit , addFruitMutation , updateFruitMutation , deleteFruitMutation } from "../queries/addFruitQuery";


const AddFruit = ( ) => { 
    let input;
    const [id, setId] = useState('');
    const [scientific_name, setScientificName] = useState('');
    const [tree_name, setTreeName] = useState('');
    const [fruit_name, setFruitName] = useState('');
    const [family, setFamily] = useState('');
    const [origin, setOrigin] = useState('');
    const [description, setDescription] = useState('');
    const [bloom, setBloom] = useState('');
    const [maturation_fruit, setMaturationFruit] = useState('');
    const [life_cycle, setLifeCycle] = useState('');
    const [climatic_zone, setClimaticZone] = useState('');
    const [addFruit, { data, loading, error }] = useMutation(addFruitMutation);
    const [updateFruit, { upDateFruit_data, updateFrloading }] = useMutation(updateFruitMutation);
    const [deleteFruit, { deleteFruit_data, deleteFruit_loading }] = useMutation(updateFruitMutation);

   
   
    const handleSubmit = (event) => {
    event.preventDefault();
    addFruit({
      variables: {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
        
      },
    });
  };

  const handleUpdate = (event) => { 
console.log('here')
    updateFruit({
      variables: {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
        
      },
    });
  }

    const handleDelete = (event) => {


      deleteFruit({

        variables:{
          id:id,
        }

      })

    }

  

    // const displayFruits = ( loading , data ) =>{

    //     if(loading)
    //     return (<option disabled>Loading data ....</option>)
    
    //     else 
    //     {       return data.map(_data =>{
    //             return (<option key={_data.id}  value= {_data.id}>_data</option>)
    //         })
    //     }
    
    // } 
    return ( 
        <div>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </label>
      <br />
      <label>
        Scientific Name:
        <input
          type="text"
          value={scientific_name}
          onChange={(event) => setScientificName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Tree Name:
        <input
          type="text"
          value={tree_name}
          onChange={(event) => setTreeName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Fruit Name:
        <input
          type="text"
          value={fruit_name}
          onChange={(event) => setFruitName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Family:
        <input
          type="text"
          value={family}
          onChange={(event) => setFamily(event.target.value)}
        />
      </label>
      <br />
      <label>
        Origin:
        <input
          type="text"
          value={origin}
          onChange={(event) => setOrigin(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Bloom:
        <input
          type="text"
          value={bloom}
          onChange={(event) => setBloom(event.target.value)}
        />
      </label>
      <br />
      <label>
        Maturation Fruit:
        <input
          type="text"
          value={maturation_fruit}
          onChange={(event) => setMaturationFruit(event.target.value)}
        />
        
      </label>

      <br />

      <label>
        Life Cycle:
        <input
          type="text"
          value={life_cycle}
          onChange={(event) => setLifeCycle(event.target.value)}
          />
          </label>
          
          <br />

          <label>
            Climatic Zone:
            <input
              type="text"
              value={climatic_zone}
              onChange={(event) => setClimaticZone(event.target.value)}
            />

          </label>
          <br />
          <button type="submit">Add Fruit</button>
          <button type="button" onClick={handleUpdate}>Update</button>
          <button type="button" onClick={handleDelete}>Delete</button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
        </form>



      </div>
    )

}

export default AddFruit