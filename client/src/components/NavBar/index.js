import React from 'react';
import {Link} from "react-router-dom";
import {FIND_LOCATION} from '../../utils/actions'
import "./styles.css";
import {useAppContext} from '../../utils/GlobalState'


function Navbar() {
    const [state, dispatch] = useAppContext()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          
          <div>
           <img src="./DrakeYes2.jpg" style={{ maxWidth: "70px" }}></img><Link className="navbar-brand" to="/">
            Anti - Social Social
          </Link>
           
          </div>
        </div>
        <div className="navbar-list">
          <ul className="navbar-ul">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">
                Login | Signup
              </Link>
            </li>
            <li>
              <button
                className="locate"
                onClick={() => {
                  navigator.geolocation.getCurrentPosition(
                    (position) => {
                      dispatch({
                        type: FIND_LOCATION,
                        payload: {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                        }
                      });
                    },
                    () => null
                  );
                }}
              >
                <img src="/compass.svg" alt="compass" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;