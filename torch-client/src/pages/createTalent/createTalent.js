import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import UploadBox from '../../components/uploadBox/uploadBox';
import './createTalent.sass';

var CreateTalent = () => {

    var body = () => {
        return (
            <div class="body" id="createTalent">
                <h2>Upload your resume and let Talent Seekers find you! No other work required.</h2>
                <UploadBox/>
                <button id="uploadButton">Select file</button>
            </div>
        )
    }
    return (
        <div>
        <Header/>
        {body()}
        <Footer/>
        </div>
    )
}

export default CreateTalent;