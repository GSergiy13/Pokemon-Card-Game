import Menu from "./menu/menu";
import Navbar from "./navbar/navbar";
import { useState } from 'react';

const MenuHeader = ({ bgActive = false }) => {
  const [state, setState] = useState(false);

  const hendlerOpenMenu = () => {
    setState(!state);
  }

  // console.log(state);

  return (
    <>
      <Menu active={state} />
      <Navbar hendlerOpenMenu={hendlerOpenMenu} active={state} bgActive={bgActive} />
    </>
  )
}

export default MenuHeader;