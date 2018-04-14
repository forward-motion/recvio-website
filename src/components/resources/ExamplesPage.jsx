import React, { Component } from 'react'; 
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import moment from 'moment';

import '../../styles/resources/examples/ExamplesPage.scss';

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

class ExamplesPage extends Component {
    constructor(props) {
        super(props); 

        this.basic_examples = [
            {
                app: 'Chat App',
                icon: 'icon',
                tag: 'simple chat example'
            },
            {
                app: 'MapApp',
                icon: 'icon',
                tag: 'real-time position tracking'
            },
            {
                app: 'Website',
                icon: 'icon',
                tag: 'with notifications'
            }
        ]; 

        this.advance_examples = [
            {
                app: 'WhatSlack',
                icon: 'icon',
                tag: 'a fully featured chat client'
            },
            {
                app: '{x}uber',
                icon: 'icon',
                tag: 'uber for “x”'
            },
            {
                app: 'GitFeed',
                icon: 'icon',
                tag: 'turn GitHub into a social network'
            }
        ];
    }

    get basicExamples() {
        return this.basic_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    {example.icon}
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    get advanceExamples() {
        return this.advance_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    {example.icon}
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {

        return(
            <div className="examples-page">
                <div className="row">
                    <div className="col-md-12 secondary-background">
                        <h2>Examples</h2>
                    </div>
                </div>

                <div className="row">
                    <div style={{ width: '860px', margin: '0 auto', marginTop: '40px', height: '63vh'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto'}}>
                                    <h3>basic</h3>
                                    <div className="accent-underline"></div>
                                </div>
                               { this.basicExamples }
                            </div>
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto' }}>
                                    <h3>advance</h3>
                                    <div className="accent-underline"></div>
                                </div>
                                { this.advanceExamples }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="examples-page-footer">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="call-to-action-sign-up">Ready to recv<span>?</span> Sign up for <b>free</b> with</p>
                            </div>
                        </div>

                        <div className="row">
                            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>

                        <div className="row">
                           <div className="col-md-6">
                                <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExamplesPage; 