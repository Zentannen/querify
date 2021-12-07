var QRCode = require('qrcode')



const app =  require('express')()


app.get('*',(req,res)=>{
    console.log(req.path)
    QRCode.toDataURL(req.path, function (err, url) {
        console.log(url)
        res.send(`
            <img src="${url}"/>
        `)
      })
    
})

app.listen(5100,()=>console.log('Application Running'))