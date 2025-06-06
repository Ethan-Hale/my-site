import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();
    const tabs = [
        {
            id: 'about-me',
            title: 'About Me',
            description: 'Learn more about who I am.',
            path: '/about',
        },
        {
            id: 'projects',
            title: 'My Projects',
            description: 'lskdjf projects',
            path: '/projects',
        },
        // {
        //     id: 'experience',
        //     title: 'Experience',
        //     description: 'lskdjf experience',
        //     path: '/experience',
        // },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const displayIndex = hoveredIndex !== -1 ? hoveredIndex : activeIndex;

    const gliderTransformY = `${displayIndex * 100}%`;
    const gliderOpacity = 1;
    const tabCount = tabs.length;

    const navContainerStyle = {
        '--glider-transform-y' : gliderTransformY,
        '--glider-opacity' : gliderOpacity,
        '--tab-count': tabCount,
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleTabMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleNavMouseLeave = () => {
        if(hoveredIndex !== -1) {
            setActiveIndex(hoveredIndex);
        }
        setHoveredIndex(-1);
    };

    const handleTabClick = (index, path) => {
        setActiveIndex(index);
        handleNavigate(path);
    };


    return (
        <>
        <div className = "home-header">
            <h1>Ethan Hale</h1>
            <p>Welcome to my personal webpage</p>
        </div>

        <nav
            className = "home-nav-tabs"
            style = {navContainerStyle}
            onMouseLeave = {handleNavMouseLeave}
            >

            <div
                className = {`tab-glider ${hoveredIndex !== -1 ? 'glider-is-hovered' : ''}`}
            />
            {tabs.map((tab, index) => (
                <Link
                    key = {tab.id}
                    //className = {`tabs-button ${displayIndex === index ? 'active' : ''}`}
                    to = {tab.path}
                    className = {`tabs-button ${index === activeIndex ? 'active' : ''}`}
                    onMouseEnter = {() => handleTabMouseEnter(index)}
                    //onClick = {() => handleTabClick(index, tab.path)}
                    >
                    {tab.title}
                </Link>
            ))}
        </nav>
    </>
    );
}

export default HomePage;