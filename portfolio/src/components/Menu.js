import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  handleClick = e => {
    const links = document.querySelectorAll("a.item");
    links.forEach(item => {
      item.classList.remove("active");
      item.classList.remove("teal");
    });
    e.target.className += " active teal";
  };

  render() {
    return (
      <div>
        <div>菜单栏：</div>
        <div className="ui vertical menu" onClick={this.handleClick}>
          <Link to="/" className="active teal item">
            React Projects
          </Link>
          <Link to="/js" className="item">
            JS Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
