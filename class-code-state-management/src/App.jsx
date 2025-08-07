import { useState } from 'react'
import MyComponent from './MyComponent'
function App() {
  
  // let count = 0
  const [count, setCount] = useState(0)
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ])
  // console.log(count)

  function handleClick(){
    console.log('Ouch you clicked me!')
    // count++
    setCount(count + 1)
    console.log(count)
  }

  function addCat(newCat){
    console.log('Adding new Cat!')
    const newCatsArray = [...cats, newCat]
    console.log(newCatsArray)
    setCats(newCatsArray)
  }
  console.log('rendered App.jsx')
  return (
  
  <>
    <h1>Welcome to the counter app</h1>
    <p>counter in app.js</p>
    <button onClick={handleClick}>Count Up!</button>
    <h3>{count}</h3>
    <button onClick={() => addCat({ name: "Meshmesh", breed: "Orange"})}>Add Cat!</button>
    <ol>
      {
        cats.map((cat, index) => {
          return <li key={index}>{cat.name}</li>
        })
      }
    </ol>
    <hr />
    <p>component 1</p>
    <MyComponent componentNumber='1'/>
    <hr />
    <p>component 2</p>
    <MyComponent componentNumber='2'/>
    <hr />
    <p>component 3</p>
    <MyComponent componentNumber='3'/>
  </>
  )
}

export default App
