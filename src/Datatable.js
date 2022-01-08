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
        <div key = {students.id}>
            <img src = {students.pic}/>
        </div>
        <div key = {students.id + Getaverage(students.grades) }>
            <pre>
                {students.firstName} {students.lastName}
                <br></br>
                Email: {students.email}
                <br></br>
                Company: {students.company}
                <br></br>
                Skill: {students.skill}
                <br></br>
                Average: {Getaverage(students.grades)}
            </pre>
        </div>
      </>
      )}
      </>
       )

    }