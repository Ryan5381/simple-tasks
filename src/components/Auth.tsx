import React, { useState } from "react";
import { Form, Input, Button } from "antd";
const { Password } = Input;

const Auth = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="flex flex-col items-center my-15 p-4">
      {/* auth */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="text-center text-gray-600 text-sm mt-1 mb-6">
          <h2 className="text-2xl font-bold">
            {mode === "login" ? "登入" : "註冊"}
          </h2>
          <p className="text-gray-600 text-sm mt-1">輸入您的資訊以繼續</p>
        </div>

        <Form layout="vertical">
          <Form.Item label="電子郵件">
            <Input />
          </Form.Item>

          <Form.Item label="密碼">
            <Password placeholder="請輸入您的密碼" />
          </Form.Item>
          {/* 註冊mode要顯示再次確認密碼 */}
          {mode === "register" && (
            <Form.Item label="密碼確認">
              <Password placeholder="請再次輸入您的密碼" />
            </Form.Item>
          )}
          <div className="flex gap-4 mt-4">
            <Button
              type="primary"
              block
              size="large"
              onClick={() => console.log("login / register")}
            >
              {mode === "login" ? "登入" : "建立帳號"}
            </Button>

            <Button
              block
              size="large"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login" ? "註冊" : "回到登入"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
