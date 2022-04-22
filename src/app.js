const express = require('express')

const app = express()

app.get(' ',(req,res) => {
    res.send({
        ogrenciAd : 'aslihan',
        ogrenciSoyad: 'akbulut'
    })
})


app.get('/weather',(req,res) => {
    res.send({
        forecast: 'it is snowing',
        location: 'Bursa'
    })
})


app.listen(3000, () =>{
    console.log('server is on port 3000')
})

