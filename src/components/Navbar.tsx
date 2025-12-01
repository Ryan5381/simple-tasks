import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FcElectroDevices } from "react-icons/fc";
import useAuthStore from "../stores/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, isAuth, logout } = useAuthStore();
  console.log("currnetUser", currentUser);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };
  return (
    <div className="flex items-center justify-between min-h-10 shadow-hard">
      <div
        className="flex items-center p-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FcElectroDevices className="text-2xl" />
        <p className="ml-1 text-xl font-semibold">Simple Tasks</p>
      </div>

      <div className="p-3 mr-4 flex items-center gap-4">
        {/* 若已登入，顯示姓名、登出btn */}
        {isAuth && currentUser ? (
          <>
            <span className="text-gray-700 font-medium">
              Hi, {currentUser.name}
            </span>
            <Button type="primary" onClick={() => navigate("/task")}>
              新增任務
            </Button>
            <Button danger onClick={handleLogout}>
              登出
            </Button>
          </>
        ) : (
          // 未登入，顯示get started
          <Button
            onClick={() => navigate("/auth")}
            style={{ color: "#fff", backgroundColor: "#3859FA" }}
          >
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
