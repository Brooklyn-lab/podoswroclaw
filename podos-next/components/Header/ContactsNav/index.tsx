import Image from "next/image";
import NavLink from "../Nav/NavLink";
import classes from "./ContactsNav.module.scss";

const contacts = [
  {
    href: "tel:+48574154801",
    label: "+48574154801",
    icon: "phone",
  },
  {
    href: "mailto:podoswroclaw@gmail.com",
    label: "podoswroclaw@gmail.com",
    icon: "mail",
  },
];

export default function ContactsNav() {
  return (
    <ul className={classes.contacts}>
      {contacts.map((item) => (
        <li key={item.href} className={classes.contacts__item}>
          <NavLink href={item.href} className={classes.contacts__link}>
            <Image
              src={`/img/${item.icon}.svg`}
              alt={item.icon}
              height={16}
              width={16}
              className={classes.contacts__icon}
            />
            <span className={classes.contacts__text}>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
