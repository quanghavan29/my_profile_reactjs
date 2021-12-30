import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const resumeData = {
    name: 'Hà Văn Quang',
    gender: 'Male',
    title: 'quanghavan29@gmail.com',
    email: 'quanghavan29@gmail.com',
    phone: '0968904962',
    birthday: '29 June 2000',
    address: 'Sóc Sơn - Hà Nội',
    school: 'FPT University',
    job: 'Web Developer',
    avatarUrl: 'https://picsum.photos/300',
    socials: {
        facebook: {
            link: 'https://www.facebook.com',
            text: 'Quang Cối',
            icon: <FacebookIcon />
        },
        twitter: {
            link: 'https://www.twitter.com',
            text: 'MyTwitter',
            icon: <TwitterIcon />
        },
        github: {
            link: 'https://www.github.com',
            text: 'MyGithub',
            icon: <GitHubIcon />
        },
    }
}

export default resumeData;