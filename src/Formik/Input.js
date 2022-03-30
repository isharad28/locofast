import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';


function Input(props) {
    const { label, name, border, error,disabled, ...rest } = props
    return (
        <>
            {/* <label style={{fontSize:'8px'}} htmlFor={name}>{label}</label> */}
            <Field
                id={name} name={name}
                disabled={disabled}
                {...rest}
                placeholder={props.placeholder}
                // className={props.className}
                className={error ? 'form-control-input-error' : props.className}
            />
            <div className="inputerror">
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default Input
