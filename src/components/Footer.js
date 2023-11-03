import {AiFillGithub, AiFillHeart} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer-descr__container">
                <p>performed as part of a test case for the company</p>
            </div>
            <div className="footer__logo"></div>
            <div className="footer-icons__container">
                <AiFillGithub/>
                <BsTwitter/>
                <AiFillHeart/>
            </div>
            <span>2023</span>
        </div>
    )
};

export default Footer;