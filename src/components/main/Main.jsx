import React, { useState, useEffect } from 'react'
import packageJson from '../../../package.json'
import Keys from './Keys'
import markdownFile from '../../articles/tests/markdown.md'
import Markdown from 'markdown-to-jsx'


const Main = () => {
    const [renderMD, setRenderMD] = useState("")

    useEffect( ()=>{
        fetch(markdownFile)
            .then(data=>data.text())
            .then(text=> {
                setRenderMD(text)
            })
    } , [] )


    return (
        <main>
            <section>
                <h2>Front End Tech Stack:</h2>
                {packageJson.dependencies && <Keys keys={packageJson.dependencies} name="Dependencies:" />}
                {packageJson.devDependencies && <Keys keys={packageJson.devDependencies} name="Dev Dependencies:" />}
            </section>
            <section className="markdown">
                <h2>
                    Experiment with markdown:
                </h2>
                <p>rendering {markdownFile}</p>
                <Markdown children={renderMD} />
            </section>
        </main>
    )

}

export default Main