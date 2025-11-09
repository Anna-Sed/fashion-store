import './input.css';

import { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit();
        setEmail('');
    };

    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)} >
            <input 
                className="email-input"
                type="email"
                name="email"
                placeholder='Add your email here'
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <button className="send-btn" type="submit">send</button>
        </form>
    )
};

const Input = (props) => {
    return (
        <section className="input__bloc">
            <div className="container conteiner-pd0">
                <div className="input__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                <div className="input__desc">Type your email down below and be young wild generation</div>
                <Form onSubmit={props.onSubmitEmail}/>
            </div>
        </section>
    )
};

export default Input;
