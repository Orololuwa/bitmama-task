import "./header.css";
import { FaGithub, FaBars, FaBell } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="main-nav">
        <div className="left-al">
          <FaBars className="fa fa-bars" id="bar" aria-hidden="true" />
          <FaGithub className="fa fa-github" aria-hidden="true" />
          <div className="menu">
            <ul>
              <li>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Search or jump to.."
                    className="nav-input"
                  />
                  <div>/</div>
                </div>
              </li>
              <li>
                <Link to="#">Pulls</Link>
              </li>
              <li>
                <Link to="#">Issues</Link>
              </li>
              <li>
                <Link to="#">Marketplace</Link>
              </li>
              <li>
                <Link to="#">Explore</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-al">
          <FaBell className="fa fa-bell-o" aria-hidden="true" />
        </div>
      </div>
      <div className="mobile hide" id="mobile-nav">
        <ul>
          <li>
            <div className="input-mobile">
              <input
                type="text"
                placeholder="Search or jump to.."
                className="nav-input"
              />
              <div>/</div>
            </div>
          </li>
          <li>
            <Link to="#">Dashboard</Link>
          </li>
          <li>
            <Link to="#">Pull requests</Link>
          </li>
          <li>
            <Link to="#">Issues</Link>
          </li>
          <li>
            <Link to="#">Marketplace</Link>
          </li>
          <li>
            <Link to="#">Explore</Link>
          </li>
          <li className="user">
            <div>
              <img src="" alt="userAvatar" id="dropdownImg" />
              <Link to="#" className="username"></Link>
            </div>
          </li>
          <li>
            <Icon className="iconify" icon="octicon:sign-out-16" />
            <b>Sign out</b>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
