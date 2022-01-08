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
        <table cellPadding={1} cellSpacing={1} className="student_info_table">
            <thead>

            </thead>

            <tbody>
                {data.map (students=> 
                <tr className="student_info" key = {students.email+students.lastName}>
                    {
                        <td> 
                            <img src = {students.pic} className = "profile_pic"/>
                        </td>
                    }
                    <td>
                        {students.firstName} {students.lastName}
                    </td> 
                    <td>
                        {students.email}
                    </td>
                    <td>
                        {students.company}
                    </td>
                    <td>
                        {students.skill}
                    </td>
                    <td>
                        {Getaverage(students.grades)}
                    </td>
                </tr>
                )}

            </tbody>

        </table>
    )
}