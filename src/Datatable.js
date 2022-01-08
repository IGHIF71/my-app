import './index.css'

export default function Datatable({data}){
    function Getaverage(array){
        var total = 0
      
       for (var num = 0; num < array.length; num++){
         total += Number(array[num])
         
       }
      
       return (total/array.length)
     }
    
    return(
      <>
      {data.map (students=> 
      <>
        <div  className = 'circletag'key = {students.id}>
            <img src = {students.pic}/>
        </div>
        <div key = {students.id + Getaverage(students.grades) }>
            
               <p className='info'> {students.firstName} {students.lastName} </p>
                <br></br>
                <p className='info'>{students.email}</p>
                <br></br>
                <p className='info'> Company: {students.company}</p>
                <br></br>
                <p className='info'>Skill: {students.skill}</p>
                <br></br>
               <p className='info'>Average: {Getaverage(students.grades)}</p>
           
        </div>
      </>
      )}
      </>
       )

    }