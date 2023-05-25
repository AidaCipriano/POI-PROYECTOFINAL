import React from "react";
import Navbar from "./NavbarT"
import Search from "./SearchT"
import Chats from "./ChatsT"
import "../stilos.scss";
import GroupButton from './GroupButton';

const Sidebar = () => {
  return (
    <div className="sidebarT">
      <GroupButton />
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
