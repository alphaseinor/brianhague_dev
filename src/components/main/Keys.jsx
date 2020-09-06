import React from 'react'

const Keys = (props) => {
    return (
        <article>
            <h3 className="title">{props.name}</h3>
            <ul>
                {Object.keys(props.keys).map((key,index)=> (
                    <li key={`key-${props.name}-${key}-${index}`}>{key}</li>
                ))}
            </ul>
        </article>
    )
}

export default Keys