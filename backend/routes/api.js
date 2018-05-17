var express = require('express');
var router = express.Router();
const axios = require('axios');
var parseString = require('xml2js').parseString;
const util = require('util');
// const bodyParser = require('body-parser');
console.log(`HI`)

const getApi = (req, res, next) => {
    var url = `http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<?xml version="1.0" encoding="UTF-8" ?><TrackRequest USERID="919199400190"><TrackID ID="${req.body.package}"></TrackID></TrackRequest>`;
    // var url =  'http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<?xml version="1.0" encoding="UTF-8" ?><TrackRequest USERID="919199400190"><TrackID ID="9410809699939267291452"></TrackID></TrackRequest>';
    console.log(`req.body`, req.body);
    // axios({
    //     method: 'get',
    //     url: url
    
    //     responseType:'document'
    // })
    axios.get(url,{
        responseType: 'document'
    })
    
        .then(data => {
            
            return data.data
            //res.send(result); //formerly data.data
        })
        .then(data => {
            let result = "";
            parseString(data, function (err, result) {
                console.log(result);
                res.send(util.inspect(result.TrackResponse, false, null));
            });
        })
        // .then(obj => {
        //     (obj, function (err, result) {
        //       console.log(result)
        //     res.send(result) 
        //   })
        //     // console.log(`obj`, obj)
        //   })
        .catch(err => {
            throw err;
        })
}
//    fetch('https://secure.shippingapis.com/ShippingAPI.dll/?API=TrackV2')
//         .then((res) => {
//             console.log(res);
//             res.status(200)
//                // return res;
//         })
//         .catch((error) => {
//             console.log('Fetch failed', error)
//         })
// }

router.post('/', getApi);

module.exports = router;