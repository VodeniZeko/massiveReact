import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
