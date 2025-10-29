import { FastField } from 'formik';
import React, { Fragment } from 'react';

function Radio({name, label, options}) {
    return ( 
        <div className='my-5 border-y-2 py-2 border-blue-800/40 flex justify-center items-center flex-col'>
            <p className='mb-3'>{label}</p>
            <div className="flex items-center gap-3">
                <FastField name={name} id={name} >
                    {({field})=>{
                        console.log(field);
                        return options.map((option)=>(
                            <Fragment key={option.id}>
                                <div className='space-x-1'>
                                    <input 
                                        id={option.id} 
                                        {...field}
                                        type="radio" 
                                        value={option.id} 
                                        checked={field.value == option.id}
                                        name={name} 
                                        className="radio-btn"
                                    />
                                    <label htmlFor={option.id} className='text-xs md:text-sm'>{option.value}</label>
                                </div>
                            </Fragment>
                        ))
                    }}
                </FastField>
            </div>
        </div>
    );
}

export default Radio;