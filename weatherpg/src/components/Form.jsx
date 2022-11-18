import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();
  const getLoc = (e) => {
    e.preventDefault();
    navigate(`/weather/${zipCode}`);
  }

  return (
    <div>
      <form 
//Navigate separately from setting location value      
        onSubmit={getLoc}
        className="form-floating mt-4 mb-2 InputField">
        <input 
          type="text"
// Set value separately from navigation          
          onChange = {(e) => setZipCode(e.target.value)}
          required
          className="form-control" 
          id="zip" 
          placeholder="1"
        />
        <label htmlFor="zip">Post Code or City for best accuracy</label>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Enter
        </button>
      </form>
      <>
        <div>Enter your location </div>
        <div>above for your forecast!</div>
      </>
    </div>
  )
}
