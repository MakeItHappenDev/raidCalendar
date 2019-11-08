export default (req,res) => {

    //Database connect req.headers["database"]
    res.json([
        {
            name:req.headers["database"],
            string:"Thu 09 Nov 2019 21:00:00 GMT" 
        },
        {
            name:"raid Molten Core",
            string:"Thu 14 Nov 2019 21:00:00 GMT"
        },{
            name:"raid Molten Core",
            string:"Thu 21 Nov 2019 21:00:00 GMT"
        },
    ])
}