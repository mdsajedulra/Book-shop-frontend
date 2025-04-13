import Swal from "sweetalert2";
import { useBlockUserMutation } from "../../../redux/features/api/endpoints/userApi";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin"; // Add other roles if needed
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const UserManagementCard = ({ user }: { user: TUser }) => {
  const { _id, email, name, isBlocked, role } = user;

  const [blockUser] = useBlockUserMutation();

  const handleDeactivateUser = async (id: string) => {
    if (!isBlocked) {
      Swal.fire({
        title: `Do you want to Deactivate ${name}'s account?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await blockUser(id);
          console.log(res);
          if (res.data.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been blocked.",
              icon: "success",
            });
          }
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm border">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co.com/DfsLZQn9/download.png" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`${name} (${role})`}</h2>
          <p>Email : {email}</p>
          <p>Status : {isBlocked ? "Blocked User" : "Active User"}</p>
          <div className="card-actions">
            <button
              onClick={() => handleDeactivateUser(_id)}
              className="btn btn-primary"
              disabled={isBlocked}
            >
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementCard;
