import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import homeBranner from "../assets/home.jpg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 px-4">
      <div className="relative mx-auto w-full max-w-7xl min-h-[300px] sm:h-75 md:h-95 lg:h-105 rounded-2xl overflow-hidden shadow-lg">
        {/* 背景圖 */}
        <img
          src={homeBranner}
          alt="home-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 黑色半透明遮罩（讓文字更清楚） */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 內容文字區塊 */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-8 text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            規劃好您的一天，
            <br className="sm:hidden" />
            完成您的任務
          </h1>

          <p className="mt-6 sm:mt-10 text-xs sm:text-base md:text-lg font-bold drop-shadow opacity-90">
            Simple Tasks 協助您輕鬆管理待辦事項，
            <br className="hidden sm:block" />
            確保萬無一失。
            <br />
            立即註冊，掌控您的每一天！
          </p>

          <div className="mt-6 sm:mt-10">
            <Button
              size="large"
              style={{
                fontSize: "16px",
                backgroundColor: "#3859FA",
                color: "#fff",
                height: "auto",
                padding: "8px 24px",
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

export default Banner;
