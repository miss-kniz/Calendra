import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-primary/40 shadow-md h-24 p-4 w-full">
      <div className=" flex justify-between mx-auto items-start h-full max-w-7xl">
        <Image src="/c-logo.jpg" alt="Calendra Logo" width={70} height={80} />
      </div>
    </div>
  );
};

export default Navbar;
