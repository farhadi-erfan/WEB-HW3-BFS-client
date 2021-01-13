import f1 from './m';
import Parse from 'parse';

console.log('start');
f1();

Parse.initialize("myAppId");

Parse.serverURL = 'http://localhost:1337/parse';

async function start() {
    try {
        const post = new Parse.Object("Post");
        post.set("title", "خوش درخشید ولی..");
        await post.save()
    } catch(e) {
        console.log('error >> ', e);
    }
}

start();
