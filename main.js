randomise = function () {
    var lis = document.getElementById("container").getElementsByTagName('li');
    var matchingLetters = document.getElementById("matchingLetters").value;
    var mastarEki = document.getElementById("mastarEki").checked;

    var fWord = words[Math.floor(Math.random() * words.length)];
    while(!mastarEki && (fWord.endsWith("mek")||fWord.endsWith("mak")||fWord.endsWith("me")||fWord.endsWith("ma")))
        fWord = words[Math.floor(Math.random() * words.length)];
    var validWords = words.filter(word => word.endsWith(fWord.slice(-matchingLetters)));
    if(!mastarEki)
        validWords=validWords.filter(word => !(word.endsWith("mek")||word.endsWith("mak")||word.endsWith("me")||word.endsWith("ma")))

    if(validWords.length<4) return;

    lis[0].innerHTML = fWord;

    validWords.sort( function() { return 0.5 - Math.random() } );
    for (let i = 1; i < 5; i++)
        lis[i].innerHTML = validWords[i];
};