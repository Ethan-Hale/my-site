// src/AboutMe.jsx
import React from 'react';
import './AboutMe.css'; // Ensure this is imported

const aboutSectionsData = [
    {
        id: 'camping',
        title: 'Fishing, Camping, Floating',
        text: 'I love being outdoors and exploring some of the places off of the beaten path. There\'s almost nothing better to me than a campfire and sleeping in a tent. From tens of camping trips as a kid to multi-day spring break excursions, I\'d like to call myself an outdoor enthusiast. I think it\'s a great way to disconnect from the outside world and connect with friends while making memories. I\'ve found one of the best ways to do this is a multi-day river float trip. It allows you to get as remote as possible, all while seeing new scenery the whole trip. I\'ve been fortunate enough to go on two 2-week trips in Alaska to go after some of the best fishing in the world. I also recently went on few day trip through Boquillas Canyon in Big Bend with my friends for spring break. It provided some of the most incredible views I\'ve ever seen and was a blast. I also really enjoy fishing. I think it\'s a super exciting hobby that allows me to get outside and connect with nature. In the future I hope I can go camping, hiking, and fishing outside of the US.',
        images: [
            '/camping1.jpg',
            '/camping2.jpg',
            '/camping3.png',
            '/camping4.jpg',
        ],
    },
    {
        id: 'sports',
        title: 'Sports and Fitness',
        text: 'Another huge part of my life is fitness and sports. Whether it be lifting weights, playing soccer, or watching football, I\'m somehow connected to sports almost daily. I played soccer in highschool and continued this through college on the intramural soccer team I built and managed, "The Mystery Machines". It was a great experience for everyone involved, and we did it all 4 years at UT. While it was all for fun, it taught me leadership and management skills, coordinating everyone\'s schedules and finding subs when needed. We were able to climb through the playoff bracket one year and bring the championship home, which was extremely rewarding. Additionally, I played intramural flag football, ultimate frisbee, dodgeball, and bowling at UT. Truly some of the most exciting times I had with my friends there. Besides sports, I love and try to excel at all types of games. It doesn\'nt matter whether it\'s a board, card, yard, or videogame, I\'ll play it (and hopefully win). In addition to playing sports, I enjoy lifting weights and have stayed fairly consistent with it throughout my adult life.',
        images: [
            '/sports1.jpg',
            '/sports2.jpg',
            '/sports3.jpg',
            '/sports4.jpg'
        ],
    },
    { // Added a third section to demonstrate alternation
        id: 'travel',
        title: 'Travel',
        text: 'Travelling to new places is another one of my favorite things to do. I\'ve been fortunate enough to visit many different countries and places within the US. I love experiencing new cultures, seeing historic architecture, and trying new food. I also enjoy hiking and seeing the natural scenery of these new places. Whether it be with friends or family, I hope to visit many more places.',
        images: [
            '/travel1.jpg',
            '/travel2.jpg',
            '/travel3.jpg',
            '/travel4.jpg',
        ],
    }
];

function AboutMePage() {
    return (
        <div className="about-me-page">
            {/* --- Bio Section --- */}
            <section className="bio-section">
                <h1 className="bio-title">About Me</h1>
                <img
                    src="../headshot1%20-%20Copy.jpg"
                    alt="Ethan Hale Headshot"
                    className="headshot"
                />
                <div className="bio-text">
                    <p>
                        Hi, I'm Ethan Hale! I'm a passionate and driven college student with a strong interest in software development, computer architecture, and innovative technologies. I thrive on challenges and am constantly seeking opportunities to learn and grow, both personally and professionally. This page offers a little more insight into who I am beyond the resume.
                    </p>
                </div>
            </section>

            {/* --- Subsequent Informational Sections --- */}
            {aboutSectionsData.map((section, index) => (
                <React.Fragment key={section.id}>
                    <div className="full-width-section-border"></div>
                    {/*
                        Conditionally apply 'info-section-alt-bg' for sections at odd indices (1, 3, 5...).
                        The first section (index 0) will use the default .info-section-styled-bg.
                        The second section (index 1) will use .info-section-alt-bg.
                        The third section (index 2) will use the default, and so on.
                    */}
                    <section
                        className={`info-section info-section-styled-bg ${
                            index % 2 === 1 ? 'info-section-primary-bg-alt' : ''
                        }`}
                    >
                        <h2 className="info-section-title">{section.title}</h2>
                        <p className="info-section-text">{section.text}</p>
                        {section.images && section.images.length > 0 && (
                            <div className="image-grid">
                                {section.images.map((imageSrc, imgIndex) => (
                                    <div key={imgIndex} className="grid-image-item">
                                        <img src={imageSrc} alt={`${section.title} - Image ${imgIndex + 1}`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </React.Fragment>
            ))}
        </div>
    );
}

export default AboutMePage;