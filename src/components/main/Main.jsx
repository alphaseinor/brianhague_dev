import React, { useState, useEffect } from 'react'
import packageJson from '../../../package.json'
import Keys from './Keys'
import markdownFile from '../../articles/tests/markdown.md'
import Markdown from 'markdown-to-jsx'
import cogoToast from 'cogo-toast'


const Main = () => {
    const [renderMD, setRenderMD] = useState("")

    useEffect( ()=>{
        fetch(markdownFile)
            .then(data=>data.text())
            .then(text=> {
                setRenderMD(text)
                cogoToast.loading(`loaded ${markdownFile}`,{position: 'bottom-center'})
            })
    } , [] )


    return (
        <main>
            <h1>About Me:</h1>
            <section>
                <article>
                    <h2>Brian Hague</h2>
                    <p>I like to do a lot of experimentation with different technologies using this page, so it's not usually the same from month to month</p>
                    <p>the current stack (below) is auto generated from the package.json file, so it's always up to date</p>
                </article>
                <article>
                    <h2>Front End Tech Stack:</h2>
                    {packageJson.dependencies && <Keys keys={packageJson.dependencies} name="Dependencies:" />}
                    {packageJson.devDependencies && <Keys keys={packageJson.devDependencies} name="Dev Dependencies:" />}
                </article>
            </section>
            <section className="markdown">
                <h2>
                    Experiment with markdown:
                </h2>
                <p>This is rendered from <a href={markdownFile} target="_blank" rel="noopener noreferrer">a staic resource</a>, I ended up having to use fetch because I was trying a few different options on rendering. I found the module markdown-to-jsx works wonderfully with fetch and react hooks</p>
                <p>I may still convert this to a module for markdown-it for some of the extra plugins that are not currently accounted for</p>
                <Markdown children={renderMD} />
            </section>
        </main>
    )

}

export default Main