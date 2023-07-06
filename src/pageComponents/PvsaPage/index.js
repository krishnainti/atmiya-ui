import PageHeader from "../../components/PageHeader";
import Pvsa from "./Pvsa";


const PvsaPage=()=>{
return(
<div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "PVSA", link: "/pvsa" },
        ]}
        title="PVSA Page"
      />

      
      <Pvsa />
  
    </div>

)

}
export default PvsaPage;