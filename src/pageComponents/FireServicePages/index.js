import PageHeader from "../../components/PageHeader";
import Fire from "./Fire";

const Firepage=()=>{

return(
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Fire", link: "/fire" },
        ]}
        title="FIRE Page"
      />

       <Fire />
  
    </div>



);


};
export default Firepage;