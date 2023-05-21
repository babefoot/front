import React from 'react'
import { PageContainer } from '../../pages/Page.container'
import { Viewer } from '../../components/viewer/Viewer'
import './Home.scss'



const Home: React.FC = () => {
  return (
    <PageContainer>
      <div className='viewer'>
          <Viewer/>
      </div>
    </PageContainer>
  )
}

export default Home