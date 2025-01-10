import path from 'node:path'
import fs from 'node:fs'
import { renderToString } from 'react-dom/server'
import { Router } from 'wouter'
import { App } from '../src/App.js'

const indexHtml = String(fs.readFileSync(path.join('dist', 'index.html')))

for (const route of ['/', '/about']) {
    const appHtml = renderToString(
        <Router ssrPath={route}>
            <App/>
        </Router>
    )
    const prerendered = indexHtml
        .replace('<!--html-placeholder-->', appHtml)

    const fileName = `${route === '/' ? 'index' : route}.html`
    fs.writeFileSync(path.join('dist', fileName), prerendered)
}
