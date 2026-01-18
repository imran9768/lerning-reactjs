import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="main-layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
