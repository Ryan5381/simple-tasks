import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Checkbox, DatePicker, message } from "antd";
import dayjs from "dayjs";
import useTaskStore from "../stores/useTaskStore";
const { TextArea } = Input;

interface TaskFormValues {
  title: string;
  description: string;
  deadline: dayjs.Dayjs | null;
  completed: boolean;
}

const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask, deleteTask } = useTaskStore();
  const [form] = Form.useForm<TaskFormValues>();

  const taskId = Number(id);
  const task = getTaskById(taskId);

  if (!task) return null;

  useEffect(() => {
    if (!task) {
      message.error("找不到這筆任務");
      navigate("/task");
      return;
    }

    form.setFieldsValue({
      title: task.title,
      description: task.description,
      deadline: task.deadline ? dayjs(task.deadline) : null,
      completed: task.completed,
    });
  }, [task, form, navigate]);

  const handleSubmit = (values: TaskFormValues) => {
    updateTask(taskId, {
      title: values.title,
      description: values.description,
      deadline: values.deadline
        ? values.deadline.format("YYYY-MM-DD")
        : undefined,
      completed: values.completed,
    });
    message.success("已更新任務");
    navigate("/task");
  };

  const handleDelete = () => {
    deleteTask(taskId);
    message.success("已刪除任務");
    navigate("/task");
  };

  return (
    <div className="flex items-center justify-center my-15">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold">待辦事項詳細資訊</h2>
          <p className="text-md text-gray-400">檢視和編輯您的任務詳細資訊</p>
          <hr className="my-4 text-gray-300" />
        </div>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="標題"
            name="title"
            rules={[{ required: true, message: "請輸入標題" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="描述" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="截止日期" name="deadline">
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item name="completed" valuePropName="checked">
            <Checkbox>完成狀態</Checkbox>
          </Form.Item>

          <div className="flex justify-between gap-3">
            <Button onClick={() => navigate("/task")}>回前一頁</Button>
            <div className="flex gap-3">
              <Button onClick={handleDelete} danger>
                刪除
              </Button>
              <Button type="primary" htmlType="submit">
                儲存變更
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TaskDetail;
