import React, { useEffect, useRef } from 'react';

const useClick = (onclick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('click', onclick);
    }
    return () => {
      if (element) {
        element.removeEventListener('click', onclick);
      }
    };
  }, [onclick]);
  return ref.current;
};

export default function App() {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
