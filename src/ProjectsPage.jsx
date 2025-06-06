import React from 'react';
import './ProjectsPage.css';

const techSkills = [
    { name: 'Python', class: 'devicon-python-plain'},
    { name: 'Java', class: 'devicon-java-plain'},
    { name: 'Javascript', class: 'devicon-javascript-plain'},
    { name: 'React', class: 'devicon-react-plain'},
    { name: 'C', class: 'devicon-c-plain'},
    { name: 'C++', class: 'devicon-cplusplus-plain'},
    // { name: 'arduino', class: 'devicon-arduino-plain'},
    { name: 'firebase', class: 'devicon-firebase-plain'},
    { name: 'git', class: 'devicon-git-plain'},
    // { name: 'html5', class: 'devicon-html5-plain'},
    { name: 'jira', class: 'devicon-jira-plain'},
    { name: 'latex', class: 'devicon-latex-plain'},
    { name: 'matlab', class: 'devicon-matlab-plain'},
    { name: 'numpy', class: 'devicon-numpy-plain'},
    { name: 'scala', class: 'devicon-scala-plain'},
];

const experienceData = [
    {
        id: 'exp1',
        title: 'Formal Verification Product Engineering Intern',
        company: 'Cadence Design Systems | Summer 2024 | Austin, TX',
        date: 'Summer 2024',
        description: 'At Cadence, I worked on the Jasper Product Engineering team. Jasper is Cadence\'s formal verification solution. The bulk of the internship was spent diving into a design for a DMA controller and constructing many comprehensive testing environments for the design. I used TCL and SystemVerilog Assertions to ensure and showcase the end-to-end funcitonality of the controller. This was used by the team to showcase the power and functionality of formal verification to clients who were new to formal. Using the DMA design, I developed an example test suite and presentation showcasing Jasper Scoreboard 3, a powerful feature within Jasper, for a specific customer. I also qualitatively benchmarked a proprietary SVA generation LLM, using the test suite I had developed as context data for a RAG for the LLM.'
    },
    {
        id: 'exp2',
        title: 'Tasker and Code Reviewer',
        company: 'Outlier | Winter 2023 - Spring 2024 | Remote',
        date: 'Winter 2023 - Spring 2024',
        description: 'I generated and cleaned data for a code-focused LLM used by Scale AI. This was done by responding to sample programming prompts with LLM-level coding solutions, complete with explanations. Additionally, I compared and critiqued programming responses from a LLM for specific prompts to identify shortcomings and strengths.'
    }
];

const projectsData = [
    {
        id: 1,
        title: 'RISC-V Vector Performance Enhancement',
        description: 'For my Capstone Senior Design Project, myself and four other students worked with Tenstorrent to design and implement performance improvements for their "Ocelot" processor. The processor is built around the RISC-V Vector Extension ISA, utilizing a Berkeley Out-of-Order Machine (BOOM) core and a custom VPU integrated with Open Vector Interface (OVI). We designed and implemented changes in SystemVerilog within the VPU.',
        link: 'https://github.com/oort-3/riscv-ocelot'
    },
    {
        id: 2,
        title: 'Electronic Piano',
        description: 'As the final project for Embedded Systems Lab (445L), myself and three other students built an electronic piano from scratch within a budget of $60, winning 2nd place in the competition. External hall sensors and ADCs were integrated with a standalone MCU for accurate pressure sensing. This was sent over SPI to another MCU which handled sound generation and output. Sound output was achieved through an external DAC or through Bluetooth, and sound files were stored on an SD card so the sound profile could be quickly changed.',
        link: 'https://github.com/Ethan-Hale/EmbeddedLab_FinalProj'
    },
    {
        id: 3,
        title: 'Personal Webpage V1',
        description: 'The very website you are on right now! Built using React, Vite, and CSS with a focus on creating a clean, responsive, and easily updatable personal portfolio to showcase my skills and projects. The design features a gliding tab navigation system and a card-based layout for projects.',
        link: 'https://github.com/your-username/personal-webpage'
    },
    {
        id: 4,
        title: 'Wood + LED Wall Art',
        description: 'As a personal project, I created wall art pieces out of wood and individually-addressable LED light strips. I used a library called FastLED and C++ to create seamless animations. I interfaced buttons with the lights to control the speed and color. Additionally, I designed a custom PCB for the apparatus.',
        link: 'https://github.com/Ethan-Hale/WallArtCode'
    },
    {
        id: 5,
        title: 'Systolic Array Matrix Multiplier',
        description: 'In ECE 460M (Digital Systems Hardware Design) one of our projects was to design a 3x3 matrix multiplier in Verilog. The problem was made more challenging by being built for 8-bit floating point values. I designed and wrote the component, while creating multiple simulation testbenches for the submodules. ',
        link: ''
    },
    {
        id: 6,
        title: 'LC3-b Cycle-Level Simulator in C',
        description: 'Throughout ECE 460N (Computer Architecture), we were building a cycle-level simulator for the LC3-b ISA in C. The ISA only has 22 instructions, and I was given a basic data path and state machine to work with. I designed and implemented new instructions, exception and interrupt handling, virtual memory support, and pipelined operation. This required architecting new datapath components, radically changing the state machine, and updating the microcode to support these changes.',
        link: 'https://github.com/Ethan-Hale/Lab5-EE460N-Computer-Architecture-'
    },
    {
        id: 7,
        title: 'FPV Drones',
        description: 'Beginning in high school and continuing through college, one of my hobbies was building and flying FPV drones. This is what got me into electrical and computer engineering, and is still by far the coolest embedded system I have worked with. It taught me the ins and outs of connecting a MCU with other dedicated hardware and software to create a finished system. In total I have built around 10 drones, and learnt about battery chemistry, RF signals and antennas, PID tuning and automatic control, and other concepts.',
        link: ''
    }
];

