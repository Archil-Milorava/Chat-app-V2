const Input = ({type, placeholder, value, onChange}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
