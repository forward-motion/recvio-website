import React from 'react'; 
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import moment from 'moment';


import '../../../styles/_global/ui/Footer.scss';

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccess: () => false
    }
};


const Footer = (props) => {

    console.log('user', props.user);
    console.log('dashbaord', props.dashboard);
    
    
    if(!props.user) {
        return (
            <div className="page-footer">
                <div className="row">
                    <p className="call-to-action-sign-up">Ready to recv<span>?</span> Sign up for <b>free</b> with</p>
                </div>

                <div className="row">
                    <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>

                <div className="row">
                    <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="page-footer">

                <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
            </div>
        );
    }
}

export default Footer;