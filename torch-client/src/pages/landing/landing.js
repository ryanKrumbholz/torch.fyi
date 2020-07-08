import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './landing.sass'

var Landing = () => {

   

    var hList = [
        <li><a href="/about">About</a></li>,
        <li><a href="/pricing">Pricing</a></li>,
        <li><a href="/login"><span style={{color: "#ED6A5A"}}>Login</span></a></li>,
        <li><a href="/sign_up">Sign Up</a></li>
    ];

    var body = () => {
        return(
            <div class="body" id="landing">
                <h2 id="tagline"><span style={{color: "#ED6A5A"}}>Torch.fyi</span>, the talent repository.</h2>
                <h3>Who are you?</h3>
                <div id="portalSelection">
                <h3><span style={{color: "#ED6A5A"}}>I'm the...</span></h3>
                    <div id="portalButtons">
                        <a href="/create_talent"><button>Talent</button></a>
                        <h4>or</h4>
                        <a href="/sign_up"><button>Talent Seeker</button></a>
                    </div>
                </div>
                
            </div>
        )
    }

    return(
        <div>
            <Header list = {hList}/>
            {body()}
            <Footer/>
        </div>
    )
}

export default Landing;