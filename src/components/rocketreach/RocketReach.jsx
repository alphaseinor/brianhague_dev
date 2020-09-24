import React, { useState } from 'react'
import cogoToast from 'cogo-toast'
import axios from 'axios'

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
        if(form.apikey !== "" && form.name !== "" && form.company !== ""){
            console.log(form)
            axios.get(`https://api.rocketreach.co/v2/api/lookupProfile?ApiKey=${form.apikey}`)
                .then(res=>{console.log(res)})
                .catch(err=>{
                    cogoToast.error(`API information on form may be incorrect. See console for more information`, {position: 'bottom-center'})        
                    console.log("Yeah, something is wrong here, did you mis type up your API key?")
                    console.log(err)
                })
        } else {
            cogoToast.error(`missing information on form`, {position: 'bottom-center'})
        }
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
                <button type="submit">Submit</button>
            </form>
        </section>
    </>)
}

export default RocketReach