    
    import './NavBar.css'
    import React from 'react'
    import image from '../assets/icon.png'  
    import {AiOutlineSearch} from 'react-icons/ai'
    const NavBar = () => {
    return (
        <nav class="navbar">
            <div className='top-left'>
                    <img src={image} alt="logo-image" className='logo'/>
                    <div className='select-container'>
                    <select className='choose'>
                        <option>Courses</option>
                        <option>WebDev</option>
                        <option>Quality and Testing</option>
                        <option>OOps</option>
                    </select >
                    </div>
                    <div className='select-container'>
                    <select className='choose'>
                        <option>Programs</option>
                        <option>C++</option>
                        <option>JAVA</option>
                        <option>PYTHON</option>
                    </select>
                    </div>
            </div>
            <div className='top-right'>
                <AiOutlineSearch style={{height:'25', width:'25'}}/>
                <h3>Log in</h3>
                <button className='btn'>
                    JOIN NOW
                </button>
            </div>
        </nav>
        
        )
    }

    export default NavBar
