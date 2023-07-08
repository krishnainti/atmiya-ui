import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pageComponents/HomePage";
import BecomeMember from "../pageComponents/BecomeMember";
import PageNotFound from "../pageComponents/PageNotFound";
import Login from "../pageComponents/Login";
import ReviewDetails from "../pageComponents/ReviewDetails";
import AboutPage from "../pageComponents/AboutPage";
import Corporatepage from "../pageComponents/Corporatepage";
import PvsaPage from "../pageComponents/PvsaPage";
import Registered501 from "../pageComponents/501c3Page/Registered501";
import ProtectedRoute from "../components/ProtectedRoute";
import PendingProfiles from "../pageComponents/PendingProfiles";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/corporate" element={<Corporatepage />} />
      <Route path="/pvsa" element={<PvsaPage />} />
      <Route path="/reg501c3" element={<Registered501 />} />

      <Route path="/become-a-member" element={<BecomeMember />} />
      <Route path="/review-details" element={<ReviewDetails />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/pending-profiles"
        element={<ProtectedRoute isAdmin children={<PendingProfiles />} />}
      />
      <Route
        path="/pending-profiles/:userId"
        element={<ProtectedRoute isAdmin children={<div>User details</div>} />}
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesList;
