import React from 'react';
import githubLogo from './assets/GitHub-Mark-Light-32px.png';

function Footer() {

    return(
        <footer className="footer">
            Made by <a href="https://github.com/KFig21"><img class="github-logo" src={githubLogo} alt="github"></img></a> KFig21
        </footer>
    )
}

export default Footer;