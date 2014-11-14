var listOfEmotions = ["sad", "afraid", "abandoned", "acceptance", "adoration", "affection", "aggravated", "agitated", "aggressive", "alert", "amazed", "ambitious", "amused", "anger", "animosity", "annoyed", "anticipation", "anxiousness", "appreciative", "apprehensive", "ardent", "aroused", "ashamed", "astonished", "attraction", "awed", "betrayed", "bewildered", "bitter", "bliss", "blue", "boastful", "bored", "breathless", "bubbly", "calamitous", "calm", "camaraderie", "cautious", "cheerful", "cocky", "cold", "collected", "comfortable", "compassionate", "concerned", "confident", "confused", "contempt", "content", "courageous", "cowardly", "crafty", "cranky", "crazy", "cruelty", "crummy", "crushed", "curious", "cynic", "dark", "dejected", "delighted", "delirious", "denial", "depression", "desire poem", "despair", "determined", "devastated", "disappointed", "discouraged", "disgust", "disheartened", "dismal", "dispirited", "distracted", "distressed", "dopey", "down", "dreadful", "dreary", "eager", "ecstatic", "embarrassed", "emotional-detest", "empathic", "emptiness", "enchanted", "enigmatic", "enlightened", "enraged", "enthralled", "enthusiastic", "envy", "euphoric", "excited", "exhausted", "expectation", "exuberance", "fascinated", "fear", "flabbergasted", "fight-or-flight", "foolish", "frazzled", "frustrated", "fulfillment", "furious", "giddy", "gleeful", "gloomy", "goofy", "grateful", "gratified", "greedy", "grouchy", "grudging", "guilty", "happy", "hate", "heartbroken", "homesick", "hopeful", "hopeless", "horrified", "hostile", "humiliated", "humored", "hurt", "hyper", "hysterical", "indignation", "infatuation", "infuriated", "inner peace", "innocent", "insanity", "insecure", "insecure", "inspired poem", "interest", "intimidated", "invidious", "irate", "irritability", "irritated", "jaded", "jealousy", "joy", "jubilant", "kind", "lazy", "left out", "liberated", "lively", "loathsome", "lonely", "longing", "love", "lovesick", "loyal", "lust", "mad", "mean", "melancholic", "mellow", "mercy", "merry", "mildness", "miserable", "morbid", "mourning", "needed", "needy", "nervous", "obscene", "obsessed", "offended", "optimistic", "outraged", "overwhelmed", "pacified", "pain", "panicky", "paranoia", "passion", "pathetic", "peaceful", "perturbation", "pessimistic", "petrified", "pity", "playful", "pleased", "pleasure", "possessive", "pride", "provoked", "proud", "puzzled", "rage", "regretful", "relief", "remorse", "resentment", "resignation", "resolved", "sadness", "satisfied", "scared", "Schadenfreude", "scorn", "selfish", "sensual", "sensitive", "sexy", "shame", "sheepish", "shocked", "shy", "sincerity", "solemn", "somber", "sorrow", "sorry", "spirited", "stressed", "strong", "submissive", "superior", "surprised", "sweet", "sympathetic", "temperamental", "tense", "terrified", "threatened", "thrilled", "tired", "tranquil", "troubled", "trust", "tormented", "uncertainty", "uneasiness", "unhappy", "upset", "vengeful", "vicious", "warm", "weary", "worn-out", "worried", "worthless", "wrathful", "yearning", "zesty"]
var moodMap = {
    "happy": "happy",
    "joy": "happy",
    "excited": "happy",
    "sweet": "happy",
    "sad": "sad",
    "worried": "sad",
    "scared": "sad",
    "afraid": "sad"
}

var colorMap = {
    "happy": ["ffff33", "cc3333", "33ff33", "3366cc"],
    "sad": ["330000", "000033", "003300"]
}

function getColor(word) {
    if (moodMap[word]) {
        var feeling = moodMap[word];

        var listLength = colorMap[feeling].length;
        var randomNumber = Math.floor(Math.random() * (listLength - 1));
        return "#" + colorMap[feeling][randomNumber];
    } else {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
}

function giveMeRandomWord() {
    var listLength = listOfEmotions.length;
    var randomNumber = Math.floor(Math.random() * (listLength - 1));
    return listOfEmotions[randomNumber];
}

// search flickr for an image by a keyword, and update the image on the website
function search_flickr(word) {
    // build the url to search for flickr images tagged with the word (mood)
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + word + "&api_key=18b47bea4ecf73fd7b7b2e4936f49b4d&format=json";
    
    // send a request to the flickr API for their pictures tagged with the word (mood)
    $.getJSON(url, function (data) {
        // JQuery is acting strangely and failing, so the success function is never called
    }).fail(function (returnObj) {
        
        // the failed response actually has the data we want.... weird
        // but we have to extract it...and convert it to valid JSON
        returnObj = returnObj.responseText;
        returnObj = returnObj.replace("jsonFlickrApi(", ""); // get rid of 'jsonFlickrApi('
        returnObj = returnObj.substring(0, returnObj.length - 1); // get rid of ')' at end

        returnObj = JSON.parse(returnObj); // translate the JSON string into a JavaScript object

        // the pictures are an array at returnObj.photos.photo
        var array = returnObj.photos.photo;
        
        // pick 1 picture element randomly from this array
        var listLength = array.length;
        var randomNumber = Math.floor(Math.random() * (listLength - 1));
        var randPic = array[randomNumber];
        
        // build the url of the picture from the data on the randPic object
        var pictureUrl = "http://farm"+ randPic.farm +".staticflickr.com/"+ randPic.server +"/"+ randPic.id+"_"+ randPic.secret +".jpg";
    
        // select the image html element and set the src of the image to the new url 
        document.getElementById("pic").src = pictureUrl;
    });
}