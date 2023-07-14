import PageHeader from "../../components/PageHeader";
import Asara from "./Asara";

const AsaraPage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "ASARA", link: "/asara" },
        ]}
        title="ASARA - ATMIYA Students Assistance & Reskilling Administration"
      />

      <Asara />
    </div>
  );
};

export default AsaraPage;
