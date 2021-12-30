import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';

const resumeData = {
    name: 'Hà Văn Quang',
    gender: 'Male',
    title: 'quanghavan29@gmail.com',
    email: 'quanghavan29@gmail.com',
    phone: '0968904962',
    birthday: '29 June 2000',
    address: 'Xuân Giang - Sóc Sơn - Hà Nội',
    school: 'FPT University',
    job: 'Web Developer',
    avatarUrl: 'https://picsum.photos/300',
    socials: {
        facebook: {
            link: 'https://www.facebook.com/quanghavan29',
            text: 'Quang Cối',
            icon: <FacebookIcon />
        },
        twitter: {
            link: 'https://www.facebook.com/quanghavan29',
            text: 'MyTwitter',
            icon: <TwitterIcon />
        },
        github: {
            link: 'https://github.com/quanghavan29',
            text: 'MyGithub',
            icon: <GitHubIcon />
        },
    },
    aboutMe: {
        content1: "The “about us” page is a must-have page (this can be a page on your website, separate landing page or even “about me” website as a type of portfolio) used by all types of businesses to give customers more insight into who is involved with a given business and exactly what it does.",
        content2: "Your “About me” page forms the first impression of a company or product, puts a name and a face to your business, and gives website visitor the opportunity to develop a connection with you(a good reason for a visitor to stay on your website!), and it is your best chance to convert more visits to enquiries/ more enquiries to customers.",
    },
    experiences: [
        {
            title: 'OJT NodeJS - FPT Software',
            date: '05/2021 - 11/2021',
            description: "Your “About me” page forms the first impression of a company or product, puts a name and a face to your business.Your “About me” page forms the first impression of a company or product, puts a name and a face to your business.",
        },
    ],
    educations: [
        {
            title: 'FPT University - Hà Nội',
            date: '2018 - Present',
            description: "Your “About me” page forms the first impression of a company or product, puts a name and a face to your business.Your “About me” page forms the first impression of a company or product, puts a name and a face to your business.",
        },
    ],

    services: [
        {
            title: 'Web Developer',
            description: 'I want to become Fullstack Web Developer!',
            icon: <WebIcon />
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'HTML, CSS',
                'Javascript',
                'Bootstrap',
                'Antd, Tailwind',
            ]
        },
        {
            title: 'BACK-END',
            description: [
                'NodeJS',
                'NestJS',
                'Typescript',
                'Docker',
            ]
        },
        {
            title: 'DATABASES',
            description: [
                'MySQL',
                'MSSQL Server',
            ]
        },
        {
            title: 'SOURCE CONTROL',
            description: [
                'GitHub',
                'GitLab',
            ]
        }
    ],

    projects: [
        {
            tag: 'ReactJS',
            imageUrl: 'https://picsum.photos/300',
            title: 'Project ReactJS',
            caption: 'Caption Of Project',
            description: 'This is my project description. Please fill it in.',
            links: [
                { link: '', icon: <YouTubeIcon /> },
                { link: '', icon: <GitHubIcon /> },
                { link: '', icon: <LanguageIcon  /> }
            ]
        },
        {
            tag: 'NodeJS',
            imageUrl: 'https://picsum.photos/300',
            title: 'Project NodeJS',
            caption: 'Caption Of Project',
            description: 'This is my project description. Please fill it in.',
            links: [
                { link: '', icon: <YouTubeIcon /> },
                { link: '', icon: <GitHubIcon /> },
                { link: '', icon: <LanguageIcon  /> }
            ]
        },
        {
            tag: 'Java Spring',
            imageUrl: 'https://picsum.photos/300',
            title: 'Project Java Spring',
            caption: 'Caption Of Project',
            description: 'This is my project description. Please fill it in.',
            links: [
                { link: '', icon: <YouTubeIcon /> },
                { link: '', icon: <GitHubIcon /> },
                { link: '', icon: <LanguageIcon /> }
            ]
        },
        {
            tag: 'ReactJS',
            imageUrl: 'https://picsum.photos/300',
            title: 'Project ReactJS',
            caption: 'Caption Of Project',
            description: 'This is my project description. Please fill it in.',
            links: [
                { link: '', icon: <YouTubeIcon /> },
                { link: '', icon: <GitHubIcon /> },
                { link: '', icon: <LanguageIcon  /> }
            ]
        },
        // {
        //     tag: 'Android',
        //     imageUrl: 'https://picsum.photos/300',
        //     title: 'Project ReactJS',
        //     description: 'This is my project description. Please fill it in.',
        //     links: [
        //         { link: '', icon: <YouTubeIcon /> },
        //         { link: '', icon: <GitHubIcon /> },
        //         { link: '', icon: <LanguageIcon  /> }
        //     ]
        // },
        // {
        //     tag: 'ASP.Net',
        //     imageUrl: 'https://picsum.photos/300',
        //     title: 'Project ReactJS',
        //     description: 'This is my project description. Please fill it in.',
        //     links: [
        //         { link: '', icon: <YouTubeIcon /> },
        //         { link: '', icon: <GitHubIcon /> },
        //         { link: '', icon: <LanguageIcon  /> }
        //     ]
        // },
    ]
}

export default resumeData;