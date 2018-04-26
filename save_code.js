var mysql = require('mysql');
var readline = require('readline');

var rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});


rl.question ( 'Enter User Id ', (id) =>{
    var user = { userId : id};

rl.question ( 'Enter User Name ', (name) =>{
        var user = {  LastName : name , userId : id  };
        con.query ( 'INSERT INTO users SET ? ' , user , function(err , res){

            if(err) throw err;

        con.query('SELECT * FROM users' , function (err , res) {
          if ( err ) throw err;
          console.log('Data form DB\n' );

          for ( var i = 0 ; i< rows.length ; i ++ ){
                console.log(rows[i].userId , rows[i].userName );
          }

        });



        })
});});



/*con.connect(function(err){
    if(err){
        console.log('Error Connecting to Database');
    }
});

var user =  {PersonID: 1 , LastName: 'xd' , FirstName: 'z' , Address: 'hemlock' , City: 'waterloo'};

con.query ( 'INSERT INTO Persons SET ? ' , user);
con.query('SELECT * FROM Persons' , function (err , res) {


  console.log('Data form DB\n' );

  for ( var i = 0 ; i < rows.length ; i ++ ){

        console.log ( rows[i].PersonID , rows[i].LastName );

  };

});*/
