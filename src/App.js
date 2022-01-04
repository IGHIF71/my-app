
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';




function App() {

  let [fetched_students,Setfetched_students] = useState([])
  let [loaded,Setloaded] = useState(false)

  function Checkdata(data){
    let answer = false
   try{
     let num = data[0]
    answer = true
   }catch{
     setTimeout(Checkdata(), 2000)
   }
   return answer
  }
  
  useEffect(() => {
    async function Setdata(){

      await axios.get('https://api.hatchways.io/assessment/students').then(response => response.data.students).then(data => Setfetched_students(data))
      
    }
    Setdata()
    if(typeof fetched_students[0] === 'undefined' ){
      Setloaded(false)
    }else{
      Setloaded(true)
    }
    return () => {
    
    }
  },)

  if(loaded){
    return(
      <div>
        <p>done loading</p>
        <p>{console.log(fetched_students[0].city)}</p>
      </div>
    )
  }else{
    return(
      <div>
        <p>... waiting to recieve data</p>
      </div>
    )
  }
  }
 
 
  
 

export default App;
