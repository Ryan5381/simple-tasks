import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import useAuthStore from "../stores/useAuthStore";
const { Password } = Input;

interface AuthFormValues {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const { login, register, error } = useAuthStore();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (v: AuthFormValues) => {
    const { name, email, password, confirmPassword } = v;

    if (mode === "register") {
      if (password !== confirmPassword) {
        message.error("兩次輸入的密碼不一樣");
        return;
      }

      const ok = register(name ?? "", email, password);
      if (!ok) {
        message.error(error || "註冊失敗");
        return;
      }
      message.success("註冊成功");
      navigate("/task");
    }

    if (mode === "login") {
      const ok = login(email, password);
      if (!ok) {
        message.error(error || "登入失敗");
        return;
      }
      message.success("登入成功");
      navigate("/task");
    }
  };

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

        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          {mode === "register" && (
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: "請輸入姓名" }]}
            >
              <Input placeholder="請輸入姓名" />
            </Form.Item>
          )}
          <Form.Item
            label="電子郵件"
            name="email"
            rules={[
              { required: true, message: "請輸入email" },
              { type: "email", message: "請輸入有效email" },
            ]}
          >
            <Input placeholder="請輸入email" />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: "請輸入密碼" }]}
          >
            <Password placeholder="請輸入您的密碼" />
          </Form.Item>
          {/* 註冊mode要顯示再次確認密碼 */}
          {mode === "register" && (
            <Form.Item
              label="密碼確認"
              name="confirmPassword"
              rules={[{ required: true, message: "請再次輸入密碼" }]}
            >
              <Password placeholder="請再次輸入您的密碼" />
            </Form.Item>
          )}
          <div className="flex gap-4 mt-4">
            <Button
              type="primary"
              block
              size="large"
              // onClick={() => console.log("login / register")}
              htmlType="submit"
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
