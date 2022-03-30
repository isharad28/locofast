import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';


const Select = (props) => {
    const { label, name, options , ...rest } = props
    return (
        <>
            {/* <label htmlFor={name}>{label}</label> */}
            <Field as ='select' id={name} name={name} options {...rest} placeholder={props.placeholder} className={props.className} >
                {
                    options.map(option=>{
                        console.log(option,"option")
                        return(
                        <option key={option} value={option} className={option}>{option}</option>
                        )
                    })
                }
            </Field>
            <div>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default Select
