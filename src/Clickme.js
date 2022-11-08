import React, { useState } from 'react';


function Clickme() {
    // track of word
    const [word, setWord] = useState("")
    //track of the count
    const [count, setCount] = useState(0)

    console.log('word', word)

    function addCount(e){
        e.preventDefault()
        setCount((count) => count + word.length);
        setWord("")
    }

  return (
    <div>
      <form onSubmit={addCount}>
        <div>
        <input
            text="text"
            placeholder='Type here!'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            >
        </input>
        </div>
        <button>
            <input type="Submit" value="Submit"></input>
        </button>
      </form>
      <p>{count}</p>
    </div>
  )
}

export default Clickme
