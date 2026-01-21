const Button = ({ children, type, className }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
