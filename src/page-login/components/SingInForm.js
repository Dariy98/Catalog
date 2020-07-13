import React, { useState }from 'react';
import { Formik, Form, Field } from 'formik';
import * as firebase from 'firebase'
import PageCards from '../../page-cargs/Page_Cards'

export default function SingInForm () {
    const [mail, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hasAccount, setHasAccount] = useState(false)

    const validateEmail = (value) => {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        setEmail(value)
        return error;
    }

    const validatePassword = (value) => {
        let error;
        if (value === 'admin') {
          error = 'Nice try!';
        }
        setPassword(value)
        return error;
    }

    const loginToAccount = () => {
        firebase.auth().signInWithEmailAndPassword(mail, password)
            .then(response => setHasAccount(true))
            .catch(error => alert(error.message));
    }

    return(
        <div>
            {
                hasAccount ? 
                (<PageCards/>)
                :
                (<div className="page-login">
                    <h1 className="title">Sign in your account</h1>
                    <Formik
                        initialValues={{
                            password: '',
                            email: '',
                        }}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                        >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                            <Field name="email" validate={validateEmail} placeholder="Email" className="input-login"/>
                            {errors.email && touched.email && <div>{errors.email}</div>}
                    
                            <Field name="password" validate={validatePassword} placeholder="Password" type="password" className="input-login"/>
                            {errors.password && touched.password && <div>{errors.password}</div>}
                    
                            <button type="submit" onClick={loginToAccount} className="submit">Sing in</button>
                            </Form>
                        )}
                    </Formik>
                </div>)
            }
        </div>
    )
}
