const PaymentOptions = (props) => {
  const { familyDetails, setFamilyDetails, familyDetailsErrors } = props;

  return (
    <div className="row">
      <div className="col-xl-4">
        <div className="contact-form__radio">
          <input type="radio" name="exampleRadios" value="option2" />
          <label className="form-check-label">Paypal</label>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="contact-form__radio">
          <input type="radio" name="exampleRadios" value="option2" />
          <label className="form-check-label">Zelle</label>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="contact-form__radio">
          <input type="radio" name="exampleRadios" value="option2" />
          <label className="form-check-label">Credit/DebitCard</label>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
