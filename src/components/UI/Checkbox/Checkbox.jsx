import './Checkbox.css';

export default function Checkbox({ label, ...props }) {
  return (
    <label className="Checkbox">
      <input
        type="checkbox"
        {...props}
      />
      {label}
    </label>
  );
}
