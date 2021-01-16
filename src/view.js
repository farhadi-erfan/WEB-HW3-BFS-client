import Parse from 'parse'

async function viewAllPosts(i) {
    try {
        var query = new Parse.Query('Post');
        query.limit(30 * (i + 1));
        query.descending('publish_date');
        query.include('user');
        return await query.find();
    } catch(e) {
        console.log('error >> ', e);
    }
}

async function viewMyPosts(i) {
    try {
        var query = new Parse.Query('Post');
        query.equalTo('user', Parse.User.current().id);
        query.limit(30 * (i + 1));
        query.descending('publish_date');
        query.include('user');
        return await query.find();
    } catch(e) {
        console.log('error >> ', e);
    }
}

async function viewthisPost(id) {
    try {
        var query = new Parse.Query('Post');
        query.equalTo('id', id);
        query.include('user');
        return await query.find();
    } catch(e) {
        console.log('error >> ', e);
    }
}

export { viewAllPosts, viewMyPosts, viewthisPost }