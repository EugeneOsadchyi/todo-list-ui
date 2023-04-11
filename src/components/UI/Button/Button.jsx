import './Button.css';

export default function Button({ children, ...props }) {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
}
