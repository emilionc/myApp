import React from 'react';
import { Button,  Form } from 'semantic-ui-react';
import { useFormik } from 'formik';

const Boton = () => {
  const Formik = useFormik({
    initialValues={
      nombre='',
      email=''
    }, 
    onSubmit:(data)=>{
      console.log(data)
    }
    
  })
  return (
    <div>
      <Form  onSubmit={Formik.handleSubmit}
    style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "50rem",
      }}
    >
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' name='nombre'  />
      </Form.Field>
      <Form.Field>
        <label>email</label>
        <input placeholder='email' name='email' />
      </Form.Field>
      
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  )
};

export default Boton
