import { EnvelopeSimple, Lock } from '@phosphor-icons/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';
import { Link } from 'react-router';

/* -------------------- Formik -------------------- */
const initialValues = {
    email: '',
    password: '',
}
const onSubmit = (values)=> {
    console.log(values);
}
const validationSchema = Yup.object({
    email: Yup.string().required('Email field is required').email('Please insert a valid email'),
    password: Yup.string()
        .required('Password filed is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,64}$/, 'Password must include upper, lower, number, and symbol (8–64 chars).'),
})


const Login = () => {
    return (
        <div className='form-container gradient-border'>
            <h1 className='bruno'>LOGIN</h1>
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
                                <div className=''>
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="email"
                                        name="email"
                                        icon={EnvelopeSimple}
                                        label="Email"
                                        placeholder="JonDoe@example.com"
                                    />
                                    <FormikController
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon={Lock}
                                        label="Password"
                                    />
                                    <div className='text-center bruno mt-5'>
                                        <button type="submit" className='form-btn'>SIGN IN</button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
            <div className='text-center mt-4 flex flex-col gap-1 bruno'>
                <a href="" className='form-link'>Forgot your password?</a>
                <Link to={'/register'} className='inline-block'>Don't have an account? <span className='link-span'>SIGN UP</span></Link>
            </div>
        </div>
    );
};

export default Login;