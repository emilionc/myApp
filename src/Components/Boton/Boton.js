import React from 'react';
import { useFormik } from 'formik';
import "./Boton.css"
const Boton = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
    style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "50rem"
      }}
     onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      

      <button type="submit">Submit</button>
    </form>
  );
};

export default Boton