// const classesData = [
//     {
//         id: 'ece460n',
//         number: 'ECE 460N',
//         title: 'Computer Architecture',
//         description: 'This this and that, poop butt stuff',
//         link: 'https://github.com/your-username/computer-architecture'
//     }
// ]

function ProjectsPage() {
    return (
        <div className = "projects-page">

            <section className = "technical-section">
                <h2 className = "technical-section-title">Technical Skills and Experience</h2>
                {/*<p className = "technical-blurb">*/}
                {/*    Stuff to do things and stuff.*/}
                {/*</p>*/}
                <div className = "devicons-container">
                    {techSkills.map(skill => (
                        <i key = {skill.name} className = {skill.class} title = {skill.name}></i>
                    ))}
                </div>
            </section>

            <div className = "full-width-section-border"></div>


            <section className = "experience-section">
                <h2 className = "experience-section-title">Work Experience</h2>
                <div className = "experience-cards-container">
                    {experienceData.map(job => (
                        <div key = {job.id} className = "experience-card">
                            <div className = "experience-card-header">
                                <h3 className = "experience-title">{job.title}</h3>
                                <h4 className = "experience-secondary">{job.company}</h4>
                            </div>
                            <div className = "experience-card-body">
                                <p>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className = "full-width-section-border"></div>


            <h2 className = "projects-page-title">My Projects</h2>
            <div className = "projects-container">
                {projectsData.map(project => (
                    <div key = {project.id} className = "project-card">
                        <header className = "card-header">
                            <h3> {project.title}</h3>
                        </header>
                        <div className="card-body">
                            <p> {project.description} </p>
                        </div>
                        <footer className = "card-footer">
                            <a href = {project.link} target = "_blank" rel = "noopener noreferrer">
                                View Project &rarr;
                            </a>
                        </footer>
                    </div>
                ))}
            </div>

            {/*--- Relevant Coursework Section ---*/}
            <div className = "full-width-section-border"></div>

            {/*<section className = "coursework-section">*/}
            {/*    <h2 className = "coursework-section-title">Relevant Coursework</h2>*/}
            {/*    <div className = "coursework-cards-container">*/}
            {/*        {classesData.map(course => (*/}
            {/*            <a*/}
            {/*            key = {course.id}*/}
            {/*            href = {course.link}*/}
            {/*            target = "_blank"*/}
            {/*            rel = "noopener noreferrer"*/}
            {/*            className = "course-card"*/}
            {/*            >*/}
            {/*                <h3 className = "course-card-title">{course.title}</h3>*/}
            {/*                {course.description && (*/}
            {/*                <p className = "course-card-description">{course.description}</p>*/}
            {/*                )}*/}
            {/*            </a>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}

export default ProjectsPage;