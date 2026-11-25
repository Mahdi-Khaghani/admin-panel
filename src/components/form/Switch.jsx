import { FastField } from "formik";

const Switch = ({name,label}) => {
  return (
    <div className="form-check form-switch">
      <label className="form-check-label">{label}</label>
      <FastField type="checkbox" name={name} className="form-check-input" />
    </div>
  );
};

export default Switch;