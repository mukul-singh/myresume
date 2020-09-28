import React from 'react';
import ResumeExperience from './components/ResumeExperience';
import ResumeSummary from './components/ResumeSummary';
import './css/Bootstrap.css';
import './css/App.css';
import userImage from './images/dev.jpg';
import calenderPath from './images/icons/calendar.png';
import datePath from './images/icons/date.png';
import heartPath from './images/icons/heart-icon.png';
import linkedInPath from './images/icons/in-icon.png';
import locationPath from './images/icons/location.png';
import mailPath from './images/icons/mail-icon.png';
import phonePath from './images/icons/telephone-icon.png';

//define variables
const developerName = 'Mukul Singh';
let developerInfo = [{
    id: 1,
    icon: locationPath,
    value: 'Bangalore, India'
}, {
    id: 2,
    icon: mailPath,
    value: 'mukulpesse@gmail.com'
}, {
    id: 3,
    icon: phonePath,
    value: '+91 9901434138'
}, {
    id: 4,
    icon: heartPath,
    value: 'Single'
}, {
    id: 5,
    icon: datePath,
    value: '20th July, 1993'
}, {
    id: 6,
    icon: linkedInPath,
    value: 'mukul-singh-22609183'
}];

let developerSummary = [{
    id: 1,
    summaryText: '5 years of professional experience as a Full Stack Developer'
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
    summaryText: 'A self-motivated, responsible, and reliable team player with a set of very strong technical skills'
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
    skillName: 'JavaScript, JQuery',
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
    level: 1
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
    skillName: 'MySQL Workbench',
    level: 3
}, {
    id: 6,
    skillName: 'Grafana, Splunk, Sentry',
    level: 2
}, {
    id: 7,
    skillName: 'Github, Flock, Slack',
    level: 3
}];

let professionalExperience = [{
    id: 1,
    company: 'Capillary Technologies',
    isCurrentCompany: true,
    role: 'Worked on integrations of all marketplaces to build and support a platform for centralized inventory system and orders management.',
    technologies: 'PHP Laravel 5.1, MySQL, AWS, Git, Grafana, Splunk, RabbitMQ, Memecached',
    location: 'Bangalore',
    type: 'Software Developer - June 2018 to Present'
}, {
    id: 2,
    company: 'QuickSearch',
    isCurrentCompany: false,
    role: 'Responsible for all web projects from start to end. Projects include design and development of all the features and platforms (backend, frontend and SEO). It was a startup for local search focussed on connecting businesses and users in tier 3-5 cities of the country.',
    technologies: 'PHP Laravel 5.1, JQuery, HTML & CSS, Bootstrap, Google Accelerated Mobile Pages (AMP), Ajax, MySQL, XML, JSON, APIs, AWS',
    location: 'Bangalore',
    type: 'Full Stack Developer - July 2015 to February 2018'
}, {
    id: 3,
    company: 'ISITCA',
    isCurrentCompany: false,
    role: 'Managing a team of developers and designers, responsible for web and android projects. Projects include development of salesforce web & android app, crime reporting android app and various dynamic websites.',
    technologies: 'PHP Laravel 5.5, JQuery, HTML & CSS, Bootstrap, Materialize, Ajax, MySQL, Firebase, XML, JSON, APIs, AWS',
    location: 'Remote',
    type: 'Freelancer'
}, {
    id: 4,
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
    desc: 'PES Institute of Technology - Bangalore'
}, {
    id: 2,
    title: 'Intermediate',
    year: '2010 - 2011',
    desc: 'City Montessori School - Lucknow'
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
