var express = require('express');
var router = express.Router();
const axios = require('axios');



function api (req, res){
    var url =  'http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<?xml version="1.0" encoding="UTF-8" ?><TrackRequest USERID="919199400190"><TrackID ID="9410809699939267291452"></TrackID></TrackRequest>';

    // axios({
    //     method: 'get',
    //     url: url,
    //     responseType:'document'
    // })
    axios.get(url,{
        responseType: 'document'
    })
        .then(data => {
            console.log(data.data);
            res.send(data.data);
        })
        // .then(obj => {
        //     (obj, function (err, result) {
        //       console.log(result)
        //     res.send(result) 
        //   })
        //     // console.log(`obj`, obj)
        //   })
        .catch(err => {
            console.log(`Backend Fetch err: `, err)
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

router.get('/', api);

module.exports = router;