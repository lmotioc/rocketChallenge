import { useEffect, useState } from 'react';
import { Rocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [, triggerRerender] = useState(Date.now());
  
  useEffect(() => {
    setInterval(() => { triggerRerender(Date.now()); }, 500);
  }, [])
  
  return (
    <div className="launchpad">
      <Rocket />
    </div>
  );
}
