import "./cssFile/Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setloginStatusSlice } from "../redux/slice/loginLogoutStatus";
import { setNameSlice } from "../redux/slice/userName";

function Navbar() {
  const dispatch = useDispatch();
  const nameDispatch = useDispatch();

  const status = useSelector((state) => state?.loginStatusReducer?.status);

  async function deleteUser() {
    try {
      await axios.get(`http://localhost:8080/user/logout?userId=${status}`);
      dispatch(setloginStatusSlice(""));
      nameDispatch(setNameSlice(""));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbarDiv">
      <h3 style={{ marginLeft: "10px" }}>VidyutTech</h3>
      <nav className="nav">
        <Link className="navLink" to={"/home"}>
          Home
        </Link>
        <Link className="navLink" to={"/About"}>
          About
        </Link>
        <Link className="navLink" to={"/userfeature"}>
          User Features
        </Link>
        {status ? (
          <Link className="navLink" to={"/home"} onClick={deleteUser}>
            Logout
          </Link>
        ) : (
          <Link className="navLink" to={"/login"}>
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
