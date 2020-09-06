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
            .catch(error=>{
                cogoToast.error(`error loading file`)
            })
    } , [] )


    return (
        <main>
            <h1>About Me:</h1>
            <section>
                <article>
                    <h2>Brian Hague</h2>
                    <p>I like to do a lot of experimentation with different technologies using this page, so it's not usually the same from month to month</p>
                    <p>The current stack is auto generated from the package.json file, so it's always up to date, nothing on the list is permanent.</p>
                    <p>The currrent theme is inspired by <a href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</a>, it's supposed to have a sandy, dark feel</p>
                    <p>The sourcecode for this page can be found in <a href="https://github.com/alphaseinor/brianhague_dev">my github repo</a></p>
                </article>
                <article className="markdown">
                    <h2>Front End Tech Stack:</h2>
                    {packageJson.dependencies && <Keys keys={packageJson.dependencies} name="Dependencies:" />}
                    {packageJson.devDependencies && <Keys keys={packageJson.devDependencies} name="Dev Dependencies:" />}
                </article>
            </section>
            <section className="markdown">
                <h2>
                    Experiment with markdown:
                </h2>
                <p>This is rendered from <a href={markdownFile} target="_blank" rel="noopener noreferrer">a staic resource</a></p>
                <p>My current toy is playing with CSS on markdown parsers, I've found a few challenging markdown files which contain specific language code blocks which do not parse correctly with markdown-to-jsx, there may be plugins that will help this, however I don't know if this is the case yet. I may end up going with markdown-it and make a utility that returns jsx</p>
                <p>Currently I've written a little css and rendered the file</p>
                <Markdown children={renderMD} />
            </section>
        </main>
    )

}

export default Main