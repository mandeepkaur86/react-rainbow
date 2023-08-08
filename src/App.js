
import React,{ useState } from 'react';
//make sure to import the component we just build
import ColorBlock from './Components/ColorBlocks';
import ColorForm from './Components/ColorForm';
import './App.css';

function App() {
  let [colors,setColors] =useState(['violet','blue','lightgreen','green','greenyellow','yellow','orange','red'])
  
  
    let colorMap = colors.map((color, i) => {
      return (
          <ColorBlock key={i} color={color} />
      )
  })
  
  const addColor = (newColor) =>{
    
    setColors([...colors, newColor ])
    }
   
   return (
    <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
    </div>
)

   }
      

export default App;
