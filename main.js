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

               var fWord = mydata[(Math.floor(Math.random()*Object.keys(mydata).length)).toString()];
               lis[0].innerHTML=fWord;
                console.log(fWord);

               var words=[];
               for (let i = 0; i < 5; i++) {
                    var word = mydata[(Math.floor(Math.random()*Object.keys(mydata).length)).toString()];
                    while(word.slice(-2) != fWord.slice(-2)) {
                        word = mydata[(Math.floor(Math.random()*Object.keys(mydata).length)).toString()];
                    }
                    words.push(word);
                }
                    
                for(let i =1;i<5;i++){
                    lis[i].innerHTML=words[i];
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