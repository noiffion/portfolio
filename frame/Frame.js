import Link from 'next/link';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


const Frame = props => {

  function mouseOver(event) {
    const img = event.target;
    img.src = img.getAttribute('data-focused');
  }

  function mouseOut(event) {
    const img = event.target;
    img.src = img.getAttribute('data-normal');
  }

  return (
    <>
      <Header />
      <main>
        <Sidebar mouseOver={mouseOver} mouseOut={mouseOut} />
        {props.children}
      </main>
      <Footer />
    </>
  );
}


export default Frame;
