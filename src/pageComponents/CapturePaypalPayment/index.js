import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";
import { useDispatch } from "react-redux";

import { capturePaypalPayment } from "../../services/auth";
import CustomLoader from "../../layout/CustomLoader";
import { setUser } from "../../store";

const CapturePaypalPayment = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("");

  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;

      const token = searchParams.get("token");

      capturePaypalPayment(token)
        .then((res) => {
          setPaymentStatus("success");
          dispatch(setUser(res.user));
        })
        .catch((e) => {
          setPaymentStatus("failed");
        });
    }
  }, []);

  return (
    <div>
      <CustomLoader />
      <SweetAlert
        show={Boolean(paymentStatus)}
        title={paymentStatus === "success" ? "Success" : "Failed"}
        text={
          paymentStatus === "success" ? "Payment Success" : "Payment Failed"
        }
        onConfirm={() => {
          setPaymentStatus("");
          setTimeout(() => {
            navigate("/review-details");
          }, 500);
        }}
        confirmButtonColor="#007bff"
      />
    </div>
  );
};

export default CapturePaypalPayment;
