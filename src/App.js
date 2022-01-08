
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Datatable from './Datatable'
import './index.css'

function App() {

  let [fetched_students,Setfetched_students] = useState([])
  let [loaded,Setloaded] = useState(false)
  let [search,Setsearch] = useState("")

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
  },[fetched_students])

  function Search(rows) {

    return rows.filter(
      (row) =>
        row.firstName.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1 ||
        row.lastName.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1 
    );

  }

  if(loaded){

    return(
      <div className='wrapper'>
        <div className='grid'>
          <div id='search'>
          <input type = "text" value = {search} onChange={e=> Setsearch(e.target.value)}/>
          </div>
        <Datatable data = {Search(fetched_students)} />
        </div>
       
       
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
