import PageHeader from "../../components/PageHeader";
import Community from "./Community";


const CommunityPage = () => {
  return (
    <div>
      <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "Community Affairs", link: "/community" },
            ]}
            title="Community Affaris Page"
          />
      <Community />
    </div>
  )
}

export default CommunityPage
