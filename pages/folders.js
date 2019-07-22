import { useRouter } from 'next/router';
import Udacity from '../elements/Udacity';
import Codecademy from '../elements/Codecademy';
import FreeCodeCamp from '../elements/FreeCodeCamp';
import Personal from '../elements/Personal';

const Folders = props => {

    const router = useRouter(); 
    const title = router.query.title;
    let folder = null;

    switch (title) {
      case 'Udacity':
        folder = <Udacity title={title}/>; break; 
      case 'Codecademy':
        folder = <Codecademy title={title}/>; break; 
      case 'freeCodeCamp':
        folder = <FreeCodeCamp title={title}/>; break; 
      case 'Personal':
        folder = <Personal title={title}/>; break; 
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
