import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { FormEvent, useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  // console.log(loading);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signup(inputs);
  }

  function handleCheckBoxChange(gender: string) {
    setInputs({ ...inputs, gender });
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bacdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-5xl font-semibold text-center text-gray-100">
          <span className="text-yellow-500"> ọlá</span>
          <span className="text-emerald-500">Chat</span>
        </h1>
        <h1 className="my-5 text-2xl font-semibold text-center text-gray-100">
          Sign Up
        </h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="Full name" className="label p-2 text-gray-300">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter Full name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender checkbox */}
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:undeline text-yellow-200 hover:text-yellow-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className="btn btn-block btn-sm mt-2 bg-emerald-800 text-yellow-200 hover:bg-emerald-700 transition-all duration-200"
            >
              {loading ? (
                <span className=" size-5 loading loading-spinner " />
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
