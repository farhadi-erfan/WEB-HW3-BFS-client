import Parse from 'parse'
import viewthisPost from './view'

async function post(title, text, imageInputDOM) {
    try {
        const post = new Parse.Object("Post");
        post.set("title", title);
        post.set("text", text);
        post.set("user", Parse.User.current());

        if (input.files.length > 0) {
            const file = input.files[0];
            const name = file.name;
            const parseFile = new Parse.File(name, file);
            post.set("image", parseFile);
        }

        await post.save()
    } catch(e) {
        console.log('error >> ', e);
    }
}

async function edit(id, title, text, imageInputDOM) {
    try {
        const post = viewthisPost(id);
        post.set("title", title);
        post.set("text", text);
        post.set("user", Parse.User.current());

        if (input.files.length > 0) {
            const file = input.files[0];
            const name = file.name;
            const parseFile = new Parse.File(name, file);
            post.set("image", parseFile);
        }

        await post.save()
    } catch(e) {
        console.log('error >> ', e);
    }
}

export { post, edit };