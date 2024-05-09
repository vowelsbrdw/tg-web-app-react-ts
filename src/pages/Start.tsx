import React, { useEffect } from "react";
declare global {
    interface Window {
        Telegram: any
    }
}
const tg = window.Telegram.WebApp
const Start = () => {
    useEffect(()=> {
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <div>
            <button onClick={onClose}></button>
        </div>
    )
}


export default Start;