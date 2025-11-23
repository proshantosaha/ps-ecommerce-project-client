import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import CartModal from "../pages/shop/cartModal";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);

  const [logoutUser] = useLogoutUserMutation();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropDownToogle = () => setIsDropDownOpen(!isDropDownOpen);

  const userDropdownMenus = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payment", path: "/dashboard/payment" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const adminDropdownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/all-orders" },
    { label: "Add Products", path: "/dashboard" },
  ];

  const dropDownMenus =
    user?.role === "admin" ? [...adminDropdownMenus] : [...userDropdownMenus];

  const handleLogOut = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      alert("Logout successful");
      navigate("/");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-[var(--color-footer-nav-bg)] text-[var(--color-primary-light)]">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center py-4">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link to="/">
            <span className="gradient-text">Saha</span>
            <span className="gradient-text">Fashion.</span>
          </Link>
        </div>

        {/* ----------- Mobile Hamburger Button ----------- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* ----------- Desktop Menu ----------- */}
        <ul className="hidden md:flex gap-6 font-medium">
          {["Home", "Shop", "Pages", "Contact"].map((label) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-clip-text text-transparent gradient-text font-semibold"
                      : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#7fd1b9] hover:via-[#4dd0e1] hover:to-[#81c7f5]"
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* ----------- Icons Section ----------- */}
        <div className="relative flex items-center gap-4">

          {/* Search */}
          <NavLink to="/search">
            <i className="ri-search-line text-white text-lg"></i>
          </NavLink>

          {/* Cart */}
          <button onClick={handleCartToggle} className="hover:text-white relative">
            <i className="ri-shopping-bag-line text-lg"></i>
            <sup className="text-xs absolute -top-2 -right-2 px-1.5 text-white rounded-full bg-[var(--color-secondary)]">
              {products.length}
            </sup>
          </button>

          {/* User */}
          <span>
            {user ? (
              <>
                <img
                  onClick={handleDropDownToogle}
                  src={user?.profileImage || "avaterImg"}
                  alt=""
                  className="w-8 h-8 rounded-full cursor-pointer"
                />

                {isDropDownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-[#2a3b40] border border-[#416267] rounded-lg shadow-lg z-50">
                    <ul className="font-medium space-y-2 p-3 text-white">
                      {dropDownMenus.map((menu, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => setIsDropDownOpen(false)}
                            to={menu.path}
                            className="block px-2 py-1 rounded hover:bg-gradient-to-r hover:from-[#7fd1b9] hover:via-[#4dd0e1] hover:to-[#81c7f5]"
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="w-full text-left px-2 py-1 rounded hover:bg-gradient-to-r hover:from-[#7fd1b9] hover:via-[#4dd0e1] hover:to-[#81c7f5]"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <i className="ri-user-3-line text-lg cursor-pointer"></i>
              </Link>
            )}
          </span>
        </div>
      </nav>

      {/* ----------- Mobile Sliding Menu ----------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2a3b40] text-white px-6 py-4 space-y-4 animate-slideDown">
          {["Home", "Shop", "Pages", "Contact"].map((label) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg hover:text-[#4dd0e1]"
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Header;
