var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].href = '#';
    links[i].onclick = function() {
        return false;
    };
}
