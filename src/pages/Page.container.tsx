import React from 'react'
import {Header} from '../components/header/Header.components'
import './Page.container.scss'

interface PageContainerProps {

    children: React.ReactNode

}
export const PageContainer = ({children }: PageContainerProps) => {

    const links = [{name:'Home', path: "/home"}, {name: 'Stats', path: "/stats"}]

    return (
    <div className='PageContainer'>
        <Header links={links} />
        <div>
            {children}  
        </div>
    </div>
    )
}
