console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgres=document.getElementById("myProgress");
let git=document.getElementById("gif");
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName:"Maahi Ve",filePath:"songs/2.mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Rata Lambiya",filePath:"songs/1.mp3",coverPath:"covers/cover2.jpg"},
    {songName:"Kesariya Dance Mix",filePath:"songs/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/4.mp3",coverPath:"covers/cover4.jpg"},
    {songName:"Jaane Kyun Dil Janta Hai",filePath:"songs/5.mp3",coverPath:"covers/cover5.jpg"},
    {songName:"Ishaqzaade",filePath:"songs/7.mp3",coverPath:"covers/cover7.jpg"},
    {songName:"Tere Mast Mast Do Nain",filePath:"songs/6.mp3",coverPath:"covers/cover6.jpg"},
    {songName:"Kalank",filePath:"songs/8.mp3",coverPath:"covers/cover8.jpg"},
    {songName:"Kashmir Mai tu Kanyakumari",filePath:"songs/9.mp3",coverPath:"covers/cover9.jpg"},
    {songName:"Kaanunna Kalyanam",filePath:"songs/10.mp3",coverPath:"covers/cover10.jpg"},
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})
//Event listening
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgres.value=progress;
})
myProgres.addEventListener('change',()=>{
    audioElement.currentTime=myProgres.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        // gif.style.opacity=1;
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
           element.classList.remove("fa-circle-play");
            element.classList.add("fa-circle-pause");
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            element.classList.remove("fa-circle-pause");
            element.classList.add("fa-circle-play");
            gif.style.opacity=0;
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
        makeAllPlays();
        
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
        makeAllPlays();
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
});
