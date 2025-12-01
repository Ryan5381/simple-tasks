import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import homeBranner from "../assets/home.jpg";

const Branner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 px-4">
      <div className="relative mx-auto w-full max-w-7xl h-60 sm:h-75 md:h-95 lg:h-105 rounded-2xl overflow-hidden shadow-lg">
        {/* 背景圖 */}
        <img
          src={homeBranner}
          alt="home-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 黑色半透明遮罩（讓文字更清楚） */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 內容文字區塊 */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg">
            規劃好您的一天，完成您的任務
          </h1>

          <p className="mt-10 text-sm sm:text-base md:text-lg font-bold drop-shadow">
            Simple Tasks 協助您輕鬆管理待辦事項，確保萬無一失。
            <br />
            立即註冊，掌控您的每一天！
          </p>

          <div className="mt-10">
            <Button
              size="large"
              style={{
                fontSize: "18px",
                backgroundColor: "#3859FA",
                color: "#fff",
              }}
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branner;
