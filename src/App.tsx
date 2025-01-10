import { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'wouter'

export function App() {
    return (
        <>
            <h1>React SSR Demo</h1>
            <Switch>
                <Route path='/'><Index/></Route>
                <Route path='/about'><About/></Route>
            </Switch>
        </>
    )
}

function Index() {
    const [cnt, setCnt] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (cnt == null)
            setCnt(Number(
                localStorage.getItem('my-demo-cnt') ?? '0'
            ))
        else
            localStorage.setItem('my-demo-cnt', String(cnt))
    }, [cnt])

    function update(delta: number) {
        if (cnt != null) setCnt(cnt + delta)
    }

    return (
        <main>
            <p>Counter: { cnt ?? '⏳' }</p>
            <button onClick={() => update(-1)}>Decrement</button>
            <button onClick={() => update(1)}>Increment</button>
            <p><Link href='/about'>About</Link></p>
        </main>
    )
}

function About() {
    return <main>An app demonstrating ReactSSR</main>
}
