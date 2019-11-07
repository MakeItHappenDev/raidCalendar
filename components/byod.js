import React, {useState} from 'react'
import { Base64 } from 'js-base64'
import Router from 'next/router'


export default () => {

    const [mongo, setMongo] = useState('mongo://<user>:<password>@<server>/<database>')

    const navigateToByod = () => {
        Router.push(`/byod/${Base64.encode(mongo)}`)
    }

    return(
        <section>
            <h1>Bring your own database</h1>
            <input type="text" value={mongo} onChange={e=>setMongo(e.target.value)}/>
            <button onClick={()=>navigateToByod()}>let's go!</button>
        </section>
    )
}