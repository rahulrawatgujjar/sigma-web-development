import React,{memo} from 'react';

const Navbar = ({adjective}) => {

  console.log("Navbar is rendering...");

  return (
    <div>
      I am {adjective} Navbar
    </div>
  )
};

export default memo(Navbar);
