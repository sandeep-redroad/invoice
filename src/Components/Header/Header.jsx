import React from 'react'
import { Link } from 'react-router-dom'
import assets from '@/assets/assets'

const Header = () => {
    return (
        <div className="px-14 text-white min-h-14 bg-primary-red flex justify-between items-center">
            <div>
                <Link to="/">
                    <img
                        src={assets.redroadicon}
                        alt="Logo"
                        className='w-28'
                    />
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default Header
