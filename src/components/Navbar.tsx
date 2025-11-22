import { Button } from "antd";
import { FcElectroDevices } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between min-h-10 shadow-hard">
      <div className="flex items-center p-2">
        <FcElectroDevices className="text-2xl" />
        <p className="ml-1">Simple Tasks</p>
      </div>
      <div className="p-2">
        <Button style={{ color: "#fff", backgroundColor: "#3859FA" }}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
