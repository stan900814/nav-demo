var key = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
];
var hash = {
    "q": "qq.com",
    "w": "weibo.com",
    "e": "ele.me",
    "r": "renren.com",
    "t": "tianya.com",
    "y": "youku.com",
    "u": "",
    "i": "",
    "o": "",
    "p": "",
};
var index = 0,
    div, kbd,
    keybord;
keybord = document.getElementById("keybord");
while (index < key.length) {
    div = document.createElement("div");
    keybord.appendChild(div);
    row = 0;
    while (row < key[index].length) {
        kbd             = document.createElement("kbd");
        kbd.textContent = key[index][row];
        div.appendChild(kbd);
        row++;
    }
    index++;
}
document.onkeypress = function (e) {
    key     = e['key'];
    website = hash[key];
    // this.location.href = "http://" + website;
    window.open('http://' + website, '_blank');
}