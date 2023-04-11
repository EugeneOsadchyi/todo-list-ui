import './ButtonGroup.css';

export default function ButtonGroup({ children, ...props }) {
  return (
    <div className="ButtonGroup" {...props}>
      {children}
    </div>
  );
}
