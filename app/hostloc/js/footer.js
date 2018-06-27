document.oncontextmenu = function () { return false; };
document.onkeydown = function () { return false; };
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?89e91cf5ab9f3fcb7abf3db550288b2c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var maxUserId = 26666;
div = document.createElement("div");
div.id = "app";
document.body.appendChild(div);
document.getElementById("app").ondblclick = function () {
    window.open("http://www.hostloc.com/");
};
setTimeout(function () {
    addContent(22333);
}, 0);
for (var i = 0; i < 18; i++) {
    setTimeout(function () {
        addContent(Math.ceil(Math.random() * maxUserId));
    }, i * 100 + 500);
}
setTimeout(function () {
    document.getElementsByTagName("h1")[0].innerHTML = "刷分完毕";
}, 2000);
function addContent(userId) {
    img = document.createElement("img");
    img.src = "//www.hostloc.com/space-uid-" + userId + ".html";
    document.body.appendChild(img);
}

