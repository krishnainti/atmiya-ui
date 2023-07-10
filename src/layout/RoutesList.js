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
import Firepage from "../pageComponents/FireServicePages";
import AsaraPage from "../pageComponents/AsaraService";
import BestService from "../pageComponents/BestService";
import RealWomenPage from "../pageComponents/RealWomen";
import ImmigrationPage from "../pageComponents/Immigration";
import CommunityPage from "../pageComponents/CommunityAffairs";
import MyProfile from "../pageComponents/MyProfile";
import BoardDirectorPage from "../pageComponents/Leadership";
import ExecutiveCommiteePage from "../pageComponents/ExecutiveComitte";
import ServiceCoordinatorPage from "../pageComponents/ServiceCoordinators";
import StateCoordinatorsPage from "../pageComponents/StateCoordinators";
import CityCoordinatorPage from "../pageComponents/CityCoordinators";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/corporate" element={<Corporatepage />} />
      <Route path="/pvsa" element={<PvsaPage />} />
      <Route path="/reg501c3" element={<Registered501 />} />
      <Route path="/fire" element={<Firepage />} />
      <Route path="/asara" element={<AsaraPage />} />
      <Route path="/best" element={<BestService />} />
      <Route path="/women" element={<RealWomenPage />} />
      <Route path="/immi" element={<ImmigrationPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/board" element={<BoardDirectorPage />} />
      <Route path="/exec" element={<ExecutiveCommiteePage />} />
      <Route path="/service" element={<ServiceCoordinatorPage />} />
      <Route path="/state" element={<StateCoordinatorsPage />} />
      <Route path="/city" element={<CityCoordinatorPage/>} />

      <Route path="/become-a-member" element={<BecomeMember />} />
      <Route path="/review-details" element={<ReviewDetails />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/pending-profiles"
        element={<ProtectedRoute isAdmin children={<PendingProfiles />} />}
      />
      <Route
        path="/pending-profiles/:userId"
        element={<ProtectedRoute isAdmin children={<ReviewDetails admin />} />}
      />
      <Route
        path="/my-profile"
        element={<ProtectedRoute isAdmin children={<MyProfile />} />}
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesList;
