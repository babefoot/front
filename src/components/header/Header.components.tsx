import { Link } from 'react-router-dom'
import "./Header.scss"

interface HeaderProps {

    links: {name: string, path: string}[]
}
export const Header = ({links }: HeaderProps) => {

    return (
        <div className='header'>
            
            <div className='navbar'>
                <Link to="/game" ><h1>Bab E-foot</h1></Link>
                <div className='links'>
                    {links.map((link, index) => {
                            return (
                                <Link key={index} to={link.path} className='links'>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </div>
               
            </div>
        </div>
    )
}
