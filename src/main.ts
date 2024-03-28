import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import NavBar from './NavBar.ts'

const app=document.getElementById('app')
app?.insertAdjacentHTML('afterbegin',`
    <header>
        <img src="${viteLogo}" alt="Vite Logo" width="200" height="200" />
        <img src="${typescriptLogo}" alt="TypeScript Logo" width="200" height="200" />
        <h1>Hello Vite with TypeScript!</h1>
        ${NavBar()}
    </header>
    <main>
        <button id="counter">0</button>
    </main>
    `)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
