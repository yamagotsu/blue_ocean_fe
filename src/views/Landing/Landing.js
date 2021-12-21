import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import soldier_draft from '../../assets/soldier_draft.png';
import eye from '../../assets/eye.svg';
import eye_slash from '../../assets/eye-slash.svg';


const Landing = () => {
    const showHidePassword = (e) => {
        let input = document.getElementById('password-input');
        input.type = input.type === 'password' ? 'text' : 'password';
        e.target.src = input.type === 'password' ? eye : eye_slash;
    }

    return (
        <div>
            <div id={'login-section'} className={'section'}>
                <img id={'soldier-logo'} src={soldier_draft} alt={''} />
                <div id={'login-form'} className={'form'}>
                    <h3 className={'form-title'}>Login</h3>
                    <div className={'form-separator'}> </div>
                    <div className={'form-inner'}>
                        <input type={'text'} className={'form-input'} placeholder={'username'} />
                        <div>
                            <input id={'password-input'} type={'password'} className={'form-input'} placeholder={'password'} />
                            <img className={'show-pw-img'} src={eye} alt={''} onClick={showHidePassword} />
                        </div>
                        <button className={'form-submit'}>Login</button>
                    </div>
                </div>
                <p id={'password-prompt'} className={'form-prompt'}>
                    Forgot your password? Click <a className={'form-link'} href={'/'}>here</a>
                </p>
                <p id={'signup-prompt'} className={'form-prompt'}>
                    Don't have an account? Signup <a className={'form-link'} href={'/'}>here</a>
                </p>
        </div>
    </div>
    )
};

export default Landing;