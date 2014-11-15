// ==========================
//
//         Soundmood
//
// ==========================

// List of moods
var moodList = [];


// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

SC.initialize({
  client_id: '5aa8e389ba4e24b6106af5159ab3e344'
});


// ===========================
//
//        Document ready
//
// ===========================
//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
$(document).ready(function () {
  // Add click handlers to 'go' and 'random' buttons here.
});


// ===========================
//
//        Play a song
//
// ===========================
//
// # Play a track
//
// Play a track using the Souncdloud Javascript SDK
//
function playOneTrack () {
  // TODO: fill this out
}


// ======================================
//
//    Play a song for the user's mood
//
// ======================================

// The song that is currently playing
var currentSong;

//
// # 'Go' button click handler
//
// 1. Get the user's mood from the form
// 2. Search Souncloud for a song for the mood
// 3. Update jumbotron #moodstatus to dipsplay the mood
//
function goClicked () {
  // TODO: fill this out
}

//
// # Search soundcloud tracks
//
// 1. Search soundcloud using the Soundcloud API to find a song that
// matches the user's mood.
// 2. Play the song
// 3. Update jumbotron #songtitle to display the song title
//
// * **mood**, the user's mood.
//
function searchTracks (mood) {
  // TODO: fill this out
}

//
// # Play a track
//
// Play a Soundcloud track.
// If there is already a song playing, stop that song first.
//
// Use 'currentSong' to keep track of the song that is playing.
//
// * **trackid**, the ID of the track to play.
//
function playTrack (trackid) {
  // TODO: fill this out
}

//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
//
// * **mood**, the user's mood
//
function updateJumboTron (mood) {
  $('#moodstatus').text('It sounds like you are in a ' + mood +  ' mood!!');
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
function randomClicked () {
  // TODO: fill this out
}

//
// # Random Mood
//
// Returns a random mood from moodList.
//
function randomMood () {
  // TODO: fill this out
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
// Update the background-color of the jumbotron using jQuery
//
// * **color**, the color to change to
//
function changeColor (color) {
  // TODO: fill this out
}

//
// # Get the mood color
//
// If our moodmap contains the given mood, return the right color.
// Otherwise, return a random color.
//
// * **mood**, the user's mood
//
// * returns a color
//
function getColor (mood) {
  // TODO: fill this out
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
// Add a typeahead to the mood input field using the moodList as a source.
//
