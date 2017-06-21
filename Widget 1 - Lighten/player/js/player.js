var i = 0;
var playlist = [
    {
        mp3:'player/js/musics/Patience.mp3' ,
        title:'Patience - Guns and Roses',
        image: 'player/js/img/Guns.jpg'
    },
    {
        mp3:'player/js/musics/A Prophecy.mp3' ,
        title:'A Prophecy - Asking Alexandria',
        image: 'player/js/img/AA.jpg'

    },
    {
        mp3:'player/js/musics/Follow_You.mp3' ,
        title:'Follow You - Bring Me The Horizon',
        image: 'player/js/img/BMTH.jpg'
    },
]; 

audio = document.getElementById('audio');
var player = document.getElementById('player');


document.onload = setPlayer();

function setPlayer(){
    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = playlist[i].mp3;
        document.getElementById('music-cover').src = playlist[i].image;
    }
}

function play(){
    audio.play();
    document.getElementById('button-play').style.display = "none";
    document.getElementById('button-pause').style.display = "inline-block";
}

function pause(){
    audio.pause();
    document.getElementById('button-pause').style.display = "none";
    document.getElementById('button-play').style.display = "inline-block";
}

function next(){

    pause();

    i++;

    if( i >= playlist.length ) i = 0;

    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = playlist[i].mp3;
    }
    
    document.getElementById('music-cover').src = playlist[i].image;
}

function prev(){

    pause();

    i--;

    if(i < 0) i=(playlist.length-1);

    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = playlist[i].mp3;
    }
    
    document.getElementById('music-cover').src = playlist[i].image;
}

document.getElementById("volume").onchange = function(){
    var v = document.getElementById("volume").value;
    var VIcon = document.getElementById("volume-icon");
    audio.volume = (v/100);

    if(v>=50) {
        if(VIcon.classList.contains('glyphicon-volume-down'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-up';
        }
        else if(VIcon.classList.contains('glyphicon-volume-off'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-up';
        }
    } else if(v<50 && v>10) {
        if(VIcon.classList.contains('glyphicon-volume-up'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-down';
        }
        else if(VIcon.classList.contains('glyphicon-volume-off'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-down';
        }
    } else if(v<10) {
        if(VIcon.classList.contains('glyphicon-volume-up'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-off';
        }
        else if(VIcon.classList.contains('glyphicon-volume-down'))
        {
            VIcon.className = 'glyphicon glyphicon-volume-off';
        }
    }
};
