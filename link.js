var mysql = require('mysql');
const https = require('https');

var con = mysql.createConnection({
    host:'twigzxd-db.cu7383oicrfm.us-east-2.rds.amazonaws.com',
    user:'twigzxd',
    acquireTimeout: 30000, //30 secs
    password:'Twig546190416.',
    database:'twigzxd_db'
});

con.connect(function (err) {
    if(err) {
        console.log('Fail to connect');
        console.log(err);
        return;
    }

    console.log('Connect successfully!');
});

var request = require("request");
var url = "https://geoip-db.com/json";

request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        con.query ( 'INSERT INTO geo SET? ' , body , function(err ,  res){
          });
    }
});

con.query('SELECT * FROM geo' , function (err , res) {
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//not test yet


/*var geoReq ={
  hostname:"https://geoip-db.com",
  port:443,
  path:"/json/",
  method:"GET",
}

var geoData = https.request(geoReq, function(res){
  console.log();
});

const user = [
  {id:1, name:`${geoData}`},
]*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*var readline = require('readline');

var rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});


rl.question ( 'Enter User Id ', (id) =>{
    var user = { userId : id};

rl.question ( 'Enter User Name ', (name) =>{
        var user = {  userName : name , userId : id  };
        con.query ( 'INSERT INTO users SET ? ' , user , function(err ,  res){

          if(err) throw err;

        con.query('SELECT * FROM users' , function (err , rows, res) {
          if ( err ) throw err;

        for ( var i = 0 ; i< rows.length ; i ++ ){
                console.log(rows[i].userId ,rows[i].userName );
          };

        });

      });
});
});*/
