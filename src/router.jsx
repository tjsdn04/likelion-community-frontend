import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/accountPage/WelcomePage";
import { SchMainPage } from "@pages/schMainPage/SchMainPage";
import { AdminAttPage } from "@pages/adminAttPage/AdminAttPage";
import { AdminAttRegisterPage } from "@pages/adminAttPage/AdminAttRegisterPage";
import { AdminAttManagePage } from "@pages/adminAttPage/AdminAttManagePage";
import { LionAttNum } from "@pages/lionAttPage/LionAttNum";
import { LoginPage } from "@pages/accountPage/LoginPage";
import { SignupPage } from "@pages/accountPage/SignupPage";
import { KakaoSignupPage } from "@pages/accountPage/KakaoSignupPage";
import { VerificationPage } from "@pages/accountPage/VerificationPage";
import { Loading } from "@components/account/Loading";
import { LionAttInfoPage } from "@pages/lionAttPage/LionAttInfoPage";
import { ChatListPage } from "@pages/ChatPage/ChatListPage";
import { ChatPage } from "@pages/ChatPage/ChatPage";
import { BePostingPage } from "@pages/mainPostingPage/BePostingPage ";
import { DefaultPostingPage } from "@pages/mainPostingPage/DefaultPostingPage";
import { FePostingPage } from "@pages/mainPostingPage/FePostingPage";
import { JoinPostingPage } from "@pages/mainPostingPage/JoinPostingPage";
import { LionPostingPage } from "@pages/mainPostingPage/LionPostingPage";
import { NotiPostingPage } from "@pages/mainPostingPage/NotiPostingPage";
import { PmPostingPage } from "@pages/mainPostingPage/PmPostingPage";
import { QnAPostingPage } from "@pages/schPostingPage/QnAPostinPage";
import { SchDefaultPostingPage } from "@pages/schPostingPage/SchDefaultPostingPage";

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
      { path: "lionAttInfo", element: <LionAttInfoPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "kakaoSignup", element: <KakaoSignupPage /> },
      { path: "verification", element: <VerificationPage /> },
      { path: "loading", element: <Loading /> },
      { path: "chatList", element: <ChatListPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "bePostingPage", element: <BePostingPage /> },
      { path: "defaultPostingPage", element: <DefaultPostingPage /> },
      { path: "fePostingPage", element: <FePostingPage /> },
      { path: "joinPostingPage", element: <JoinPostingPage /> },
      { path: "lionPostingPage", element: <LionPostingPage /> },
      { path: "notiPostingPage", element: <NotiPostingPage /> },
      { path: "pmPostingPage", element: <PmPostingPage /> },
      { path: "qnaPostingPage", element: <QnAPostingPage /> },
      { path: "schDefaultPostingPage", element: <SchDefaultPostingPage /> },
    ],
  },
]);
