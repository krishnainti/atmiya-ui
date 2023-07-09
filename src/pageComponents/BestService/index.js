import PageHeader from "../../components/PageHeader";
import Best from "./Best";

const BestService = () => {
  return (
    <div>
     <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "BEST", link: "/best" },
            ]}
            title="BEST Page"
          />
    
           <Best />
       </div>
  );
};

export default BestService;