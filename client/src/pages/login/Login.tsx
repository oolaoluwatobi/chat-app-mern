import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0 ">
        <h1 className="text-5xl font-semibold text-center text-gray-100">
          <span className="text-yellow-500"> ọlá</span>
          <span className="text-emerald-500">Chat</span>
        </h1>
        <h1 className="my-5 text-2xl font-semibold text-center text-gray-100">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
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

          <Link
            to={"/signup"}
            className="text-sm hover:undeline text-yellow-200 hover:text-yellow-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className={`btn btn-block btn-sm mt-2 bg-emerald-800 disabled:bg-slate-800 text-yellow-200 hover:bg-emerald-700 transition-all duration-200 ${
                loading ? "cursor-not-allowed" : ""
              } `}
            >
              {loading ? (
                <span className=" size-5 loading loading-spinner text-yellow-200" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
