import React from 'react'

type Props={}

export default function page({}: Props){
return(
  <>
  <head>
    <title>pageapropos</title>
  </head>
   <ul className='menu'>
    <li><a href="/acceuil">acceuil</a></li>
    <li><a href="/about">apropos</a></li>
    <li><a href="/blog">blog</a></li>
   </ul>
   <h1><i className="fas fa-home "></i>apropos</h1>
   </>
)

}