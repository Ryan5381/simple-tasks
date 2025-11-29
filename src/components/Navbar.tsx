import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FcElectroDevices } from "react-icons/fc";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between min-h-10 shadow-hard">
      <div className="flex items-center p-2">
        <FcElectroDevices className="text-2xl" />
        <p className="ml-1">Simple Tasks</p>
      </div>
      <div className="p-2">
        <Button
          onClick={() => navigate("/auth")}
          style={{ color: "#fff", backgroundColor: "#3859FA" }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
// 1.實現navigate
// 2. 實作登入
// 3.把footer版面弄好
