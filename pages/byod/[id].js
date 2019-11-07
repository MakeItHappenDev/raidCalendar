import React from 'react'
import axios from 'axios'

import Calendar from '../../components/calendar'


const Home = (props) => {
   return (
    <div>
      <Calendar {...props} byod={true}/>
      <pre>{JSON.stringify(props.query)}</pre>
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
  const raids = response.data
  return {raids,query}
}

export default Home
