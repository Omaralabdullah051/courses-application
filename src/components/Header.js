import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import CustomActiveLink from "./CustomActiveLink";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="h-12 bg-[#0B1120]/80 pt-2">
      <nav className="nav-bar">
        <ul className="flex justify-center items-center p-2 text-sm font-semibold space-x-6">
          <CustomActiveLink to="/">Home</CustomActiveLink>
          <CustomActiveLink to="/checkout">Checkout</CustomActiveLink>
          <CustomActiveLink to="/blogs">Blogs</CustomActiveLink>
          <CustomActiveLink to="/info">Info</CustomActiveLink>
          <CustomActiveLink to="/About">About</CustomActiveLink>
          {!user ? (
            <CustomActiveLink to="/login">Login</CustomActiveLink>
          ) : user ? (
            <button className="text-[#94A3B8]" onClick={() => signOut(auth)}>
              Signout
            </button>
          ) : (
            <CustomActiveLink to="/login">Login</CustomActiveLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
