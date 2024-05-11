const slider = document.getElementById('loveRange');
const loveValue = document.getElementById('loveValue');
const loveMessage = document.getElementById('loveMessage');

slider.oninput = function() {
    loveValue.innerHTML = this.value;
    
    if (this.value < 20) {
        loveMessage.innerHTML = "Are you okay, babe? I'm here if you need to talk 💔";
    } else if (this.value < 40) {
        loveMessage.innerHTML = "I feel the love, but let's make it stronger! 💕";
    } else if (this.value < 60) {
        loveMessage.innerHTML = "Halfway to total love! You're my heart! 💖";
    } else if (this.value < 80) {
        loveMessage.innerHTML = "So much love! You make every day amazing 😍";
    } else {
        loveMessage.innerHTML = "Wow, you love me this much? I'm the luckiest! 🥰";
    }
}
