import PageHeader from "../../components/PageHeader";
import StateCo from "./StateCo";

import React from 'react'

const StateCoordinatorsPage = () => {
  return (
    <div>
        <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "State Coordinators", link: "/state" },
            ]}
            title="State Coordinators Page"
          />
      <StateCo />
    </div>
  )
}

export default StateCoordinatorsPage
