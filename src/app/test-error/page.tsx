'use client';


export default function TestError() {

    const getRandomInt = (count: number) => {
        return Math.floor(Math.random() * count)
    }

    const random = getRandomInt(2);

    console.log(random);
    
    if (random === 1) {
        throw new Error('This is a message from test-error problem');
    }

    return <h1>Test Error page</h1>
}