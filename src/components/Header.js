import CustomActiveLink from "./CustomActiveLink";

const Header = () => {
  return (
    <div className="h-12 bg-[#0B1120]/80 pt-2">
      <nav className="nav-bar">
        <ul className="flex justify-center items-center p-2 text-sm font-semibold space-x-6">
          <CustomActiveLink to="/">Home</CustomActiveLink>
          <CustomActiveLink to="/checkout">Checkout</CustomActiveLink>
          <CustomActiveLink to="/blogs">Blogs</CustomActiveLink>
          <CustomActiveLink to="/info">Info</CustomActiveLink>
          <CustomActiveLink to="/About">About</CustomActiveLink>
          <CustomActiveLink to="/login">Login</CustomActiveLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
