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
      <Menu state={state} />
      <Navbar hendlerOpenMenu={hendlerOpenMenu} state={state} bgActive={bgActive} />
    </>
  )
}

export default MenuHeader;