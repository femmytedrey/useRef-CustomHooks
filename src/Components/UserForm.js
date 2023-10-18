import React, {useState} from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const submitHandler = e => {
        e.preventDefault()
        if(firstName === '' || lastName === ''){
            setFirstNameError(firstName === '' ? 'First name cannot be empty' : '')
            setLastNameError(lastName === '' ? 'Last name cannot be empty' : '')
        } else {
            setFirstNameError('')
            setLastNameError('')
            alert(`Hello ${firstName} ${lastName}`)
            resetFirstName()
            resetLastName()
        }
    }
    // const clickHandler = () => {
    //     if (firstName === '' || lastName === '') {
    //         alert('Both first name and last name cannot be empty');
    //     } else {

    //         submitHandler();
    //     }
    // };
    
  return (
    <div>
        <form onSubmit ={submitHandler}>
            <div>
                <label>First name</label>
                <input {...bindFirstName} type = 'text' />
                <p className= 'error-message'>{firstNameError}</p>
            </div>
            <div>
                <label>Last name</label>
                <input {...bindLastName} type = 'text' />
                <p className = 'error-message'>{lastNameError}</p>
            </div>
            <button type = 'submit'>Submit</button>
            {/* <button onClick={clickHandler}>Submit</button> */}
        </form>
    </div>
  )
}

export default UserForm