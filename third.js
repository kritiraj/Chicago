var fs=require('fs');
var fetch = require('readline').createInterface({
input: fs.createReadStream('../source/ex.csv')});
var head =[];
var data=[];
var obj={};

var i=0;
fetch.on('line', function (line) 
{
  if(i == 0)
  {
     header =line.split(',');
     i++;
  }
  else
  {
    var content = line.split(',');
    for (var j=0;j<header.length;j++) 
      {     
        if(j==14)
        {
          if(content[17]=="2015")
          obj[header[j]]=content[j];
        }
      }
    var jso=JSON.stringify(obj)+",";
    fs.appendFile('trial2.json',jso,function(err){
    });
  }
});