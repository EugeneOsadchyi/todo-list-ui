import './Card.css';

export function Card({ children, ...props }) {
  return (
    <div className="Card" {...props}>
      {children}
    </div>
  );
}

function Header({ children }) {
  return (
    <header className="CardHeader">
      {children}
    </header>
  );
}

function Body({ children }) {
  return <div className="CardBody">{children}</div>;
}

Card.Header = Header;
Card.Body = Body;

export default Card;
