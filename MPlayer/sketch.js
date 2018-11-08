var songs = ['01 - Slicker','02 - Cut Throat','03 - Cacitt','04 - Q-Querry'];
var songCount = songs.length;
var currentSong = 0;
var ardu;

function preload()
{
  soundFormats('mp3');
  song = loadSound('assets/'+songs[currentSong]);
}

function setup()
{
  song.setVolume(.1);
  createCanvas(800,600)
}

function keyPressed()
{
  if (key == 'p' && !song.isPlaying())
  {
    fill(0)
    song.play();
  }
  else if (key == 'p' && song.isPlaying())
  {
    fill(255)
    song.pause();
  }
  if (key == 'm')
  {
    if(song.isPlaying())
      {
        song.stop();
      }
    currentSong++;
    song = loadSound('assets/'+songs[currentSong]);
  }
  if (key =='n')
  {
    if(song.isPlaying())
    {
      song.stop();
    }
    currentSong--;
    song = loadSound('assets/'+songs[currentSong]);
  }
}

function draw()
{
  background(180);
  rect(50,60,20,20);
  text(songs[currentSong], 20, 50);
  text(song.currentTime().toFixed(3), 20, 100);
}
/*
function songControl(input)
{
  switch (input)
    {
      case p:
        if (!song.isPlaying())
        {
          fill(0);
          song.play();
        }
        else
        {
          fill(255)
          song.pause();
        }
    }
}
*/
