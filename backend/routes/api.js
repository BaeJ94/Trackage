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

    axios.get(url,{
        responseType: 'document'
    })
    
        .then(data => {
            return data.data
            //goes one level deeper into obj then returns to next .then
            //easier to read
            //avoids headers and other unnecessary keys
        })
        .then(data => {
            let result = "";
            parseString(data, function (err, result) {
            //Parses XML. Imported at top of page from xml2js.
            //IF YOU HAVE ISSUES WITH THIS WHEN DEPLOYING THIS IS WHAT YOU FIX
                var obby = JSON.stringify(result)
                console.log(obby);
                res.send(obby)
                //res.send(util.inspect(result, false, null));
                // **util.inspect method returns a STRING. You must handle the 
                //data and/or the result obj in a different way or handle them
                //on the backend
                //FIXED by using JSON.stringify on line 29

            });
        })
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