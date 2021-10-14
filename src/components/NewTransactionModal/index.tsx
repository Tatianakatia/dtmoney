import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModelProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModelProps) {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >

    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Close modal"></img>
    </button>

    <Container>
      <h2> Insert Transaction</h2>

      <input
        placeholder="Title"
      />
      <input
        type="number"
        placeholder="Valor"
      />

      <input
        placeholder="Category"
      />

      <button type="submit">
        Insert
      </button>
    </Container>
  </Modal>
  )
}