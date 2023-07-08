import Item from "./Item";

const AddressDetails = (props) => {
  const { profile, selectedState, selectedMetroArea } = props;

  if (!profile) return null;

  return (
    <div className="row">
      <div className="col-xl-6">
        <Item label="Address Line 1" value={profile.address_line_1} />
      </div>

      <div className="col-xl-6">
        <Item label="Address Line 2" value={profile.address_line_2} />
      </div>

      <div className="col-xl-6">
        <Item label="City" value={profile.city} />
      </div>

      <div className="col-xl-6">
        <Item label="State" value={selectedState?.label} />
      </div>

      {selectedMetroArea && (
        <div className="col-xl-6">
          <Item label="State" value={selectedMetroArea?.label} />
        </div>
      )}

      <div className="col-xl-6">
        <Item label="Zip Code" value={profile.zip_code} />
      </div>

      <div className="col-xl-6">
        <Item label="Zip Code" value={profile.country} />
      </div>
    </div>
  );
};

export default AddressDetails;
