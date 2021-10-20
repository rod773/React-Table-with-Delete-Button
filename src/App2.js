import React from 'react'
import { useState } from 'react'
import Table from './Table2'

const App2 = (props) => {

    const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]

      const [array, setArray] = useState(characters)

      const removeCharacter = index => {
          console.log('hello')
          let deleteOneItem = array.filter((item,i) => i !== index);
          setArray(deleteOneItem);
            };
    
    const [count, setCount] = useState(0);
    
    return (
        <div className="container">
            <Table characterData={array} removeCharacter={removeCharacter} />    
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
        </div>
    )
}
export default App2