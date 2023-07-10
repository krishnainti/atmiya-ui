import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";

import { capturePaypalPayment } from "../../services/auth";

const CapturePaypalPayment = () => {
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
        })
        .catch((e) => {
          setPaymentStatus("failed");
        });
    }
  }, []);

  return (
    <div>
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

export default CapturePaypalPayment;
