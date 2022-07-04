import React, {useState , useEffect} from 'react';

const Fns = (props) => {
  const [scroll , checkScroll] = useState({
    scrollY : window.scrollY
  });
  const handleScroll = () => {
      checkScroll({
          scrollY : window.scrollY
      });
  };
  useEffect(()=>{
      window.addEventListener('scroll' , handleScroll);
      return () => {
          window.removeEventListener('scroll' , handleScroll);
      }
  }, []);
  
}


// function Scroll() {
  
// }

export default Fns;