import PageHeader from "../../components/PageHeader";
import CityCo from "./CityCo";



const CityCoordinatorPagex = () => {
  return (
    <div>
       <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "City Coordinators", link: "/city" },
            ]}
            title="City Coordinators Page"
          />
      <CityCo />
    </div>
  )
}

export default CityCoordinatorPagex



