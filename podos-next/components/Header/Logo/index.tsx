import Image from "next/image";
import NavLink from "../Nav/NavLink";
import classes from "./Logo.module.scss";

export default function Logo() {
  return (
    <NavLink href="/" className={classes.logo}>
      <Image
        src="/img/podos-logo.webp"
        alt="Podos Logo"
        className={classes.logo__image}
        width={32}
        height={32}
      />
      <span className={classes.logo__text}>Podos</span>
    </NavLink>
  );
}
