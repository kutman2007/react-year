import {useState} from 'react'
import './App.css';
import { User } from './compo/user';
import { Emp } from './data';
function App (){
  const[click2,setStatus,click,status]=useState("Empl")
  const [showButton, setShowButton] = useState(false)
  // const renderdad = ()=>{
    // switch(click){
    //   case"kyrgyz":
    //   let ker = Emp.filter((el,id)=>{
    //    return el.click=="kyrgyz"
    //  })
    //  return ker.map((el,id)=>{
    //   return <User el ={el} />
    //  })
    //  default: 
    //  return ""
    //   }
    
    // }

  const renderuser=()=>{
    switch(status,click,click2){
      case"Empl":
       let arr = Emp.filter((el,id)=>{
        return el.status =="Empl"
  

      })
      return arr.map((el,id)=>{
       return <User el ={el} />
      })
      case"men":
     let arr2= Emp.filter((el,id)=>{
        return el.status=="men"
      })
      return arr2.map((el,id)=>{
        return <User el ={el}  />
      })
      case"women":
      let arr3= Emp.filter((el,id)=>{
       return el.status=="women"
      })
      return arr3.map((el,id)=>{
         return <User el ={el} />
      })
      case"kyrgyz":
      let ker = Emp.filter((el,id)=>{
       return el.click=="kyrgyz"
     })
     return ker.map((el,id)=>{
      return <User el ={el} />
     })
     case"from":
     let ker2 = Emp.filter((el,id)=>{
      return el.click2=="from"
    })
    return ker2.map((el,id)=>{
     return <User el ={el} />
    })
      default: 
      return ""
    }
  }
  function handleClick() {
    setShowButton(true);
    setStatus('Empl')
  }
  return (
    <div className="App">
    <div className='btns'>
    <button onClick={handleClick}>year 0-18</button>
      <button onClick={()=>setStatus('men')}>year 18-24</button>
      <button onClick={()=>setStatus('women')}>year 24-60</button>

     <div>      {showButton &&  <button className='dad' onClick={()=>setStatus("kyrgyz")}>Kyrgyzstan</button>}
      {showButton &&  <button className='dad' onClick={()=>setStatus("from")}>Foreigners</button>}</div>
    </div>
      <div className='cont'>
        {renderuser()}
      </div>
   
    </div>
  );
}

export default App;
