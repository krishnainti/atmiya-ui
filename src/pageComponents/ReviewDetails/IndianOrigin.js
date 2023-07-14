import { useMemo } from "react";
import Item from "./Item";
import { indiaStatesOptions } from "../BecomeMember/consts";

const IndianOrigin = (props) => {
  const { profile } = props;

  const selectedState = useMemo(
    () => indiaStatesOptions.find((i) => i.value === profile?.india_state),
    [profile]
  );

  return (
    <div className="row">
      <div className="col-xl-6">
        <Item label="State" value={selectedState?.label} />
      </div>

      <div className="col-xl-6">
        <Item label="City" value={profile?.india_city} />
      </div>
    </div>
  );
};

export default IndianOrigin;
