import PageHeader from "../../components/PageHeader";
import ExecutiveCommitee from "./ExecutiveCommitee";



const ExecutiveCommiteePage = () => {
  return (
    <div>
      <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "Executive Committee", link: "/exec" },
            ]}
            title="Executive Committee Page"
          />
          <ExecutiveCommitee />
    </div>
  )
}

export default ExecutiveCommiteePage
