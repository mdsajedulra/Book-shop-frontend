import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/api/endpoints/authApi";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/api/endpoints/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  type LoginFormValues = {
    email: string;
    password: string;
  };


  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const onSubmit = async (formData: LoginFormValues) => {
    try {
      const res = await login(formData).unwrap();

      dispatch(setUser({
        user: res?.data?.verifiedUser,
        token: res?.data?.token,
      }));

      localStorage.setItem("user", JSON.stringify(res.data.verifiedUser));
      localStorage.setItem('token', res.data.token);


      toast.success("Logged in successfully!");
      navigate('/');
    } catch (error: any) {
      const message = error?.data?.message || "Login failed. Please try again.";
      setLoginError(message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md bg-base-100 shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}

          <button type="submit" className="btn btn-primary w-full">Login</button>
          {loginError && (
            <div className="text-error bg-base-200 p-2 text-sm rounded">
              {loginError}
            </div>
          )}
        </form>

        <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-500">
          <Link to="/register" className="link link-hover">
            ➕ Create Account
          </Link>
          <Link to="/" className="link link-hover">
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
