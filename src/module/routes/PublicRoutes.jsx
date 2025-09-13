import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Layout } from "../layout/Layout";

export const PublicRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
