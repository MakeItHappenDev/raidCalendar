import React from 'react'

//extend Date
Date.prototype.addDays = function(days){
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

const sortByDate = (a,b) => {
    if(a.date > b.date){return 1}
    else if(a.date < b.date){return -1}
    return 0
}


export default () => {

    //date variables
    const firstMoltenCore = new Date(Date.UTC(2019,7,28,8,0,0))
    const firstOnyxia = new Date(Date.UTC(2019, 7, 27, 7, 0, 0))
    const endDay = new Date().addDays(30)

    const getResets = (name,step,first,end) => {
        let dateArray = []
        let currentDate = first
        while(currentDate < end){
            let reset = {
                name,
                date:currentDate,
                string:currentDate.toUTCString()
            }
            currentDate = currentDate.addDays(step)
            dateArray.push(reset)
        }
        return dateArray
    }

    const moltenCores = getResets('MoltenCore',7,firstMoltenCore,endDay)
    const onyxias = getResets('Onyxia',5,firstOnyxia,endDay)

    const resetArray = moltenCores.concat(onyxias).sort(sortByDate)

    return (
        <>
            <h1 style={{textAlign:'center'}}>My raid Scheduler</h1>
            {resetArray.map((r,i)=><Reset key={`${r.name}-${i}`} {...r}/>)}
        </>
    )
}


const Reset = (props) => {

    const now = new Date()
    const wrapper = {
        display:'flex',
        width:'600px',
        margin:'0 auto'
    }
    const grey = {
        color:'grey'
    }
    const arm = {
        flex:'1 1 200px',
        margin:'0 1rem'
    }
    const left = {
        textAlign:'right'
    }
    if(props.date < now){
        if(
            (props.name === "MoltenCore" && props.date > now.addDays(-7)) ||
            (props.name === "Onyxia" && props.date > now.addDays(-5))
        ){
            return(
                <article style={{...wrapper,...grey}}>
                    <p style={{...arm,...left}}>{props.string}</p>
                    <Design/>
                    <p style={{...arm}}>{props.name} reseted</p>
                </article>
            )
        }
        return null
    }

    return (
        <article style={wrapper}>
            <p style={{...arm,...left}}>{props.string}</p>
            <Design/>
            <p style={{...arm}}>{props.name} resets</p>
        </article>
    )
}

const Design = () => {
    const circle = {
        height:'1rem',
        width:'1rem',
        borderRadius:'1rem',
        border:'2px solid black'
    }
    const trailer = {
        height:'3rem',
        width:'4px',
        marginLeft:'0.5rem',
        backgroundColor:'black'
    }
    return (
        <nav>
            <div style={circle} />
            <div style={trailer} />
        </nav>
    )
}