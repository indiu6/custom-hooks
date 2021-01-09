import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function') {
    return;
  }
  if (!onCancel && typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log('deleting..');
  const abort = () => console.log('aborted');
  const confirmDelete = useConfirm('are you sure?', deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
