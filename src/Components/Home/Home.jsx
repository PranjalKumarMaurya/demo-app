import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';

export default function Home() {

    const names = ["Kashvi", "Pranjal", "Aryan"];

    const [likes, setLikes] = React.useState(0); //sets the initial value to likes
    function handleClick() {
        setLikes(likes+1); // updates the value of likes by some method, here increment
    }

    return(
        <div>
           <Header title="Pranjal"/>

           <ul>
             {names.map(name => (  //Mapped the whole names array and named the element as 'name' and afterwards listed name (in a loop). 
                <li>{name}</li>
             ))}
           </ul>

           <button onClick={handleClick}>Likes({likes})</button>  

        </div>
    )
}