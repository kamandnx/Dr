function loadusers() {
    var xhr = new XMLHttpRequest();
    xhr.open('Get', 'json/person.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var User = JSON.parse(this.responseText);

            var output = '';
            for(i in User)
            output += '<div id="person-p" class="row m-md-3 m-sm-3 m-lg-3" >'
            + '<img id="img-p" src=' + User[i].imgUrl +  '>'
            + '<h4 id="H-person" >' + User[i].name + '</h4>'
            +'</div>';
            
        }
        document.getElementById('users').innerHTML = output;

    }
    xhr.send();
}
loadusers();