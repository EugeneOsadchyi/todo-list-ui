import { useCallback } from 'react';
import './Todos.css';

const FILTERS = {
  all: 'All',
  completed: 'Completed',
  incompleted: 'Incompleted',
}

export default function Filter({ state, setState }) {
  const isActive = useCallback((key) => state === key ? 'active' : '', [state]);

  return (
    <div className="Filter">
      <span>Show:</span>

      {Object.entries(FILTERS).map(([key, value]) => (
        <button key={key} className={isActive(key)} onClick={() => setState(key)}>{value}</button>
      ))}
    </div>
  );
}
