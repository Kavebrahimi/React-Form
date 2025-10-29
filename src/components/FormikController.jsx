import React from 'react';
import Input from './Input';
import Radio from './Radio';

const FormikController = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'radio':
            return <Radio {...props} />
        default:
            break;
    }
};

export default FormikController;