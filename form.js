
   chrome.tabs.getSelected(null, function(tab) {
       var tabId = tab.id;
       tabUrl = tab.url;
       if(tab.url == 'https://www.youtube.com/watch?v=EviNimQjut8'){
          alert('bullshit')
       }

       //con la linea de abajo se oculta el inpu 
       //document.getElementById('title').value = tabUrl;
       //document.write(tabUrl);
       //sendCurrentUrl(tabUrl)
       $('#send').on('click',function(){
          alert(tabUrl)
      })
   });





function sendCurrentUrl(url) {
  var req = new XMLHttpRequest();
  req.addEventListener('readystatechange', function (evt) {
    if (req.readyState === 4) {
      if (req.status === 200) {
        alert('Saved !');
      } else {
        alert("ERROR: status " + req.status);
      }
    }
  });
  req.open('POST', 'http://localhost:80/extension/insert.php', true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.send('url=' + encodeURIComponent(url));
}

chrome.browserAction.onClicked.addListener(function (tab) {
   sendCurrentUrl(tab.url);
});