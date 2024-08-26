'use client';

import { useState } from "react"


export default function TestError() {
    const [count, setCount] = useState(1);

    if(count === 1) {
        throw new Error('This is a message from test-error problem');
    }

    return <h1>Test Error page</h1>
}