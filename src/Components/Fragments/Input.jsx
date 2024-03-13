/* eslint-disable react/prop-types */
export default function Input({ type, placeHolder, labelText }) {
  return (
    <div className="input">
      <label htmlFor={labelText}>{labelText}</label>
      <input placeholder={placeHolder} type={type} name={type} id={labelText} />
    </div>
  );
}
