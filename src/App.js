import React from 'react';
import ResumeExperience from './components/ResumeExperience';
import ResumeSummary from './components/ResumeSummary';
import './css/Bootstrap.css';
import './css/App.css';
import userImage from './images/dev.jpg';
import iconPath from './images/icons/fb-icon.png';

//define variables
const developerName = 'Mukul Singh';
let developerInfo = [{
    id: 1,
    icon: iconPath,
    value: 'Bangalore, India'
}, {
    id: 2,
    icon: iconPath,
    value: 'mukulpesse@gmail.com'
}, {
    id: 3,
    icon: iconPath,
    value: '+91 9901434138'
}, {
    id: 4,
    icon: iconPath,
    value: 'Single'
}, {
    id: 5,
    icon: iconPath,
    value: '20th July, 1993'
}, {
    id: 6,
    icon: iconPath,
    value: 'facebook.com/mukulsingh20'
}, {
    id: 7,
    icon: iconPath,
    value: 'linkedin.com/in/mukul-singh-22609183'
}];

let developerSummary = [{
    id: 1,
    summaryText: '3 years of professional experience as a Full Stack Developer'
}, {
    id: 2,
    summaryText: 'Proficient level experience in MVC architecture, creating highly usable solutions focused on user experience'
}, {
    id: 3,
    summaryText: 'Proven technical and analytical skills for creating systems, database development, testing and coding modules to meet the requirements'
}, {
    id: 4,
    summaryText: 'Quick adaptability and ability to work in a high paced startup environment'
}, {
    id: 5,
    summaryText: 'Strong visual, planning and execution skills'
}, {
    id: 6,
    summaryText: 'A self-motivated, responsible, and reliable team player with a set of very strong technical skills.'
}];

let developerActivities = [{
    id: 1,
    activity: 'Online competitive coding'
}, {
    id: 2,
    activity: 'Music events'
}, {
    id: 3,
    activity: 'Blood donation camps'
}];

let developerLanguages = [{
    id: 1,
    lang: 'English',
    level: 2
}, {
    id: 2,
    lang: 'Hindi',
    level: 3
}];

let developmentSkills = [{
    id: 1,
    skillName: 'PHP, HTML & CSS',
    level: 4
}, {
    id: 2,
    skillName: 'JavaScript',
    level: 3
}, {
    id: 3,
    skillName: 'SQL',
    level: 3
}, {
    id: 4,
    skillName: 'APIs, Ajax, XML, JSON',
    level: 2
}, {
    id: 5,
    skillName: 'Data Structures & Algorithms',
    level: 2
}, {
    id: 6,
    skillName: 'ReactJs',
    level: 1
}, {
    id: 7,
    skillName: 'Others (Java, C, C++)',
    level: 2
}];

let frameworkTools = [{
    id: 1,
    skillName: 'PHP Laravel',
    level: 3
}, {
    id: 2,
    skillName: 'CodeIgniter',
    level: 2
}, {
    id: 3,
    skillName: 'JQuery',
    level: 3
}, {
    id: 4,
    skillName: 'Bootstrap, Materialize',
    level: 4
}, {
    id: 5,
    skillName: 'MySQL Workbench, WinSCP',
    level: 3
}, {
    id: 6,
    skillName: 'Sublime Text, Atom',
    level: 3
}, {
    id: 7,
    skillName: 'Github, Flock, Asana',
    level: 3
}];

let professionalExperience = [{
    id: 1,
    company: 'QuickSearch',
    isCurrentCompany: true,
    role: 'Responsible for all web projects from start to end. Projects include design and development of all the features and platforms (backend, frontend and SEO).',
    technologies: 'PHP Laravel 5.1, JQuery, HTML & CSS, Bootstrap, Google Accelerated Mobile Pages (AMP), Ajax, MySQL, XML, JSON, APIs, AWS',
    location: 'Bangalore',
    type: 'Full Time - July 2015 to Present'
}, {
    id: 2,
    company: 'ISITCA',
    isCurrentCompany: false,
    role: 'Managing a team of developers and designers, responsible for web and android projects. Projects include development of salesforce web & android app, crime reporting android app and various dynamic websites.',
    technologies: 'PHP Laravel 5.5, JQuery, HTML & CSS, Bootstrap, Materialize, Ajax, MySQL, Firebase, XML, JSON, APIs, AWS',
    location: 'Remote',
    type: 'Freelancing'
}, {
    id: 3,
    company: 'Petoo',
    isCurrentCompany: false,
    role: 'Responsible for building of website modules. Projects include inventory system, rating & feedback system and generation of reports.',
    technologies: 'CodeIgniter, JQuery, JavaScript, HTML & CSS, Bootstrap, Ajax, MySQL',
    location: 'Bangalore',
    type: 'Intern - May 2015 to July 2015'
}];

let developerEducation = [{
    id: 1,
    title: 'BE in Computer Science',
    year: '2011 - 2015',
    desc: 'Graduate Apitude Test in Engineering'
}, {
    id: 2,
    title: 'Intermediate',
    year: '2010 - 2011',
    desc: 'City Montessori School - Lucknow'
}, {
    id: 3,
    title: 'High School',
    year: '2008 - 2009',
    desc: 'St. Fidelis College - Lucknow'
}];

let developerAchievements = [{
    id: 1,
    title: 'Qualified GATE',
    year: '2015',
    desc: 'Graduate Apitude Test in Engineering'
}, {
    id: 2,
    title: 'PESIT – ACM coding contest',
    year: '2013',
    desc: '1st Rank, conducted on HackerEarth'
}, {
    id: 3,
    title: 'Developed a billing application',
    year: '2013',
    desc: 'Rungta Tea Pvt Ltd.'
}];

class App extends React.Component {
    render() {
        return(
            <div className="pad-15 lgrey center resume">
                <ResumeSummary
                    userImage = {userImage}
                    developerName = {developerName}
                    developerInfo = {developerInfo}
                    developerSummary = {developerSummary}
                    developerActivities = {developerActivities}
                    developerLanguages = {developerLanguages}
                />
                <ResumeExperience
                    developmentSkills = {developmentSkills}
                    frameworkTools = {frameworkTools}
                    professionalExperience = {professionalExperience}
                    developerEducation = {developerEducation}
                    developerAchievements = {developerAchievements}
                />
                <div className="clearfix"></div>
            </div>
        );
    };
}

export default App;
