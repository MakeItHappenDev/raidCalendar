import {Base64} from 'js-base64'

import connect from '../../helpers/connect'
import raidSchema from '../../helpers/raidSchema'
import processRaid from '../../helpers/processRaid'

export default async (req,res) => {

    try {
        const database = Base64.decode(req.headers["database"])
        const conn = connect(database)
        const Raid = conn.model('Raid',raidSchema)

        const fetchedRaids = await Raid.find()
        res.json({data:fetchedRaids.map(processRaid)})
        return
    } catch (error) {
        res.json({data:[],error:error.toString()})
        return
    }
}