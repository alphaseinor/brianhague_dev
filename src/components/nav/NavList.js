import React from 'react';

export function NavList() {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img classname="logo" src="/images/text_logo.png" alt="brian hague developer logo" />
        </a>
        <button >
          <object 
            type="image/svg+xml" 
            className="selected" 
            data="./images/caret-square-down-duotone.svg" aria-label="nav menu toggle" />
        </button>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/brian-hague-7441908/">
          <img classname="svg" src="/images/linkedin-brands.svg" alt="linked in logo" />
          LinkedIn
        </a>
        <a href="https://github.com/alphaseinor">
        <img classname="svg" src="/images/github-square-brands.svg" alt="git hub logo" />
          GitHub
        </a>
      </div>
    </nav>
  );
}
