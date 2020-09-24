import React, { useState } from 'react'
import cogoToast from 'cogo-toast'
import axios from 'axios'

const RocketReach = () => {

    const initialFormState = {
        apikey:"3E7k0123456789abcdef0123456789abcdef",
        name:"Mark Benioff",
        company:"Salesforce",
    }

    const [form, setForm] = useState(initialFormState)
    const [data, setData] = useState({})


    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        cogoToast.loading("Loading...", {position: "bottom-center"})
        if(form.apikey !== "" && form.name !== "" && form.company !== ""){
            // console.log(form)
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.rocketreach.co/v2/api/lookupProfile?api_key=${form.apikey}&name=${form.name}&current_employer=${form.company}` )
                .then(res=>{
                    console.log(res)
                    setData(res.data)
                })
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
        <section>
            <article className="markdown">
                { 
                    data.name ? (<>
                        {data.profile_pic && <img src={data.profile_pic} alt={data.name} />}
                        <h3>{data.name}</h3>
                        <h4>Emails</h4>
                        {
                            data.emails.map((email, index)=>(
                                email.smtp_valid === "valid" && <p key={email+index}><a href={`mailto:${email.email}`}>{email.type}: {email.email}</a></p>
                            ))
                            
                        }
                        <h4>Links</h4>
                        {
                            Object.keys(data.links).map((key, index) => (
                                <p key={key+index}><a href={data.links[key]}>{key}</a></p>
                            ))
                        }
                    </>):(<>no data</>)
                }
            </article>
        </section>
    </>)
}

export default RocketReach