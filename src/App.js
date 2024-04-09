import React,{useState} from 'react'
import styled from 'styled-components'

const App = () => {
  const[title,settitle]=useState("");
  const[desc,setdesc]=useState('');
  const[main,setmain]=useState([]);
  
  
//  form submit and creation of array using input data

  function submithandle(e){
  e.preventDefault();
  setmain([...main,{title,desc}])
 settitle("");
 setdesc("");
//  console.log(main)
  }

// deletehandler

  const deletehandler=(i)=>{
let copyvalue=[...main];
copyvalue.splice(i,1);
setmain(copyvalue);

  }

  // mapping array value

  let render=<h3>no task available</h3>;

  if(main.length>0){
    render=main.map((v,i)=>{
      return (
      < div key={i} className='list'> 
      <div className='rend'>
        <h5>{v.title}</h5>
        <h6>{v.desc}</h6>
        </div>
        <button onClick={()=>{deletehandler(i)}} className='btn'>Delete</button>
        
        </div>);
  });
  }
  else{
    render=<h3>no task available</h3>
  }
  

  return (
    <>
    <Top>
      <h1>To-Do-List</h1>

    </Top>
    <Sub>
    <form onSubmit={submithandle}>
      <input type="text" placeholder="Enter task here" value={title} onChange={(e)=>{
        settitle(e.target.value)
       
      }}/>
      <input type="text" placeholder="Enter description here" value={desc} onChange={(e)=>{
        setdesc(e.target.value)
       
      }}/>
      <button >Add</button>

    </form>
    </Sub>
    <br/>
    <br/>
    <Container>
      
      {render }
      <br/>
      
     
    </Container>
    </>
  )
}

export default App

const Top=styled.div`
height:50px;
width:100%;
color:white;
text-align:center;
background-color:black;
h1{
  font-size:30px;
}

`;
const Sub=styled.div`
input{
  border:2px solid black;
  margin-top:20px;
  margin-left:10px;
  padding:5px;
  font-size:20px;
  border-radius:10px;
  width:500px;
}
button{
  border:2px solid black;
  margin-left:10px;
  padding:5px;
  border-radius:10px;
  margin-bottom:5px;
  background-color:black;
  color:white;
  font-size:20px;
  font-weight:700;
}

}

`;

const Container=styled.div`
background-color:grey;
min-height:50px;
padding:15px;
.rend{
  display:flex;
  gap:20px;
  padding-left:20px;
  padding-right:20px;
  justify-content:space-between;
  width:50%;
}
.list{
  display:flex;
  margin-bottom:20px;
  text-align:center;
  justify-content:space-between;
  width:100%;
}
.btn{
  border:2px solid black;
  border-radius:5px;
  background-color:black;
  color:white;
}
`;