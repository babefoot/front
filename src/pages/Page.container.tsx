import React from 'react'
import {Header} from '../components/header/Header.components'
import './Page.container.scss'

interface PageContainerProps {

    children: React.ReactNode

}
export const PageContainer = ({children }: PageContainerProps) => {

    const links = [{name:'Game', path: "/game"}, {name: 'Classement', path: "/stats"}]

    return (
    <div className='PageContainer'>
        <Header links={links} />
        {children}  
    </div>
    )
}
