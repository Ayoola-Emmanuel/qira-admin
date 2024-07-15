import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../../components/AuthLayout";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";
import Spinner from "../../components/Spinner";

const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding')
    }, 2000);
    
  };
  return (
    <AuthLayout>
      <div className="mt-7">
        <h4 className="font-medium text-3xl mb-4">Welcome Back!</h4>
        <p className="text-lg mb-3.5">
          Start searching for your dream home with us
        </p>
        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formInput.password}
            onChange={handleChange}
          />
          <div className="flex items-center justify-between pt-0.5 pb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepLoggedIn"
                className="form-checkbox h-4 w-4 accent-[#FF7F51] text-white transition duration-150 ease-in-out"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="keepLoggedIn"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-[#FF7F51]">
              Forgot password?
            </Link>
          </div>
          <AuthButton type='button' disabled={!formInput.email || !formInput.password}>
            {isLoading ? <Spinner /> : "Proceed"}
          </AuthButton>
          <div className="w-10/12 mx-auto my-3 flex gap-2 items-center">
            <div className="w-1/2 h-[1px] bg-gray-200"></div>
            <span>or</span>
            <div className="w-1/2 h-[1px] bg-gray-200"></div>
          </div>

          <button className="flex gap-4 items-center border border-[#E2E2E2] py-3 justify-center w-full rounded-md bg-[#F4F4F4]">
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="mt-4 flex items-center gap-2 justify-center">
            <span className="text-base sm:text-lg font-medium">
              Don't have any account?
            </span>
            <Link
              to="/register"
              className="text-[#008080] text-base sm:text-lg font-medium"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
