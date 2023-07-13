import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomLoader from "../../layout/CustomLoader";
import { clearUser } from "../../store";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearUser());
    navigate("/");
    window.location.reload();
  }, []);

  return <CustomLoader />;
};

export default Logout;
