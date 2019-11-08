const Page = (props) => {
    const event2 = {
        name:"component event",
        date:new Date()
    }
    return(
        <>
            <DisplayEvent {...props.event}/>
            <DisplayEvent {...event2}/>
        </>
    )
}

Page.getInitialProps = () => {
    const event = {
        name:"GetInitialProps event",
        date: new Date()
    }
    return {event}
}

const DisplayEvent = (props) => {
    return (
        <>
            <pre>{JSON.stringify(props,null,1)}</pre>
            <p>{props.name} / {typeof props.date} / {typeof props.date === "string"?props.date:props.date.toUTCString()}</p>
        </>
    )
}

export default Page