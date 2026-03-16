import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyBlog - 个人技术博客",
  description: "一个基于 Next.js 构建的个人技术博客，分享编程知识和技术心得",
  keywords: ["博客", "技术", "编程", "前端", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {/* 渐变背景 */}
        <div className="gradient-bg" />

        {/* 导航 */}
        <Header />

        {/* 主内容 */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* 页脚 */}
        <Footer />

        {/* 主题初始化脚本 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}