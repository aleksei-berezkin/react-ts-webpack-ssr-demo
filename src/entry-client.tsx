import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import { Router } from 'wouter'

declare const IS_PROD: boolean

const container = document.getElementById('app-root')!

if (IS_PROD)
    hydrateRoot(
        container,
        <Router>
            <App/>
        </Router>
    )
else
    createRoot(container).render(
        <App/>
    )

