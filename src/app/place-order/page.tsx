
'use client';

import { useRouter } from "next/navigation";

export default function PlaceOrder() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Hello');
        router.push('/');
        //router.replace('/');
        //router.forward('/');
        //router.back();
    }

    return (
        <button onClick={handleClick}>
            place order
        </button>
    )
}