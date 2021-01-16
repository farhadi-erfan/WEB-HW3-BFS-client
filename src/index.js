import Parse from 'parse';
import { logIn, signUp } from './authentication';
import { post } from './post'

console.log('start');

Parse.initialize("myAppId");

Parse.serverURL = 'http://localhost:1337/parse';

var input = document.createElement("INPUT");
input.setAttribute("type", "file");
input.onchange = e => {
    // const fileUploadControl = $("#profilePhotoFileUpload")[0];
    if (input.files.length > 0) {
    const file = input.files[0];
    const name = "photo.jpg";

    const parseFile = new Parse.File(name, file);
    post(title, text, parseFile);
    }
};
document.body.appendChild(input);

var live = async () => {
    const query = new Parse.Query('Post');
    query.equalTo('is_published', true);
    const subscription = await query.subscribe();
    console.log('subscribed successfully');
    subscription.on('create', (post) => {
        console.log('Post >>>', post.get('title'));
    });
    return subscription;
};

var username = prompt("enter username", "erfan");
var password = prompt("enter password", "admin");
logIn(username, password);
var user = Parse.User.current();
if (user) {
    // live();
    var title = prompt("enter title", "title2");
    var text = prompt("enter text", "text2");
    // var content, name = image();
} else {
    logIn(username, password);
}

