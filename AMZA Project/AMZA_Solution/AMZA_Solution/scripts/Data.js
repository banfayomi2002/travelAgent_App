

var data;
var asynch = true;



// ***********************************
// AJAX XMLHttpRequest to get the JSON
// from the site defined by url
function loadJSON() {
    var xmlHttp;

    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    if (xmlHttp !== null) {
        if (asynch) {
            // HTTP asynch GET request
            xmlHttp.open("GET", '/TravelCompanies.json', true);
            xmlHttp.onload = function (e) {
                if (xmlHttp.status === 200) {
                    process(xmlHttp.responseText);
                }
            }
            xmlHttp.send(null);
        }
        else {
            // HTTP synchronous GET request
            xmlHttp.open("GET", '/TravelCompanies.json', false);
            xmlHttp.send(null);
            process(xmlHttp.responseText);

        }
    }
}




   function process(response) {
       
       // Parse JSON string into object
      
       data = JSON.parse(response);
       readData();
      
     
 
}



function readData() {
  
    var i;
    for (i = 0; i < data.Companies.length; i++) {
        
        var x = document.getElementById("places").innerHTML += "<li>" + data.Companies[i].Name + "<ul><li> " +
              data.Companies[i].Cost + "</li><li>" +
              data.Companies[i].TravelTime + "</li></ul></li>";
    }
}