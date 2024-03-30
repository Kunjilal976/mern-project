import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto border my-6 border-blue-900 shadow-lg bg-zinc-800 rounded-lg">
      <h1 className="text-3xl text-center text-white font-semibold my-7">SignUp</h1>

      <form className="flex flex-col gap-7">
        <input type="text" placeholder="username" className=" border p-3 rounded-lg" id="username" />
        <input type="email" placeholder="email" className=" border p-3 rounded-lg" id="email" />
        <input type="password" placeholder="password" className=" border p-3 rounded-lg" id="password" />
        <button className="bg-blue-500 p-3 rounded-lg uppercase hover:opacity-95">Sign Up</button>     
      </form>

      <div className="flex gap-2 mt-5 text-white">
        <p> Have an account?</p>
        <Link to={"/sign-in"}>
        <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
