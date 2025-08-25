import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";
import { useAuth } from "@/context/AuthContext";
import React, { Suspense } from "react";

export const metadata = {
  title: "MoodPulse · Dashboard",
};

export default function page() {
  return (
    <Main>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </Main>
  );
}
