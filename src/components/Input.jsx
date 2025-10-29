import { FastField } from 'formik';

const Input = ({ formik, type, name, icon: Icon, label, placeholder }) => {
  return (
    <div className="flex flex-col-reverse relative">
      <small
            className={`input-error ${
            formik.touched[name] && formik.errors[name]
                ? "opacity-100 translate-y-0 my-1"
                : "opacity-0 -translate-y-1"
            }`}
        >
            {formik.errors[name] || ""}
        </small>

      <div className="input-container" data-validate={formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''}>
        <FastField
          autoComplete="off"
          placeholder={placeholder}
          className={`form-input peer ${formik.touched[name] && formik.errors[name] ? 'ring-red-400' : ''}`}
          type={type}
          name={name}
          id={name}
        />

            {Icon && (<Icon className={`form-icon ${formik.touched[name] && formik.errors[name] ? 'text-red-400' : ''}`}/>)}
        </div>

      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
