import React, { PropsWithChildren } from "react";
import styles from "./style.module.scss";
import Header from "../Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
