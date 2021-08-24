import React from 'react';


function App() {

  const person = {
    name: "Shasa",
    twitter: 'shasa_dev',
    bio: "react guru",
  };

  return (
    <div>
      {Object.keys(person).map(key =>(
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
            {person[key]}
          </p>
          
          ))}
    </div>
  );
}

export default App;
