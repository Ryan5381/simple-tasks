import React from "react";
import { Card, Col, Row } from "antd";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";

const Features = () => {
  return (
    <div className="my-10 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* 標題區塊 */}
        <div>
          <p className="text-2xl md:text-3xl font-bold">提升工作效率</p>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            Simple Tasks
            提供一系列實用工具，簡化你的工作流程，幫助你隨時掌握任務進度。
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="mt-6">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                title={
                  <div className="flex items-center">
                    <MdOutlineTaskAlt className="text-center text-2xl p-1" />
                    <span>直覺的任務管理</span>
                  </div>
                }
                variant="borderless"
                className="h-full shadow-sm border border-[#3C374A]  transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1 hover:border-blue-800"
                styles={{
                  header: { borderBottomColor: "#3C374A" },
                }}
              >
                使用直覺、友善的介面，輕鬆建立與整理待辦事項，並清楚安排任務優先順序。
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                title={
                  <div className="flex items-center">
                    <IoIosTimer className="text-center text-2xl p-1" />
                    <span>智慧排程</span>
                  </div>
                }
                variant="borderless"
                className="h-full shadow-sm border border-[#3C374A]  transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1 hover:border-blue-800"
                styles={{
                  header: { borderBottomColor: "#3C374A" },
                }}
              >
                為每個任務設定截止日期與重複規則，幫助你有效規劃每日行程與時間。
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                title={
                  <div className="flex items-center">
                    <MdOutlineNotificationsActive className="text-center text-2xl p-1" />
                    <span>及時提醒</span>
                  </div>
                }
                variant="borderless"
                className="h-full shadow-sm border border-[#3C374A]  transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1 hover:border-blue-800"
                styles={{
                  header: { borderBottomColor: "#3C374A" },
                }}
              >
                透過即時提醒與通知，隨時掌握任務進度，不再錯過任何重要截止日期。
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Features;
