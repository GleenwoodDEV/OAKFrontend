//import logo from "../../assets/icons/logo.svg";
import styles from "./NavBar.module.scss";
import { Logo, Avatar } from "../../assets/icons";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ShowMenu from "../ui/ShowMenu";
import clsx from "clsx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const location = useLocation().pathname;

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <div className={styles.logo}>
              <div className={styles.logo_item}>
                <Logo />
              </div>
            </div>
            <div
              className={clsx([
                styles.item,
                location === "/users" && styles.active,
              ])}
            >
              <Link to={"/users"}>Users</Link>
            </div>
            <div
              className={clsx([
                styles.item,
                location === "/business" && styles.active,
              ])}
            >
              <Link to={"/business"}>Business</Link>
            </div>
            <div
              className={clsx([
                styles.item,
                location === "/cameras" && styles.active,
              ])}
            >
              <Link to={"/cameras"}>Cameras</Link>
            </div>
          </div>
          <div className={styles.profile} onClick={handleShowMenu}>
            <Avatar />{" "}
            {showMenu && (
              <div className={styles.showMenuWrapper}>
                <ShowMenu />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
