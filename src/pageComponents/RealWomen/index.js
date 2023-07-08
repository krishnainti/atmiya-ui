import PageHeader from "../../components/PageHeader";
import Realwomen from "./Realwomen";


const RealWomenPage = () => {
  return (
    <div>
        <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "WOMEN", link: "/women" },
            ]}
            title="Real Women Page"
          />
    
        <Realwomen />
    </div>
  );
};

export default RealWomenPage;
