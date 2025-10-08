import React from 'react'

const SimpleForm = () => {
    const handleInputForm = (event) => {
        // Default j browser er behavior ase seta prevent koro stop koro
        event.preventDefault();
        // Synthetic base event and target dy
        // console.log(event)
        // console.log(event.target)  // full form ta dise
        // console.log(event.target.name) // name field ta pawa gesy
        console.log(event.target.name.value)
    }
    return (
        <div >
            <form onSubmit={handleInputForm}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SimpleForm
