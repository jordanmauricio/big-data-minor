### BIG DATA MINOR PROTOTYPE CODE ###

This basic code pulls objects from Google Place's API and Factual's API.

(1) In Google Places this is achieved through an AJAX Call, with the help of this Chrome Extension to circumvent Cross-Domain errors:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US

(2) In Factual this is achieved through running Express on top of Node, along with (but not necesarry) Node-Monkey for easy browser-console access to the data.

<b>For Oliver:</b>
This means that we can get access to the data, but of course at a limit of the API, therefore we're working out on a way to write the objects to a JSON object file which we can then import to Alteryx and/or Tableu as necesarry.  

Images of Data: http://imgur.com/a/CV8wP
