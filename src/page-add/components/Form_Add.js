import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as firebase from 'firebase';
import { Button } from 'react-bootstrap';


export default function FormAdd () {
    const [titleValue, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [cost, setPrice] = useState("")
    const [sale, setSale] = useState("")
    const [date, setDate] = useState("")

    const validateTitle = (value) => {
        let error;
        if (!value) {
            error = 'Enter value!';
        } 
        if (/[A-Za-z0-9-]{1,19}$/i.test(value)) {
            error = "Too short!";
        }
        if (/[A-Za-z0-9-]{20,50}$/i.test(value)) {
            error = "Its ok!";
        }
        if (/[A-Za-z0-9-]{51,}$/i.test(value)) {
            error = "Too long!";
        }
        setTitle(value)
        return error;
    }
    
    const validateDesc = (value) => {
        let error;
        if (/[A-Za-z0-9-]{0,200}$/i.test(value)) {
            error = "Its ok!";
        }
        setDesc(value)
        return error;
    }

    const validatePrice = (value) => {
        let error;
        if (/(([0-9]{0,8})+(\.[0-9]{2}))/i.test(value)) {
            error = "Its ok!";
        } else {
            error = "Error"
        }
        setPrice(value)
        return error;
    }

    const validateDiscount = (value) => {
        let error;
        if (/\b\d+(?:%|percent\b)/i.test(value)) {
            error = "Its ok!";
            setSale(value)
        } else {
            error = "Error"
            setSale("")
        }
        return error;
    }

    const validateDate = (value) => {
        let error;
        if (/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/i.test(value)) {
            error = "Its ok!";
            setDate(value)
        } else {
            error = "Error"
            setDate("")
        }
        return error;
    }

    const validateFoto = (value) => {
        let error;
        if (/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/i.test(value)) {
            error = "Its ok!";
        } else {
            error = "Error"
        }
        return error;
    }

    const generatorID = () => {return Date.now() };

    const sendData = () => {
        firebase.database().ref(`products/${generatorID()}`).set({
            title: titleValue,
            desc: desc,
            price: cost,
            discount: sale,
            date: date
        }).then(()=> alert("Data is send!"))
          .catch(error => console.log(error, "error"))
    }

    return(
        <div>
        <Formik
          initialValues={{
            username: '',
            email: '',
          }}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched, validateField, validateForm }) => (
            <Form>
              <Field name="title" validate={validateTitle} className="form-title" required/>
              {errors.title && touched.title && <div>{errors.title}</div>}

              <Field name="foto" validate={validateFoto} className="form-foto" type="file" required/>
              {errors.foto && touched.foto && <div>{errors.foto}</div>}
    
              <Field name="username" validate={validateDesc} className="form-desc"/>
              {errors.username && touched.username && <div>{errors.username}</div>}

              <Field name="price" validate={validatePrice} className="form-price" placeholder="Example 99.00" required/>
              {errors.price && touched.price && <div>{errors.price}</div>}

              <Field name="dicount" validate={validateDiscount} className="form-dicount" placeholder="Example 30%"/>
              {errors.dicount && touched.dicount && <div>{errors.dicount}</div>}

              <Field name="date" validate={validateDate} className="form-date" placeholder="Example DD/MM/YYYY"/>
              {errors.date && touched.date && <div>{errors.date}</div>}

              <Button variant="success" size="lg" block type="submit" onClick={sendData} className="button-add">
                Add product
              </Button>

            </Form>
          )}
        </Formik>
      </div>
    )
   
}