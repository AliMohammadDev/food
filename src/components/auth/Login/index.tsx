import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginInputs, useLogin } from "../../../api/auth";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function Login() {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const { mutate: login, isLoading: loading, error } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = (values) => {
    login(values);
  };

  useEffect(() => {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }, [error]);



  return (
    <div className="flex h-screen items-center justify-center sm:px-4 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md">
        <div className="rounded bg-white p-6 shadow-md">
          <h2 className="my-3 mb-4 text-left text-3xl font-bold tracking-tight text-gray-900">
            Login
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-left text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register("email")}
                className="block w-full rounded-md border border-gray-300 px-2 py-3 focus:outline-none focus:ring-sky-500 sm:text-sm"
                autoComplete="new-name"
                required
                placeholder="email"
              />
            </div>

            <label className="block text-left text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                {...register("password")}
                className="block w-full rounded-md border border-gray-300 px-2 py-3 focus:outline-none focus:ring-sky-500 sm:text-sm"
                placeholder="password"
                autoComplete="new-password"
              />
            </div>

            <div className="mt-2 text-right">
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                Forgot Password?
              </a>
            </div>

            <div>
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <button type="submit" className="inline-block w-full cursor-pointer rounded bg-orange-500 px-6 py-3 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-105">
                  Login
                </button>
              )}

            </div>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Create one
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
