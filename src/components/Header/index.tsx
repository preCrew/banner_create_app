import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeaderBlock from './style'

import icoGithub from '../../assets/images/ico-github.svg'

interface indexProps {

}

const Header = () => {
    return (
        <HeaderBlock>
            <Router>
                <h1><Link to="/">Banner</Link></h1>
                <a className="ico-git" target="_blank" href="https://github.com/preCrew/banner_create_app" rel="noreferrer"><img src={icoGithub}/> Gitgub</a>
            </Router>
        </HeaderBlock>
    );
}

export default Header;