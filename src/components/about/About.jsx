import React from 'react'
import packageJson from '../../../package.json'
import Keys from './Keys'
import './about.scss'


const About = () =>{
    return (
        <section>
            <h1>Brian Hague</h1>
            <h2>About Me:</h2>
            <article>
                <p>I enjoy experimenting with different technologies, so my page typically changes from month to month</p>
                <p>The currrent theme is inspired by <a href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</a>, it's supposed to have a sandy, dark feel</p>
                <p>The sourcecode for this page can be found in <a href="https://github.com/alphaseinor/brianhague_dev">my github repo</a></p>
            </article>
            <h2>About BrianHague.dev</h2>
            <section className="markdown">
                <h2>Front End Tech Stack:</h2>
                {packageJson.dependencies && <Keys keys={packageJson.dependencies} name="Dependencies:" />}
                {packageJson.devDependencies && <Keys keys={packageJson.devDependencies} name="Dev Dependencies:" />}
            </section>
        </section>
    )
}

export default About