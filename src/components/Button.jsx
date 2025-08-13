function Button({ children, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-[100px] h-[40px] ${bg} rounded font-medium`}
    >
      {children}
    </button>
  );
}

export default Button;
