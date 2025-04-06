"use client";

import ContactsNav from "./ContactsNav";
import Logo from "./Logo";
import Nav from "./Nav";
import LangSwitcher from "./LangSwitcher";

import classes from "./Header.module.scss";
import cx from "classnames";
import Burger from "./Burger";
import { useState } from "react";

export default function Header() {
  const [navState, setNavState] = useState(false);

  function handleBurgerClick() {
    setNavState((prev) => !prev);
  }

  return (
    <header className={classes.header}>
      <div className={cx(classes.container, classes.header__container)}>
        <Logo />
        <Nav navState={navState} />
        <div className={classes.header__rightSide}>
          <LangSwitcher />
          <ContactsNav />
          <Burger onClick={handleBurgerClick} navState={navState} />
        </div>
      </div>
    </header>
  );
}
