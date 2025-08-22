import React from "react";

import Introduction from "../Components/Introduction";
import Products from "../Components/Products"; 
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";


function Home() {
  return (
    <div>

      <Introduction />
      <Products />
      <Services />
      <Testimonials />

    </div>
  );
}

export default Home;
