import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'
import './Header.css'
import { Icon } from '@material-ui/core'

const Header = (props) => {
    const userToken = window.localStorage.getItem('userToken')

    const handleLogout = (e) => {
        window.localStorage.clear()
    }

    return (
        <div className='header'>
            <IconButton className='header__logo' href='/'>
                <img aref='/home' src="https://img.icons8.com/material/48/000000/basketball.png" alt='Basketball Icon'/>
            </ IconButton>
            
            <IconButton className='header__icon' href='/ball'>
                <SportsBasketballIcon  />
            </IconButton>

            <div className='header__title'>
                Pick N Roll
            </div>


            {!userToken && <div className='header__auth'>
                <IconButton href='/login'>
                    <div className='header__auth_buttons'>
                        Login
                    </div>
                </IconButton>

                <IconButton href='/register'>
                    <div className='header__auth_buttons'>
                        Register
                    </div>
                </IconButton>
            </div>}

            {userToken && <div className='header__user'>
                    <IconButton href='/settings'>
                        <SettingsIcon />
                    </IconButton>

                    <IconButton href='/' onClick={handleLogout} >
                        <ExitToAppIcon  />
                    </IconButton>
                </div>}

        </div>
    )
}

export default Header
