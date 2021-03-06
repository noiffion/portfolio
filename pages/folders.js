import React, { useEffect } from 'react';
import { useRouter }        from 'next/router';
import Udacity              from '../elements/Udacity';
import Codecademy           from '../elements/Codecademy';
import FreeCodeCamp         from '../elements/freeCodeCamp';
import IssueTracker         from '../elements/IssueTracker.js';
import Sorters              from '../elements/Sorters.js';


const Folders = () => {

  useEffect(() => {
    function scrollFunction() {    
      const tesseract = document.getElementById('tesseract_img');    
      const webProj = document.getElementById('webProj');    
      const author = document.getElementById('author');
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {    
        tesseract.className = tesseract.className.replace(/\btesseract_img_normal\b/g, 'tesseract_img_shrunk');    
        author.style.display = 'none';    
        webProj.className = webProj.className.replace(/\btitle_normal\b/g, 'title_shrunk');    
      } else {    
        tesseract.className = tesseract.className.replace(/\btesseract_img_shrunk\b/g, 'tesseract_img_normal');    
        author.style.display = 'block';    
        webProj.className = webProj.className.replace(/\btitle_shrunk\b/g, 'title_normal');    
      }    
    }
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, [])

  const router = useRouter(); 
  const title = router.query.title;
  let folder = null;

  switch (title) {
    case 'Udacity':
      folder = <Udacity />; break; 
    case 'Codecademy':
      folder = <Codecademy />; break; 
    case 'freeCodeCamp':
      folder = <FreeCodeCamp />; break; 
    case 'IssueTracker':
      folder = <IssueTracker />; break; 
    case 'Sorters':
      folder = <Sorters />; break; 
    default:
      folder = null; break;
  } 

  return (
    <>
      {folder}
    </>
  )
};


export default Folders;
