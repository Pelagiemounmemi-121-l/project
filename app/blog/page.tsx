import React from 'react'

type Props={}

export default function page({}: Props){
return(
  <>
  <head>
    <title>blog</title>
    <link rel="stylesheet" href="fontawesome-free-6.4.2-web copy/css/all.min.css"></link>
  </head>

   <ul className='menu'>
    <li><a href="/acceuil">acceuil</a></li>
    <li><a href="/about">apropos</a></li>
    <li><a href="/blog">blog</a></li>
   </ul>
   <h1 className='component'><i className="fas fa-home "></i> bienvenue sur votre blog</h1>
   </>
)

}