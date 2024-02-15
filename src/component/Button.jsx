import './Button.style.css';

function Button({ customClass, name, onClick }) {
  return (
    <>
      <button className={customClass} onClick={onClick}>
        {name}
      </button>
    </>
  );
}

export default Button;
