import logo from '../assets/images/logo.svg';
import Card from '../components/UI/Card/Card';
import './CardLayout.css';

export default function CardLayout({ title, subtitle, children }) {
  return (
    <Card>
      <Card.Header>
        <img src={logo} className="logo" alt="logo" />

        {title && <h1 className="title">{title}</h1>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </Card.Header>

      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}
