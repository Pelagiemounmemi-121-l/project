
import Link from 'next/link'

export default function home() {
  return (
   <>
  
   <ul className='menu'>
    <li><a href="/">acceuil</a></li>
    <li><a href="about">apropos</a></li>
    <li><a href="/blog">blog</a></li>
   </ul>
   </>
  );
}
