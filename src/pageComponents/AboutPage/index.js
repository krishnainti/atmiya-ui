import PageHeader from "../../components/PageHeader";
import AboutDetails from "./AboutDetails";


const AboutPage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/about" },
        ]}
        title="About Us"
      />

      <AboutDetails />
      
  
    </div>
  );
};

export default AboutPage;
