import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pageComponents/HomePage";
import BecomeMember from "../pageComponents/BecomeMember";
import PageNotFound from "../pageComponents/PageNotFound";
import Login from "../pageComponents/Login";
import ReviewDetails from "../pageComponents/ReviewDetails";
import AboutPage from "../pageComponents/AboutPage";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/become-a-member" element={<BecomeMember />} />
      <Route path="/review-details" element={<ReviewDetails />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesList;
