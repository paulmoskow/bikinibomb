import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';
import { login } from '../../utils/auth';
import logo from '../../images/logo.svg';

function Login({ handleLogin }) {

  const { formValues, handleChange, errors, isValid, resetForm } = useFormValidation();
  const [serverError, setServerError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      setIsSubmitting(true);
      const { email, password } = formValues;
      login(email, password)
        .then((data) => {
          if(data.token) {
            handleLogin();
            navigate('/movies', {replace: true});
          }
        })
        .catch(err => {
          console.log(err);
          if(err) {
            setServerError('Вы ввели неправильный логин или пароль');
          }
        })
        .finally(() => {
          resetForm();
          setIsSubmitting(false);
        });
    } else {
      console.log('There are errors in form, can not submit')
    }
  };

  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title"> Рады видеть!</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="input__title">E-mail</h3>
        <input value={formValues.email}
          onChange={handleChange}
          className="input__field"
          type="email"
          name="email"
          disabled={isSubmitting}
          required
        />
        <span className="input__error">{errors.email}</span>
        <h3 className="input__title">Пароль</h3>
        <input value={formValues.password}
          onChange={handleChange}
          className={`input__field ${errors.password ? "input__field-invalid" : ''}`}
          type="password"
          name="password"
          disabled={isSubmitting}
          required
        />
        <span className="input__error">{errors.password}</span>
        <button className="button input__button login__button" disabled={!isValid}>Войти</button>
       {serverError && <span className="input__error input__error-overbutton input__error-login">{serverError}</span>}
        <h3 className="input__button-alternative">Еще не зарегистрированы? <NavLink to="/signup" className='link input__link'>Регистрация</NavLink></h3>
      </form>
    </section>
  )
}

export default Login;

