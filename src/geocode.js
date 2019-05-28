const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoia2lyYW5rdW1hcjIwIiwiYSI6ImNqdzY1a3kxdzE2ODA0NXMwcHJ1bzh3cWwifQ.iQj3vpDtGXSTbhFUoDvgDA&limit=1'

    // request({url: url, json: true}, (error, response) => {
    //     if(error){ 
    //         callback('Unable to connect to loc service', undefined)
    //     } else if(response.body.features.length === 0){
    //         callback('Wrong address, Try with the differt search', undefined)
    //     } else {
    //         callback(undefined, {
    //             location: response.body.features[0].place_name
    //         })
    //     }
    // })

    //Prop shorthand and destructing

    request({url, json: true}, (error, { body }) => {
        if(error){ 
            callback('Unable to connect to loc service', undefined)
        } else if(body.features.length === 0){
            callback('Wrong address, Try with the differt search', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode