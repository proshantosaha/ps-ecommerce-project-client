import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser(data).unwrap();
      console.log(response);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setMessage(error?.data?.message || "Registration failed");
    }
  };

 return (
  <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white border rounded-xl shadow-sm p-8">

      <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
      <p className="text-gray-500 text-center mb-8">
        Enter your information to create an account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Username</label>
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Enter username"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        {errors.username && <span className="text-xs text-red-500">Username is required</span>}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="m@example.com"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        {errors.email && <span className="text-xs text-red-500">Email is required</span>}

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="••••••••"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        {errors.password && <span className="text-xs text-red-500">Password is required</span>}

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Confirm Password</label>
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="••••••••"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-xs text-red-500">Confirm password is required</span>
        )}

        {/* Error Message */}
        {message && <p className="text-red-500 text-center text-sm">{message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-4 py-3 rounded-lg text-white font-medium ${
            isLoading
              ? "bg-gray-700/70 cursor-not-allowed"
              : "bg-gray-900 hover:bg-black"
          }`}
        >
          {isLoading ? "Registering..." : "Create an account"}
        </button>
      </form>

      <p className="text-center text-gray-500 mt-6 text-sm">
        Already have an account?
        <Link to="/login" className="text-gray-900 underline ml-1">Sign in</Link>
      </p>
    </div>
  </section>
);

};

export default Register;
