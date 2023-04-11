import './Input.css';

export default function Input({ children, ...props }) {
  return (
    <input className="Input" {...props}>
      {children}
    </input>
  );
}
