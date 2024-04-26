import React, { memo } from 'react';

const Navbar = ({ adjective, getAdjective}) => {

  console.log("Navbar is rendering...");

  return (
    <>
      <div className="button">
        <button >Change me</button>
      </div>
      <div>
        I am {getAdjective()} Navbar
      </div>
    </>

  )
};

export default memo(Navbar);
