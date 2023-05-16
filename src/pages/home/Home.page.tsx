import React from 'react'
import { PageContainer } from '../../pages/Page.container'
import { Viewer } from '../../components/viewer/Viewer'



const Home: React.FC = () => {
  return (
    <PageContainer>
      <div>
          <Viewer/>
      </div>
    </PageContainer>
  )
}

export default Home