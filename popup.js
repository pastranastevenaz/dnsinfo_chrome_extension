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


function aRecordLookup(domain){
  var a = domain;
  a = a
    .replace('https', '')
    .replace('http', '')
    .replace('www.', '')
    .replace('://', '')
    .replace(/\/$/, '')
  console.log(a);
  axios.get('https://dns-api.org/A/'+a)
  .then(function (response){
    // console.log(response);
    var jsonResponse = response.data;
    // console.log(jsonResponse);
    var arecords = document.getElementById("a-records");
    for(var i = 0; i < jsonResponse.length; i++){
      stringResponse = JSON.stringify(jsonResponse[i].value);
      console.log(stringResponse);
      var node = document.createElement("li") // Create <li> node
      var textNode = document.createTextNode(stringResponse); // Create text node
      node.appendChild(textNode); // Append the text to the <li>
      arecords.appendChild(node);
      // arecord.innerHTML += stringResponse;
      // var arecord = document.createTextNode(stringResponse);
      // document.getElementById("a-records").innerHTML = stringResponse;
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderURL(url);
    aRecordLookup(url);
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
