import { useState } from "react";
import "../styles/Form.css";

const FormInput = (props) => {
  const [checked, setChecked] = useState(false);
  const { label, errormessage, onChange, id, ...inputProps } = props;

  const handleBlur = (e) => {
    setChecked(true);
  };

  return (
    <>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        ischecked={checked.toString()}
      />
      <span>{errormessage}</span>
    </>
  );
};

export default FormInput;
