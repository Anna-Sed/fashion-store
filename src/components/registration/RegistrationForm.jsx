import InformationWindow from '../infoWindow/InfoWindow';
import './registrationForm.css';
import { useState } from 'react';

const RegistrationForm = (props) => {
    const { onClose } = props;
    
    // Состояние для информационного окна
    const [hasRegistration, setRegistration] = useState(false);

    // Состояние формы регистрации
    const initFormData = {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        password: '',
        agreement: false,
    };
    const [formData, setFormData] = useState(initFormData);

    // Обработчик для формы регистрации
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistration(true);
    };

    const { firstName, lastName, birthDate, email, password, agreement } = formData;
    return (
        <div className="registration__modal">
            <div className="modal__content">
                <div className="modal-title">Registration Form</div>
                <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
                    
                    <div className="form-firstName input-field">
                        <label htmlFor="first-name">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="form-lastName input-field">
                        <label htmlFor="last-name">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="form-date input-field">
                        <label htmlFor="birth-date">Date of birth</label>
                        <input
                            type="date"
                            name="birthDate"
                            placeholder="birth date"
                            value={birthDate} 
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="form-email input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="form-password input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            minLength="8"
                            value={password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="form-agreement">
                        <input
                            type="checkbox"
                            value="user aggrees"
                            name="agreement"
                            id="personal-data"
                            checked={agreement}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <label htmlFor="personal-data">I give my consent to the processing of personal data</label>
                    </div>
                    <div className="form__button">
                        <button className="submit-btn">Register</button>
                        <button className="close-btn" onClick={onClose}>Close</button>
                </div>
                </form>
            </div>
            {hasRegistration && <InformationWindow title="Successful registration" description="You have successfully registered. Check your email." onClose={onClose}/>} 
        </div>
        
    )
}

export default RegistrationForm;
