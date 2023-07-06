import PageHeader from "../../components/PageHeader";
import Registered501 from "./Registered501";


const Registered501Page=()=>{
return(
<div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "501c3", link: "/reg501c3" },
        ]}
        title="501c3 Page"
      />

      
      <Registered501 />
  
    </div>
);

};
export default Registered501Page;