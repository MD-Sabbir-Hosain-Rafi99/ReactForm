import React, { useState } from 'react'

const ControlledForm = () => {

    // Input filed state diay controlled kore
    const [password, setPassword] = useState('');

    // Notify alerming
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Browser reload hoa stop kore
        if (password.length < 6) {
            setError('Password must be in 6 charecter!')
        } else {
            setError('');
        }

    }

    const handlepasswordOnChange = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value)
        if (password.length < 6) {
            setError('Password must be in 6 charecter!')
        } else {
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email address' required />
                <br />
                <input type="password" onChange={handlepasswordOnChange} defaultValue={password} name="password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    )
}

export default ControlledForm
