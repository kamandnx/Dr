function loadusers() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('Get', 'json/per.json', true);

    xhr1.onload = function () {
        if (this.status == 200) {
            var User1= JSON.parse(this.responseText);

            var output = '';
            for(i in User1)
            output += '<div id="person-p" class="row " >'
            + '<img id="img-p" src=' + User1[i].imgUrl +  '>'
            + '<h4 id="H-person" >' + User1[i].name + '</h4>'
            +'</div>';
            
        }
        document.getElementById('user-m').innerHTML = output;

    }
    xhr1.send();
}
loadusers();