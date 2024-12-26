const Button = ({ children, type, disabled }) => {
  return (
    <button
    disabled={disabled}
      type={type}
      className="btn bg-[#213555] text-[#F5EFE7] tracking-widest"
    >
      {children}
    </button>
  );
};

export default Button;
