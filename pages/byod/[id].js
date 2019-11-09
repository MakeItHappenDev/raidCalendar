import React, {useState} from 'react'
import axios from 'axios'

import Calendar from '../../components/calendar'


const Home = (props) => {
  const [name,setName] = useState('My raid')
  const [date,setDate] = useState(new Date().toISOString())
  const [raids,setRaids] = useState(props.raids)

  const sendNewRaid = async () => {
    const response = await axios.post(`/api/addRaid`,{database:props.query.id,name,date})
    setRaids([...raids,response.data.data])
  }
   return (
    <div>
      <section>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <input type="text" value={date} onChange={e=>setDate(e.target.value)}/>
        <button onClick={()=>sendNewRaid()}>Add new Raid</button>
      </section>
      <Calendar {...props} raids={raids} byod={true}/>
    </div>
  )
}
Home.getInitialProps = async ({req,query}) => {
  //verify wheter you are ssr, client side
  let baseUrl = ''
  if(req){
    let protocol = 'https'
    let host = req.headers['x-forwarded-host'] || req.headers['host']
    if(host.indexOf('localhost') > -1){
      protocol = 'http'
    }
    baseUrl = `${protocol}://${host}`
  }
  //fetch data
  const response = await axios.get(`${baseUrl}/api/fetchRaids`,{headers:{'database':query.id}}) 
  //return data (date enriched)
  const raids = response.data.data
  return {raids,query}
}

export default Home
