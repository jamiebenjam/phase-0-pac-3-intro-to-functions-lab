function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    var allLowercase = "I can't hear you!"
    var allUppercase = "YES INDEED!"
    var dinnerTogether = "I would love to!"
    
    if (string.toLowerCase() === string) {
        return allLowercase;
    }
    else if (string.toUpperCase() === string) {
        return allUppercase;
    }
    else if ("Let's have dinner together!") {
        return dinnerTogether;
    }
}


