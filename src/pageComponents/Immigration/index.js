import PageHeader from "../../components/PageHeader";
import Immigration from "./Immigration";

const ImmigrationPage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "IMMIGRATION", link: "/immi" },
        ]}
        title="Immigration"
      />

      <Immigration />
    </div>
  );
};

export default ImmigrationPage;
