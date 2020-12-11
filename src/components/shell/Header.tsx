import React from "react";
import "./Header.css";

import { Loading } from "../common";

import LanguageSwitcher from "./misc/LanguageSwitcher";

function HeaderLocaleHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Header />
    </React.Suspense>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>HEADER GOES HERE</h1>
      <LanguageSwitcher />
    </div>
  );
}

export default HeaderLocaleHOC;
