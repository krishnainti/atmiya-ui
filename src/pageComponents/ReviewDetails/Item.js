const Item = ({ label, value }) => {
  return (
    <div className="review-details__item">
      <div className="review-details__item--label">{label}:</div>
      <div>{value}</div>
    </div>
  );
};

export default Item;
