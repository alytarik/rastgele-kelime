function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) { 
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
               //do stuff with fileReader.result
               var mydata=JSON.parse(fileReader.result);


               var lis=document.getElementById("container").getElementsByTagName('li');
               for (let i = 0; i < 5; i++) {
                    var randi=Math.floor(Math.random()*Object.keys(mydata).length);
                    var word = mydata[randi.toString()];
                    lis[i].innerHTML=word;
               }
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
}

randomise = function() {
    readJSON("data.json");
};
