import PageHeader from "../../components/PageHeader";
import Corporate from "./Corporate";


const CorporatePage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Corporate Matching", link: "/corporate" },
        ]}
        title="Corporate Page"
      />

      
      <Corporate />
  
    </div>
  );
};

export default CorporatePage;
