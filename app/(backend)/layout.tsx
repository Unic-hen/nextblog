"use client";
import React, { useState } from "react";

// 导航菜单数据
const menuItems = [
  {
    title: "仪表盘",
    icon: "dashboard",
    subItems: [
      { title: "概览", link: "/dashboard" },
      { title: "分析", link: "/dashboard/analytics" },
    ],
  },
  {
    title: "内容管理",
    icon: "content",
    subItems: [
      { title: "文章", link: "/dashboard/posts" },
      { title: "分类", link: "/dashboard/categories" },
    ],
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header
        className="
      w-full z-9 fixed top-0 left-0 backdrop-blur-md h-16
      flex justify-center
      border-b shadow-md
      light:border-gray-800 dark:border-gray-200"
      >
        <div>
          <img src="#" alt="" />
          <span>admin</span>
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="flex-1 flex pt-16">
        {" "}
        {/* 添加 pt-16 给顶部栏留出空间 */}
        <nav
          className="w-64 border-r light:border-gray-800 
        shadow-lg
        dark:border-gray-200"
        >
          <ul>
            <li>a</li>
            <li>b</li>
          </ul>
        </nav>
        <section className="flex-1 light:bg-gray-100 p-6 overflow-auto">
          <div>{children}</div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
