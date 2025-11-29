import React from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
const { TextArea } = Input;

const TaskDetail = () => {
  return (
    <div className="flex items-center justify-center my-15">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold">待辦事項詳細資訊</h2>
          <p className="text-md text-gray-400">檢視和編輯您的任務詳細資訊</p>
          <hr className="my-4 text-gray-300" />
        </div>
        <Form layout="vertical">
          <Form.Item label="標題">
            <Input />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="截止日期">
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item>
            <Checkbox>完成狀態</Checkbox>
          </Form.Item>

          <div className="flex justify-end gap-3">
            <Button>回前一頁</Button>
            <Button type="primary">儲存變更</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TaskDetail;
