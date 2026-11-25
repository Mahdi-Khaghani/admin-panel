import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Input = ({type,name,label,className,placeholder}) => {
    return(
        <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir-ltr">
                <span className="input-group-text w_6rem justify-content-center">{label}</span>
                <FastField type={type} className="form-control" placeholder={placeholder} name={name}/>
            </div>
            <ErrorMessage name={name} component={FormikError}/>
        </div>
    )
}

export default Input;