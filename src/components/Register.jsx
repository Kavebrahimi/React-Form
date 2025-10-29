import { EnvelopeSimple, IdentificationCardIcon, Lock, Phone, User } from '@phosphor-icons/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';
import axios from 'axios';
import { Link } from 'react-router';

/* -------------------- Formik -------------------- */
const initialValues = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
    authMode: 'with_email'
}
const onSubmit = (values)=> {
    console.log(values);
    let formData = new FormData();
    formData.append('username', values.username)
    formData.append('phone', values.phone)
    formData.append('password', values.password)
    formData.append('email', values.email)

    axios.post('url', formData, {headers:{ 'Content-Type' : 'multipart/form-data'}})
    
}
const validationSchema = Yup.object({
    email: Yup.string()
        .when('authMode', {
            is: 'with_email',
            then: (schema) => schema.required('Email field is required').email('Please insert a valid email'),
        }),
    phone: Yup.string()
        .when('authMode', {
            is: 'with_phone',
            then: (schema) => schema
                .matches(/^[0-9]+$/, 'Phone must contain only digits')
                .min(10, 'Phone must be at least 10 digits')
                .required('Phone field is required'),
        }),

    password: Yup.string()
        .required('Password filed is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,64}$/, 'Password must include upper, lower, number, and symbol (8–64 chars).'),

    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], "Password does'nt match")
        .required('Password Confirmation is required'),

    username: Yup.string().required('Username field is required'),
    firstName: Yup.string().required('First name field is required')
        .matches(/^[a-zA-ZÀ-ÿ\u0600-\u06FF ]{1,50}$/, 'First name can only contain letters and spaces'),

    lastName: Yup.string().required('Last name field is required')
        .matches(/^[a-zA-ZÀ-ÿ\u0600-\u06FF ]{1,50}$/, 'Last name can only contain letters and spaces'),
})


const authModeValues = [
    {id:'with_phone', value:'Phone'},
    {id:'with_email', value:'Email'},
]

const Register = () => {
    return (
        <div className='form-container gradient-border'>
            <h1 className='bruno'>REGISTER</h1>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {
                    formik=>{
                        console.log(formik);
                        return(
                            <Form className='w-full mt-10'>
                                <div>
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="username"
                                        icon={User}
                                        label="Username"
                                        placeholder="Jon_Username"
                                    />
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="firstName"
                                        icon={IdentificationCardIcon}
                                        label="First Name"
                                        placeholder="Jon"
                                    />
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="lastName"
                                        icon={IdentificationCardIcon}
                                        label="Last Name"
                                        placeholder="Doe"
                                    />
                                    <FormikController
                                        formik={formik}
                                        control="radio"
                                        name="authMode"
                                        label="Authentication Type"
                                        options={authModeValues}
                                    />

                                    {
                                        formik.values.authMode === 'with_phone' ? (
                                            <FormikController
                                                formik={formik}
                                                control="input"
                                                type="tel"
                                                name="phone"
                                                icon={Phone}
                                                label="Phone"
                                                placeholder="+98 9123321123"
                                            />
                                        ) : (
                                            <FormikController
                                                formik={formik}
                                                control="input"
                                                type="email"
                                                name="email"
                                                icon={EnvelopeSimple}
                                                label="Email"
                                                placeholder="JonDoe@example.com"
                                            />
                                        )
                                    }
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon={Lock}
                                        label="Password"
                                    />
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="passwordConfirmation"
                                        icon={Lock}
                                        label="Confirm Password"
                                    />
                                    <div className='text-center bruno'>
                                        <button type="submit" className='form-btn'>SIGNUP</button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
            <div className='text-center mt-4 flex flex-col gap-1 bruno'>
                <Link to={'/React-Form'} className='inline-block'>Already have an account? <span className='link-span'>LOGIN</span></Link>
            </div>
        </div>
    );
};

export default Register;