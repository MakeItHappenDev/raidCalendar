export default (raid) => {
    const clean = raid._doc
    return {
        id:clean._id,
        name:clean.name,
        date:clean.date
    }
}