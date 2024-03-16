const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login
          <span className="text-yellow-500"> ọlá</span>
          <span className="text-emerald-500">Chat</span>
        </h1>

        <form>
          <div>
            <label htmlFor="username" className="label p-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
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
            />
          </div>

          <a
            href="#"
            className="text-sm hover:undeline text-yellow-200 hover:text-yellow-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-emerald-800 text-yellow-200 hover:bg-emerald-700 transition-all duration-200">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
