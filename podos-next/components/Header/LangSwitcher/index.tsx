"use client";

import { usePathname } from "next/navigation";
import NavLink from "../Nav/NavLink";
import classes from "./LangSwitcher.module.scss";
import cx from "classnames";

type Language = {
  href: string;
  lang: string;
};

const languages: Language[] = [
  {
    href: "/ua",
    lang: "UA",
  },
  {
    href: "/",
    lang: "PL",
  },
];

export default function LangSwitcher() {
  const path = usePathname();

  return (
    <ul className={classes.langSwitcher}>
      {languages.map((item) => {
        const isActive =
          item.href === "/" ? path === "/" : path.startsWith(item.href);

        return (
          <li key={item.href} className={classes.langSwitcher__item}>
            <NavLink
              href={item.href}
              className={cx(classes.langSwitcher__link, {
                [classes.active]: isActive,
              })}
            >
              {item.lang}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
