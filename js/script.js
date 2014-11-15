// ==========================
//
//         Soundmood
//
// ==========================

// List of moods
var moodList = ['sad', 'afraid', 'abandoned', 'acceptance', 'adoration', 'affection', 'aggravated', 'agitated', 'aggressive', 'alert', 'amazed', 'ambitious', 'amused', 'anger', 'animosity', 'annoyed', 'anticipation', 'anxiousness', 'appreciative', 'apprehensive', 'ardent', 'aroused', 'ashamed', 'astonished', 'attraction', 'awed', 'betrayed', 'bewildered', 'bitter', 'bliss', 'blue', 'boastful', 'bored', 'breathless', 'bubbly', 'calamitous', 'calm', 'camaraderie', 'cautious', 'cheerful', 'cocky', 'cold', 'collected', 'comfortable', 'compassionate', 'concerned', 'confident', 'confused', 'contempt', 'content', 'courageous', 'cowardly', 'crafty', 'cranky', 'crazy', 'cruelty', 'crummy', 'crushed', 'curious', 'cynic', 'dark', 'dejected', 'delighted', 'delirious', 'denial', 'depression', 'desire poem', 'despair', 'determined', 'devastated', 'disappointed', 'discouraged', 'disgust', 'disheartened', 'dismal', 'dispirited', 'distracted', 'distressed', 'dopey', 'down', 'dreadful', 'dreary', 'eager', 'ecstatic', 'embarrassed', 'emotional-detest', 'empathic', 'emptiness', 'enchanted', 'enigmatic', 'enlightened', 'enraged', 'enthralled', 'enthusiastic', 'envy', 'euphoric', 'excited', 'exhausted', 'expectation', 'exuberance', 'fascinated', 'fear', 'flabbergasted', 'fight-or-flight', 'foolish', 'frazzled', 'frustrated', 'fulfillment', 'furious', 'giddy', 'gleeful', 'gloomy', 'goofy', 'grateful', 'gratified', 'greedy', 'grouchy', 'grudging', 'guilty', 'happy', 'hate', 'heartbroken', 'homesick', 'hopeful', 'hopeless', 'horrified', 'hostile', 'humiliated', 'humored', 'hurt', 'hyper', 'hysterical', 'indignation', 'infatuation', 'infuriated', 'inner peace', 'innocent', 'insanity', 'insecure', 'insecure', 'inspired poem', 'interest', 'intimidated', 'invidious', 'irate', 'irritability', 'irritated', 'jaded', 'jealousy', 'joy', 'jubilant', 'kind', 'lazy', 'left out', 'liberated', 'lively', 'loathsome', 'lonely', 'longing', 'love', 'lovesick', 'loyal', 'lust', 'mad', 'mean', 'melancholic', 'mellow', 'mercy', 'merry', 'mildness', 'miserable', 'morbid', 'mourning', 'needed', 'needy', 'nervous', 'obscene', 'obsessed', 'offended', 'optimistic', 'outraged', 'overwhelmed', 'pacified', 'pain', 'panicky', 'paranoia', 'passion', 'pathetic', 'peaceful', 'perturbation', 'pessimistic', 'petrified', 'pity', 'playful', 'pleased', 'pleasure', 'possessive', 'pride', 'provoked', 'proud', 'puzzled', 'rage', 'regretful', 'relief', 'remorse', 'resentment', 'resignation', 'resolved', 'sadness', 'satisfied', 'scared', 'Schadenfreude', 'scorn', 'selfish', 'sensual', 'sensitive', 'sexy', 'shame', 'sheepish', 'shocked', 'shy', 'sincerity', 'solemn', 'somber', 'sorrow', 'sorry', 'spirited', 'stressed', 'strong', 'submissive', 'superior', 'surprised', 'sweet', 'sympathetic', 'temperamental', 'tense', 'terrified', 'threatened', 'thrilled', 'tired', 'tranquil', 'troubled', 'trust', 'tormented', 'uncertainty', 'uneasiness', 'unhappy', 'upset', 'vengeful', 'vicious', 'warm', 'weary', 'worn-out', 'worried', 'worthless', 'wrathful', 'yearning', 'zesty'];


// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

SC.initialize({
  client_id: '53e1b5c5885286f94a2f2dbe52932379',
  redirect_uri: 'https://c9.io/jasondecastro/soundcloud/workspace/index.html'
});

SC.connect(function () {
  SC.get('/me', function (me) {
    $('#hello').html('Hello, ' + me.username);
  });
});


// ===========================
//
//        Play a song
//
// ===========================

// The song that is currently playing
var currentSong;

//
// # 'Go' button click handler
//
// Get the user's mood and play a song that matches that mood.
// (Optional: change the color of the jumbotron)
//
$('#go').on('click', function () {
  var mood = $('#mood').val();
  updateJumboTron(mood);
  searchTracks(mood);
});

//
// # Search soundcloud tracks
//
// Search soundcloud using the Soundcloud API for a song that
// matches the user's mood.
//
// * **mood**, the user's mood.
//
function searchTracks (mood) {
  SC.get('/tracks', { q: mood }, function (tracks) {
    var songs = tracks;
    var randomSongNumber = Math.floor(Math.random() * (songs.length - 1));
    var song = songs[randomSongNumber];
    playTrack(song.id);
    $('#songtitle').html(song.user.username + '' + song.title);
  });
}

//
// # Play a track
//
// Play a Soundcloud track. If there is already a song playing,
// stop that song first.
//
// * **trackid**, the ID of the track to play.
//
function playTrack (trackid) {
  if(currentSong){
    currentSong.stop();
  }
  SC.stream('/tracks/' + trackid, function (sound) {
    currentSong = sound;
    currentSong.play();
  });
}

//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
// (Optional: change the jumbotron's color)
//
// * **mood**, the user's mood
//
function updateJumboTron (mood) {
  $('#moodstatus').html('It sounds like you are in a ' + mood +  ' mood!!');
  changeColor(getColor(mood));
}


// =======================
//
//      Randomization
//
// =======================

//
// # 'Random' button click handler
//
// Pick a mood at random from moodList and find a track for that mood.
//
$('#random').on('click', function () {
  var mood = randomMood();
  updateJumboTron(mood);
  searchTracks(mood);
});

//
// # Random Mood
//
// Returns a random mood from moodList
//
function randomMood () {
  var randomNumber = Math.floor(Math.random() * (moodList.length - 1));
  return moodList[randomNumber];
}



// ========================
//
//     BONUS CHALLENGES
//
// ========================

//
// 1. Change the color of the jumbotron to fit the given mood.
//
// 2. Add a typeahead to the input field that shows the moods in our mood array.
//

//
// 1. Change color
//
// Add to updateJumbotron: changeColor(getColor(mood));
//

// Map a few of our moods to 'happy' or 'sad'
var moodMap = {
  'happy': 'happy',
  'joy': 'happy',
  'excited': 'happy',
  'sweet': 'happy',
  'sad': 'sad',
  'worried': 'sad',
  'scared': 'sad',
  'afraid': 'sad'
};

// Map 'happy' and 'sad' to some colors
var colorMap = {
  'happy': ['ffff33', 'cc3333', '33ff33', '3366cc'],
  'sad': ['330000', '000033', '003300']
};

//
// # Change the color of the jumbotron
//
// * **color**, the color to change to
//
function changeColor (color) {
  $('.jumbotron').css('background-color', color);
}

//
// # Get the mood color
//
// If our moodmap contains the given mood, return the right color.
// Otherwise, return a random color.
//
// * **mood**, the user's mood
//
function getColor (mood) {
  var color = '';
  if (moodMap[mood]) {
    var feeling = moodMap[mood];
    var listLength = colorMap[feeling].length;
    var randomNumber = Math.floor(Math.random() * (listLength - 1));
    return '#' + colorMap[feeling][randomNumber];
  } else {
    return randomColor();
  }
}

//
// # Generate a random color
//
// Returns a random color hex code.
//
function randomColor () {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//
// 2. Typeahead
//

//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
// Add a typeahead to the mood input field using the moodList as a source.
//
$(document).ready(function () {
  $('#mood').typeahead({ source: moodList });
});
