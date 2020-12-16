import './App.css';
import { ModalContext } from './util/context';
import { useState } from 'react';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  const [showModal, updateShowModal] = useState(false);
  const toggleModal = () => updateShowModal(state => !state)
  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      <div className="App">
        <HomePage />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
