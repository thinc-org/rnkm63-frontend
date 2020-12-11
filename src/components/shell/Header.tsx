import React from "react";
import "./Header.css";

import LanguageSwitcher from "./misc/LanguageSwitcher";

function HeaderLocaleHOC() {
  return (
    <React.Suspense fallback="loading">
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
