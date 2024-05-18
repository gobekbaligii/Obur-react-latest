import React from "react";
import { MenuItemList } from "../Components/Page/Home";
import Banner from "../Components/Page/Common/Banner";

function MenuList() {
  const restaurantId = 1;
  return (
    <div>
      <Banner />
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default MenuList;
