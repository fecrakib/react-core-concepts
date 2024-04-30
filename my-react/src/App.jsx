

import './App.css'
function App() {
 
  return (
 <>

<Person/>
<Person></Person>

<Device name="Labtop" price="43"></Device>
<Device name="Mobile" price='33'/>
<Device name="Mobile" price='33'/>

 </>
  )
}
function Device(props){
console.log(props)
return(
<>
<h1> This Device is {props.name} </h1>
</>

)
}
function Person(){
  const person = {name:"Rakib",age:32}
  return (
<div className='person'>
  <h1>I am {person.name} and my age:{person.age}</h1>
  <h2>Islam</h2>

</div>

  )
 
}

export default App
