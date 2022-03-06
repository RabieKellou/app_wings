import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { AuthContext } from "../contexts/authContext";
const Home = React.lazy(() => import("./Home"));
const Posts = React.lazy(() => import("./Posts"));
const Login = React.lazy(() => import("./Login"));

const Index = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {auth ? (
          <Route path="/posts" element={<Posts />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default Index;
