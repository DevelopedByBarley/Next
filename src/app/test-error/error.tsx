'use client';
export default function ErrorMessage({error}: {
    error: Error
}) {
    return <div>Error in test error {error.message} </div>
}