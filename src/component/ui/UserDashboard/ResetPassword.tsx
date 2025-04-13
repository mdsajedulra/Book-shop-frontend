import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../../../redux/features/api/endpoints/userApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type TResetForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const { register, handleSubmit, watch } = useForm<TResetForm>();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: TResetForm) => {
    if (data.newPassword !== data.confirmPassword) {
      return toast.error("New passwords do not match!");
    } else if (data.newPassword.length < 6) {
      return toast.error("At least 6 letter needed");
    }

    try {
      const response = await resetPassword({
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      }).unwrap();
      toast.success(response.message || "Password reset successful!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.data?.message || "Password reset failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[50vh] px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🔐 Reset Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="input input-bordered w-full"
            {...register("currentPassword", { required: true })}
          />
          <input
            type="password"
            placeholder="New Password"
            className="input input-bordered w-full"
            {...register("newPassword", { required: true })}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="input input-bordered w-full"
            {...register("confirmPassword", { required: true })}
          />

          {watch("newPassword") &&
            watch("confirmPassword") &&
            watch("newPassword") !== watch("confirmPassword") && (
              <p className="text-red-500 text-sm">Passwords do not match</p>
            )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
