import React from "react";
import { Input, Button, Checkbox } from "antd";

const TodoList = () => {
  return (
    <div className="flex items-center justify-center my-15">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="mt-6">
          <div className="flex w-full gap-3 mb-8">
            <Input placeholder="新增待辦事項" className="flex-1" />
            <Button type="primary">新增+</Button>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <Checkbox>買菜</Checkbox>
            <Checkbox>繳帳單</Checkbox>
            <Checkbox>做專案</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
