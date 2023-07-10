import PageHeader from "../../components/PageHeader";
import ServiceCo from "./ServiceCo";


const  ServiceCoordinatorPage= () => {
  return (
    <div>
       <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "Service Coordinators", link: "/service" },
            ]}
            title="Service Coordinators Page"
          />
          <ServiceCo />
    </div>
  )
}

export default ServiceCoordinatorPage;
