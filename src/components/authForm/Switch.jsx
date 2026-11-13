import { FastField } from "formik";

const Switch = ({name,label}) => {
  return (
    <div className="form-check form-switch">
      <FastField type="checkbox" name={name} className="form-check-input" />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default Switch;