import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../redux/features/api/endpoints/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [registerError, setRegisterError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = async (data: RegisterFormValues) => {
    setRegisterError(null);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "user",
      };
      await registerUser(payload).unwrap();
      navigate("/login");
    } catch (err: any) {
      const message = err?.data?.message || "Registration failed. Please try again.";
      setRegisterError(message);
    }
  };

  const password = watch("password");

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md bg-base-100 shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>

        {registerError && (
          <p className="text-error text-sm bg-base-200 p-2 rounded">{registerError}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-error text-sm">{errors.confirmPassword.message}</p>
          )}

          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>

        <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-500">
          <Link to="/login" className="link link-hover">
            🔐 Already have an account?
          </Link>
          <Link to="/" className="link link-hover">
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;