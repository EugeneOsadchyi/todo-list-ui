import './Card.css';
import logo from './logo.svg';

export function Card({ children, ...props }) {
  return (
    <div className="Card" {...props}>
      {children}
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <header className="CardHeader">
      <img src={logo} className="logo" alt="logo" />

      {title && <h1 className="title">{title}</h1>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}

function Body({ children }) {
  return <div className="CardBody">{children}</div>;
}

Card.Header = Header;
Card.Body = Body;

export default Card;
