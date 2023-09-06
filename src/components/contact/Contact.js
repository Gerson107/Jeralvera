import React from 'react'
import Swal from 'sweetalert2'
import { useFormik } from 'formik';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './Contact.css'


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Nombre Requierido';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = ' Apellido Requerido';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Mensaje Requerido';
  } else if (values.message.length < 50) {
    errors.message = 'Por favor escribe mas de 50 caracteres';
  }

  return errors;
};



const Contact = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: (values, { resetForm}) => {
      Swal.fire('Gracias por escribirnos.');
      resetForm();
      
    },
  });

  
  


  return (
    <div  id='contact' className='contact__form'>
      <div className='contact__form-text'>
      <h2>Contactanos</h2>
      <p>Si deseas comunicarte con nosotros y ser nuestro colaborador por favor escribenos a traves de este formulario.</p>


      </div>
      
      <div className='contact__form-body'> 
       <form onSubmit={formik.handleSubmit}>
        <div className='label1'>
       <input
         id="firstName"
         name="firstName"
         placeholder='Nombre'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div><p>{formik.errors.firstName}</p></div> : null}

       
       <input
         id="lastName"
         name="lastName"
         placeholder='Apellido'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.errors.lastName ? <div><p>{formik.errors.lastName}</p></div> : null}

        </div>

       
<div className='label2'>

       <input
         id="email"
         name="email"
         placeholder='Email'
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div><p>{formik.errors.email}</p></div> : null}

       


       <textarea
       id="message"
       placeholder='Dejanos tu mensaje'
       name='message'
       type='text'
       onChange={formik.handleChange}
       value={formik.values.message}></textarea>
        {formik.errors.message ? <div><p>{formik.errors.message}</p></div> : null}

</div>
      

       <button type="submit" onClick={() => { 


       }}>Enviar</button>
     </form>

     </div>
    </div>
  )
}

export default Contact