import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles/Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">
          <p>#{topic}</p>
        </span>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sidhant Kumar Sahoo</h2>
        <h4>sidhant1593@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
