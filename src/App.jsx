import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home.jsx";
import GroupChats from "./pages/GroupChats.jsx";
import Blog from "./pages/Blog.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group-chats" element={<GroupChats />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Analytics />
    </>
  );
}
