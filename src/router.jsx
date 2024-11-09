import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/accouontPage/WelcomePage";
import { SchMainPage } from "@pages/schMainPage/SchMainPage";
import { AdminAttPage } from "@pages/adminAttPage/AdminAttPage";
import { AdminAttRegisterPage } from "@pages/adminAttPage/AdminAttRegisterPage";
import { AdminAttManagePage } from "@pages/adminAttPage/AdminAttManagePage";
import { LionAttNum } from "@pages/lionAttPage/LionAttNum";
import { LoginPage } from "@pages/accountPage/LoginPage";
import { SignUpPage } from "@pages/accountPage/SignUpPage";
import { VerificationPage } from "@pages/accountPage/VerificationPage";
import { ChatListPage } from "@pages/ChatPage/ChatListPage";
import { ChatPage } from "@pages/ChatPage/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
      { path: "school", element: <SchMainPage /> },
      { path: "adminAtt", element: <AdminAttPage /> },
      { path: "adminAttRegister", element: <AdminAttRegisterPage /> },
      { path: "adminAttManage", element: <AdminAttManagePage /> },
      { path: "lionAttNum", element: <LionAttNum /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "verification", element: <VerificationPage /> },
      { path: "loding", element: <Loding /> },
      { path: "chatList", element: <ChatListPage /> },
      { path: "chat", element: <ChatPage /> },
    ],
  },
]);
