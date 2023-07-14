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
        title="BEST - Business in Engineering, Sciences & Technology"
      />

      <Best />
    </div>
  );
};

export default BestService;
