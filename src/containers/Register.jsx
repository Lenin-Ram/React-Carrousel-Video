import React, {useState} from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/components/Register.scss';


const Register = props => {
  let navigate = useNavigate();
  const [form, setValues] = useState({
    email:'',
    name:'',
    password:'',
      });

      const handleInput = event => {
        setValues({
          ...form,
          [event.target.name]: event.target.value

        });
      };

      const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        console.log(form);
        navigate('/');
    }
    


      return(
          <section className="register">
              <section className="register__container">
               
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                  
                    <input 
                    name='name'
                    className="input" 
                    type="text"
                    placeholder="Nombre"
                    onChange={handleInput}
                     />
                    

                    <input 
                    name='email'
                    className="input" 
                    type="text" 
                    placeholder="Correo"
                    onChange={handleInput}
                    />
                    

                    <input 
                    name='password'
                    className="input" 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleInput}
                    />

                  
                  <button className="button">Registrarme</button>
                </form>
                <Link to='/login'>Iniciar Sesion</Link>
             
              </section>
            
          </section>
      );
  }

  const mapDispatchToProps = {
    registerRequest,
  };

export default connect (null,mapDispatchToProps)(Register);