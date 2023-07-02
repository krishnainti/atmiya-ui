import { paymentOptions } from "./consts";

const PaymentOptions = (props) => {
  const { paymentMode, setPaymentMode } = props;

  return (
    <div className="row">
      {paymentOptions.map((item, index) => {
        return (
          <div className="col-xl-4" key={index}>
            <div className="contact-form__radio">
              <input
                type="radio"
                name="paymentRadios"
                value={item.value}
                onChange={(e) => setPaymentMode(e.target.value)}
                checked={paymentMode === item.value}
              />
              <label className="form-check-label">{item.label}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentOptions;
