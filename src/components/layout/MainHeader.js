import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MainHeader = () => {
  const { auth } = useContext(AuthContext);
  const { Logout } = useAuth();
  return (
    <header className="header">
      <div classNae="logo">
        <h3>Logo</h3>
      </div>
      <ul className="header__links">
        <li className="header__link">
          <NavLink to="/">Home</NavLink>
        </li>

        {auth ? (
          <>
            <li className="header__link">
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li className="header__link" onClick={Logout}>
              <button className="btn">Logout</button>
            </li>
          </>
        ) : (
          <li className="header__link">
            <NavLink to="/login" className={() => "btn"}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default MainHeader;
