import { useState } from "react"



function App() {
  
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className='h-screen w-full ' style={{backgroundColor: color}}>

      <div className='bg-white w-fit rounded-3xl shadow-2xl '>

        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className=' text-white m-3 p-3 rounded-3xl'>RED</button>

        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}} className=' text-white m-3 p-3 rounded-3xl'>GREEN</button>

        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className=' text-white m-3 p-3 rounded-3xl'>BLUE</button>

        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className=' text-white m-3 p-3 rounded-3xl'>YELLOW</button>

        <button onClick={() => setColor("gray")} style={{backgroundColor: "gray"}} className=' text-white m-3 p-3 rounded-3xl'>GRAY</button>

        <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}} className=' text-white m-3 p-3 rounded-3xl'>PINK</button>

      </div>
    </div>
    </>
  )
}

export default App
