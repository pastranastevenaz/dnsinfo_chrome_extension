function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
  document.getElementById('status').textContent = statusText;
}

function cleanURL(dirtyURL){
  var a = dirtyURL;
  a = a.split('/')[2];
  a = a
    .replace('https', '')
    .replace('http', '')
    .replace('www.', '')
    .replace('://', '')
    .replace(/\/$/, '')
  console.log(a);
  return a
}

// function lookupDNS(_prefix, _domain){
//   var [lookupPrefix, lookupDomain] = [_prefix, _domain];
//   console.log("THe lookip is: "+lookupPrefix+lookupDomain);
//   axios.get(lookupPrefix+lookupDomain)
//   .then(function (response){
//     var jsonResponse = response.data;
//     console.log(jsonResponse);
//     return jsonResponse;
//   })
//   .catch(function (error){
//     console.log(error);
//   });
// }

function aRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/A/'+a)
  .then(function (response){
    var jsonResponse = response.data;
    var arecords = document.getElementById("a-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponseName = JSON.stringify(jsonResponse[i].name);
      stringResponseValue = JSON.stringify(jsonResponse[i].value);
      stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(
          "Name: " + stringResponseName + " | " +
          "Value: " + stringResponseValue + " | " +
          "TTL: " + stringResponseTTL); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      arecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

// MXRECORDS //////////////////////////////
///////////////////////////////////////
function mxRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/MX/'+a)
  .then(function (response){
    var jsonResponse = response.data;
    var mxrecords = document.getElementById("mx-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponseName = JSON.stringify(jsonResponse[i].name);
      stringResponseValue = JSON.stringify(jsonResponse[i].value);
      stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(
          "Name: " + stringResponseName + " | " +
          "Value: " + stringResponseValue + " | " +
          "TTL: " + stringResponseTTL); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      mxrecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}
// CNAME //////////////////////
///////////////////////////////
function cnameRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/CNAME/'+a)
  .then(function (response){
    var jsonResponse = response.data;
    var cnamerecords = document.getElementById("cname-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponseName = JSON.stringify(jsonResponse[i].name);
      stringResponseValue = JSON.stringify(jsonResponse[i].value);
      stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(
          "Name: " + stringResponseName + " | " +
          "Value: " + stringResponseValue + " | " +
          "TTL: " + stringResponseTTL); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      cnamerecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

// TXT /////////////////////////////
////////////////////////////////////
function txtRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/TXT/'+a)
  .then(function (response){
    var jsonResponse = response.data;
    var txtrecords = document.getElementById("txt-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponseName = JSON.stringify(jsonResponse[i].name);
      stringResponseValue = JSON.stringify(jsonResponse[i].value);
      stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(
          "Name: " + stringResponseName + " | " +
          "Value: " + stringResponseValue + " | " +
          "TTL: " + stringResponseTTL); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      txtrecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

// SOA /////////////////////////////
////////////////////////////////////
function soaRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/SOA/'+a)
  .then(function (response){
    // console.log(response);
    var jsonResponse = response.data;
    // console.log(jsonResponse);
    var soarecords = document.getElementById("soa-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponseName = JSON.stringify(jsonResponse[i].name);
      stringResponseValue = JSON.stringify(jsonResponse[i].value);
      stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(
          "Name: " + stringResponseName + " | " +
          "Value: " + stringResponseValue + " | " +
          "TTL: " + stringResponseTTL); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      soarecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

// NS /////////////////////////////
////////////////////////////////////
function nsRecordLookup(domain){
  var a = domain;
  axios.get('https://dns-api.org/NS/'+a)
  .then(function (response){
    var jsonResponse = response.data;
    var nsrecords = document.getElementById("ns-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponse = JSON.stringify(jsonResponse[i].value);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(stringResponse); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      nsrecords.appendChild(node);
    }
  })
  .catch(function (error){
    console.log(error);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("feedback-button").addEventListener("click", function(){
    alert("Contact form coming soon, email me at steven@stevenanton.io until then")
  });
  getCurrentTabUrl(function(url) {
    var _cleanURL = cleanURL(url);
    console.log("dirty url: " + url);
    console.log("clean url: " + _cleanURL);
    renderURL(_cleanURL);
    aRecordLookup(_cleanURL);
    mxRecordLookup(_cleanURL);
    cnameRecordLookup(_cleanURL);
    txtRecordLookup(_cleanURL);
    soaRecordLookup(_cleanURL);
    nsRecordLookup(_cleanURL);
  });
});


// DOMAIN PREFIXES
var a_domain_prefix='https://dns-api.org/A/';
var aaaa_domain_prefix='https://dns-api.org/AAAA/';
var mx_domain_prefix='https://dns-api.org/MX/';
var cn_domain_prefix='https://dns-api.org/CNAME/';
var soa_domain_prefix='https://dns-api.org/SOA/';
var txt_domain_prefix='https://dns-api.org/TXT/';
var ns_domain_prefix='https://dns-api.org/NS/';
