"use client";

import NavLink from "./NavLink";
import classes from "./Nav.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import cx from "classnames";

const navItems = [
  {
    href: "#about",
    label: "O mnie",
  },
  {
    href: "#why-us",
    label: "Dlaczego warto wybrać?",
  },
  {
    href: "#services",
    label: "Usługi i ceny",
  },
  {
    href: "#socials",
    label: "Adres",
  },
  {
    href: "#works",
    label: "Moje prace",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
];

type Props = {
  navState: boolean;
};

export default function Nav({ navState }: Props) {
  const isMobile = useMediaQuery("lg");

  return (
    <nav
      className={cx(classes.nav, {
        [classes.nav__mobile]: isMobile,
        [classes.active]: navState,
      })}
    >
      <ul className={classes.nav__list}>
        {navItems.map((item) => (
          <li key={item.href} className={classes.nav__item}>
            <NavLink href={item.href} className={classes.nav__link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
