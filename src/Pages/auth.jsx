import React, { useState } from "react";
// import Logo from "../Components/Logo";
import InputField from "../Components/input";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState("");
const submitForm = (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!isSignIn && data.password !== data["confirm-password"]) {
      setMessage("Passwords do not match");
      return;
    }else if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setMessage("Invalid Email");
      return;
    }
    setMessage("")
    console.log("Form Data Submitted:", data);

    if (isSignIn && data.email == "me@you.com" && data.password == "password") {
      window.location.href = "/"
    } else {
      setIsSignIn(!isSignIn);
    }

    alert(isSignIn ? "You are now signed in!" : "Successful!");

  } catch (error) {
    setMessage("Error submitting form:", error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex min-h-full mb-40 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isSignIn ? "Sign in to your account" : "Sign up for free"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitForm} className="space-y-6">
            <p className='text-red-500'>{message}</p>
            <InputField
              type="email"
              label="Email address"
              name="email"
              required
            />
            <InputField
              type="password"
              label="Password"
              name="password"
              required
            />

            {!isSignIn && (
              <>
                <InputField
                  type="password"
                  label="Confirm Password"
                  name="confirm-password"
                  required
                />
                <InputField
                  type="date"
                  label="Date of Birth"
                  name="dob"
                  required
                />
              </>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {isSignIn ? "Sign in" : "Sign Up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {isSignIn ? (
              <>
                Not a member?{" "}
                <button
                  className="font-semibold leading-6 text-purple-600 hover:text-blue-500"
                  onClick={() => setIsSignIn(false)}
                >
                  Start a 14 day free trial
                </button>
              </>
            ) : (
              <>
                Already a member?{" "}
                <button
                  className="font-semibold leading-6 text-purple-600 hover:text-blue-500"
                  onClick={() => setIsSignIn(true)}
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
