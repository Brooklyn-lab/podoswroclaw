"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import classes from "./Burger.module.scss";
import cx from "classnames";

type Props = {
  onClick?: () => void;
  navState?: boolean;
};

export default function Burger({ onClick, navState }: Props) {
  const isMobile = useMediaQuery("lg");

  if (!isMobile) {
    return null;
  }

  return (
    <div
      className={cx(classes.burger, {
        [classes.active]: navState,
      })}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <div className={classes.burger__label}>
        {new Array(3).fill(null).map((_, index) => (
          <span key={index} className={classes.burger__labelSpan}></span>
        ))}
      </div>
    </div>
  );
}
