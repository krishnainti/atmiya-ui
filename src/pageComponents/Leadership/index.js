import PageHeader from "../../components/PageHeader";
import BoardDirector from "./BoardDirector";

import React from 'react'

const BoardDirectorPage = () => {
  return (
    <div>
   <PageHeader
            breadcrumb={[
              { label: "Home", link: "/" },
              { label: "Board Directors", link: "/board" },
            ]}
            title="Board Directors Page"
          />
      <BoardDirector />


    </div>
  )
}

export default BoardDirectorPage
