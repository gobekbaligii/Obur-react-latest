import React from "react";
import { Restaurants } from "../Components/Page/Home";
import Banner from "../Components/Page/Common/Banner";

function Home() {
  return (
    <div>
      <Banner />
      <div className="container p-2">
        <Restaurants />
      </div>
    </div>
  );
}

export default Home;
