import React, { useState, useEffect } from 'react'
import markdownFile from '../../articles/tests/markdown.md'
import Md from 'markdown-to-jsx'
import cogoToast from 'cogo-toast'

const Markdown = () => {
    const [renderMD, setRenderMD] = useState("")

    useEffect( ()=>{
        fetch(markdownFile)
            .then(data=>data.text())
            .then(text=> {
                console.log(text)
                setRenderMD(text)
                cogoToast.loading(`loaded ${markdownFile}`,{position: 'bottom-center'})
            })
            .catch(error=>{
                cogoToast.error(`error loading file`)
            })
    } , [] )

    return(
        <section className="markdown">
                <h2>
                    Markdown Experiments:
                </h2>
                <p>This is rendered from <a href={markdownFile} target="_blank" rel="noopener noreferrer">a staic resource</a></p>
                <p>My current hobby is playing with CSS on markdown parsers, I've found a few challenging markdown files which contain specific language code blocks which do not parse correctly with markdown-to-jsx, there may be plugins that will help this, however I don't know if this is the case yet. I may end up going with markdown-it and make a utility that returns jsx</p>
                <p>Currently I've written a little css and rendered the file</p>
                <Md children={renderMD} />
        </section>
    )
}

export default Markdown