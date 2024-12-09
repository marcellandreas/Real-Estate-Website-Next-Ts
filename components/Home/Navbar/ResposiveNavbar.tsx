"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function ResposiveNavbar() {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);

  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={openNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}

export default ResposiveNavbar;