import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      const { token, user } = response;

      dispatch(setUser({ user }));
      alert("Login successful");
      navigate("/");
    } catch (error) {
      setMessage("Please provide valid email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md border">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your email below to login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="m@example.com"
              className="mt-2 w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="mt-2 w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          {/* Error message */}
          {message && <p className="text-red-600 text-sm">{message}</p>}

          {/* Button */}
          <button
            disabled={isLoading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* Register Links */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-600 hover:underline ml-1">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or Signup with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full border px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span>Google</span>
        </button>

      </div>
    </div>
  );
};

export default Login;
