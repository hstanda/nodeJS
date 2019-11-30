log = console.log
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if(!address){
    log('Please provide a address')
}else{

    const data = geocode(address, (error, {latitude,longitude,location}) => {
        if(error){
            return log(error)
        }
        forecast(latitude, longitude, (error, {forecast}) => {
            if(error){
                return log(error)
            }
            log(location)
            log(forecast)
            const data = {
                location: location,
                forecast: forecast,
            }
        })
    })
}