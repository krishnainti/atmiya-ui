import PageHeader from "../../components/PageHeader";
import Fire from "./Fire";

const Firepage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Fire", link: "/fire" },
        ]}
        title="FIRE - Financial Investment & Real-Estate Education"
      />

      <Fire />
    </div>
  );
};
export default Firepage;
