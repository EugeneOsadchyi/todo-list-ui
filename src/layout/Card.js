import Card from '../components/UI/Card/Card';

export default function CardLayout({ title, subtitle, children }) {
  return (
    <Card>
      <Card.Header title={title} subtitle={subtitle} />
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}
