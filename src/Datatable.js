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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>

       </>
    )
}