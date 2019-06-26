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
var localStoragehash = JSON.parse(localStorage.getItem('xxx') || '')
if (localStoragehash) {
    hash = localStoragehash;
}
var index = 0,
    div, kbd,
    keybord;
keybord = document.getElementById("keybord");
while (index < key.length) {
    div = document.createElement("div");
    keybord.appendChild(div);
    row = 0;
    while (row < key[index].length) {
        kbd              = document.createElement("kbd");
        kbd.textContent  = key[index][row];
        edit             = document.createElement('button');
        edit.textContent = "编辑";
        edit.id          = key[index][row];
        kbd.appendChild(edit);
        div.appendChild(kbd);
        row++;
        edit.onclick = function (e) {
                 key  = e.target.id;
                 x    = prompt("请输入一个网址");
            hash[key] = x;
            localStorage.setItem('xxx', JSON.stringify(hash))
            console.log(hash);
        }

    }
    index++;
}
document.onkeypress = function (e) {
    key     = e['key'];
    website = hash[key];
    // this.location.href = "http://" + website;
    window.open('http://' + website, '_blank');
}