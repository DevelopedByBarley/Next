'use client';
export default function ErrorMessage({ error, reset }: {
    error: Error,
    reset: () => void 
}) {
    {/* Újra rendereli a  reset a komponenst error esetén ehhez viszont a page.tsx-nek is clientnek kell lennie!*/}
    return <div>Error in test error {error.message} <button onClick={reset}> Try again</button> </div>
}