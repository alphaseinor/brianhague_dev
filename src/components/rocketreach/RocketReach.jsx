import React, { useState } from 'react'

const RocketReach = () => {

    const initialFormState = {
        apikey:"",
        name:"",
        company:"",
    }

    const [form, setForm] = useState(initialFormState)


    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(form)
    }


    return(<>
        <section>
            <form onSubmit={submitForm}>
                <label htmlFor="API Key">
                    Your RocketReach API Key
                    <input name="apikey" value={form.apikey} onChange={onChange} type="text"/>
                </label>
                <label htmlFor="Name">
                    Name
                    <input name="name" value={form.name} onChange={onChange} type="text"/>
                </label>
                <label htmlFor="Company Name">
                    Company Name
                    <input name="company" value={form.company} onChange={onChange} type="text"/>
                </label>
            </form>
        </section>
    </>)
}

export default RocketReach