import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Textarea = ({name,label,className,placeholder}) => {
    return(
        <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir-ltr">
                <FastField  placeholder={placeholder} as="textarea" className="form-control" id={name} name={name}/>
                <span className="input-group-text w_6rem justify-content-center">{label}</span>
            </div>
            <ErrorMessage name={name} component={FormikError}/>
        </div>
    )
}

export default Textarea;