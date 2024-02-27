import React from 'react'
import { useFormStatus } from 'react-dom';

function ButtonSave({isValid=true}: {isValid?: boolean;}) {
    const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending || !isValid}>
      Save
    </button>
  )
}

export default ButtonSave