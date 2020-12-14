import React from 'react';
import './App.css';
import Star from "./components/star/Star";

function App() {
  return (
   <div>
     This is APP component
       <Rating/>
       <Accordion/>
   </div>
  );
}

function Rating() {
  return (
     <div>
         <Star/>
         <Star/>
         <Star/>
         <Star/>
         <Star/>
         <Star/>
     </div>
  )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default App;
