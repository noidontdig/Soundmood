Soundmood
=========

ScriptEd Year 2 Curriculum project - Using the Souncloud API

### Project description

* **Search**: Simply type in the mood you are currently in and a song will be generated based on that mood
* **Hear**: We grab all of our songs directly from Soundcloud, so there are millions of selections.
* **Explore**: Using Soundmood, you can find hundreds of songs based on unique mood
* **Quantity &amp; Quality**: Soundmood has a selection of many different emotions/mood, so good luck entering one that doesn't exist.


#Assignment


####Make Soundmood work! You will need to do the following:

###1) Play a track

Play a track using the Soundcloud API (Reading the Soundcloud documentation will help you figure out how to play a track)

1. Read the Soundcloud documentation to figure out how to **stream** (or play) a track
```
HTTP API GUIDE -> Playing Sounds ->  Streaming sounds
```
2. Use `SC.stream` to play a track
  * Hint: you need to know something about the track
3. Fill out the `playOneTrack()` function
  * Hint: don’t forget to add `playOneTrack()` to `document.ready()`

###2) Add click handlers

Add a click handler for the `#go` button -- make the `#go` button DO something by adding a click handler!

* Hint: you can use Javascript or jQuery for this
* Hint: call the click handler `playOneTrack()` to play a song when you click the button

###3) Find a track based on the user's mood and play it

Find a track based on the user’s mood and play it -- make the click handler play a song based on the user's input!

1. **Fill out the `goClicked()` function! It should:**
  1. Get the user's input from the `#mood` field
  2. Call `searchTracks(mood)`.
    * Hint: there are helper methods in `script.js` that you can use!
2. **Fill out `searchTracks(mood)`**
  1. Read API documentation to find `SC.get`
  2. Fill out `searchTracks()` to find the track for the user's mood using `SC.get`
  4. Make sure to `console.log()` the response from the API so you can see what it returned!
  3. Get the track's `id`
  4. Call `playTrack(id)`
  5. BONUS: Update jumbotron `#songtitle` to display the song title
3. **Fill out `playTrack()`**
  1. Make sure to keep track of the song you are playing by storing it in `currentSong`
  2. Play the track for the given `id`
    * Hint: look at `playOneTrack()` for help

###4) Randomization: Make the random button work!

1. Fill out the `moodList` array with 10 moods/emotions
  * ex. 'happy', 'sad'
2. Add `#random` button click handler
3. Fill out `randomClicked()` + `randomMood()`


###5) Bonus Challenges:

1. Change the color of the jumbotron to match the user's mood!
2. Add Bootstrap typeahead to the `#mood` input field
3. Find more fun stuff to do with the Soundcloud API!
