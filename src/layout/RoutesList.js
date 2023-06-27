import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pageComponents/HomePage";
import BecomeMember from "../pageComponents/BecomeMember";
import PageNotFound from "../pageComponents/PageNotFound";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/become-a-member" element={<BecomeMember />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesList;
