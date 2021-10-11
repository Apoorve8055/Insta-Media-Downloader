const cheerio = require('cheerio');
const request = require('request');


module.exports = (req, res) => {


  var instaurl = "https://www.instagram.com/p/"+req.body.url.split("/")[4];

  request(instaurl,(err, resp, html) => {
    
    let $ = cheerio.load(html); 
    if($('meta[property="og:type"]').attr('content') === "video") res.status(200).json({"url": $('meta[property="og:video"]').attr('content')});
    if($('meta[property="og:type"]').attr('content') === "instapp:photo")  res.status(200).json({"url": $('meta[property="og:image"]').attr('content')});
    if (err) throw err;
    
  })
}