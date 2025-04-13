import { useAppSelector } from "../redux/hook";

const AdminProfile = () => {
   const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white text-xl rounded-full w-12 h-12 flex items-center justify-center">
            A
          </div>
          <div>
            <h2 className="text-lg font-semibold">{user?.name}</h2>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
