import React, { useContext, useRef, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

const Balance = () => {
  const { transactions, updateTransaction } = useContext(GlobalContext);
  const inputRef = useRef(null);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0)

  const [isEditable, setIsEditable] = useState(false);

  const handleOnChange = (e) => {
    const updatedValue = parseFloat(e.target.value);
    if (!isNaN(updatedValue)) {
      updateTransaction(transactions[0].id, updatedValue);  // Assuming single transaction
    }
  };

  const toggleEdit = (transaction) => {
    if (isEditable) {
      // Save the updated amount to the context when toggling off edit mode
      updateTransaction(transaction.id, parseFloat(total));
      inputRef.current.readOnly = true;
    } else {
      inputRef.current.readOnly = false;
      inputRef.current.focus();
    }
    setIsEditable(!isEditable);
  };

  return (
    <>
      <h4>Your Balance</h4>
      <div style={{ display: 'flex' }}>
        <h1>
          $
          <input
            ref={inputRef}
            value={total}
            className='balance'
            readOnly
            onChange={handleOnChange}
          />
        </h1>
        <button onClick={toggleEdit} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={isEditable ? faSave : faEdit} />
        </button>
      </div>
    </>
  );
};

export default Balance;
