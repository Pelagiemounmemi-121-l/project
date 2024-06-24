'use client'
import { useState,useEffect } from 'react';
import Link from 'next/link'

import { Component } from 'react';

export default function home() {
  
const[task,setTask] = useState("")
const[tab,setTab]= useState([])
const change =  ( e ) => {

setTask(e.target.value)
}
const addvalue = () =>{
setTab( prev => {
  return[...prev, {id: prev.length+1, tas:task}]
})
setTask("")
}
const deletetask=(id)=>{

const newtab  = tab.filter((item)=>
    item.id != id
  )
  setTab(newtab)
}
  return (
   <>
  
   <ul className='menu'>
    <li><a href="/">acceuil</a></li>
    <li><a href="about">apropos</a></li>
    <li><a href="/blog">blog</a></li>
   </ul>
   <h1 className='compon'> <i className="fas fa-home "></i>TOLIST</h1>

   <div className='list'>
<label htmlFor="">Ajouter une tache</label> <div>
<input type="text"  placeholder='entrez une tache...' id='tas' 
          value={task}  onChange={change}   /></div>
<div>{task &&(
  <button onClick={addvalue} className='ajout'>Ajouter</button>)}</div>
<h3 className='tache'> liste des taches</h3>
<ul>
{tab.map((item)=>{

return <li key={item.id}><button className='ajout' onClick={()=>deletetask(item.id)}>suprimer</button> {item.tas} </li>
})}

</ul>
   </div>
   </>
  );
}


