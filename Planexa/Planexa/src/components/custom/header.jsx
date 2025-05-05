import React from "react";
import { Button } from "../ui/button";
function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between">
      <img src="/logo.svg" alt="" />
      <div>
        <Button>sign in</Button>
      </div>
    </div>
  );
}

export default Header;
