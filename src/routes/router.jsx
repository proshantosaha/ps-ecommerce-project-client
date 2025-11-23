import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import CategoryPage from "../pages/category/CategoryPage";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import PaymentSuccess from "../components/PaymentSuccess";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import PrivateRoute from "./PrivetRoute";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import UserDashboard from "../pages/dashboard/UserDashboard";
import UserDMain from "../pages/dashboard/user/dashboard/UserDMain";
import UserOrders from "../pages/dashboard/user/orders/UserOrders";
import OrderDetail from "../pages/dashboard/user/orders/OrderDetail";
import UserPayments from "../pages/dashboard/user/payments/UserPayments";
import UserReviews from "../pages/dashboard/user/reviews/UserReviews";
import UserProfile from "../pages/dashboard/user/profile/UserProfile";
import AdminDMain from "../pages/dashboard/admin/dashboard/AdminDMain";
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";
import ManageProducts from "../pages/dashboard/admin/manageProduct/ManageProducts";
import ManageUsers from "../pages/dashboard/admin/users/ManageUsers";
import ManageOrders from "../pages/dashboard/admin/orders/ManageOrders";
import UpdateProduct from "../pages/dashboard/admin/manageProduct/UpdateProduct";


// eslint-disable-next-line react-refresh/only-export-components
const ProtectedLayoutWrapper = () => (
    <PrivateRoute>
        <DashboardLayout /> 
    </PrivateRoute>
);


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "shop/:id", Component: SingleProduct },
      { path: "categories/:categoryName", Component: CategoryPage },
      { path: "orders/:orderId", Component: OrderDetail},


      { path: "success", Component: PaymentSuccess },
      { path: "*", Component: ErrorPage },
    ],
  },

  { path: "login", Component: Login },
  { path: "register", Component: Register },

  // ✅ Dashboard protected route
  {
    path: "dashboard",
    Component: ProtectedLayoutWrapper,
    children: [
      // { index: true, Component: AdminDashboard }, 
      { path: "orders", Component: UserOrders},

      { path: "payments", Component: UserPayments },
      { path: "profile", Component: UserProfile },
      { path: "reviews", Component: UserReviews },

      { index: true, Component: UserDMain}, 
  

       { 
        path: "admin", 
        element: (
          <PrivateRoute role="admin">
            <AdminDMain />
          </PrivateRoute>
        ) 
      },
      { 
        path: "add-product", 
        element: (
            <PrivateRoute role="admin">
                <AddProduct />
            </PrivateRoute>
        ) 
      },
      { 
        path: "manage-products", 
        element: (
            <PrivateRoute role="admin">
                <ManageProducts />
            </PrivateRoute>
        ) 
      },
       { 
        path: "manage-orders", 
        element: (
            <PrivateRoute role="admin">
                <ManageOrders />
            </PrivateRoute>
        ) 
      },
      { 
        path: "update-product/:id", 
        element: (
        <PrivateRoute role="admin"><UpdateProduct/></PrivateRoute>

        ) 
      },

       { 
        path: "users", 
        
        element: (
            <PrivateRoute role="admin">
                <ManageUsers />
            </PrivateRoute>
        ) 
      },
    ],
  },
]);