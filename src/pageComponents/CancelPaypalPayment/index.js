import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";

import { cancelPaypalPayment } from "../../services/auth";
import CustomLoader from "../../layout/CustomLoader";

const CancelPaypalPayment = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("");

  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;

      const token = searchParams.get("token");

      cancelPaypalPayment(token).finally(() => {
        navigate("/become-a-member");
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
      />
    </div>
  );
};

export default CancelPaypalPayment;
