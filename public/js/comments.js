//to handle new comments by the users

const commentFormHandler = async function (event){
    event.preventDefault();

    //will get the blog id which is being commented on
    const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

    //will get the text that user has input in comment description field
    const comment_description = document.querySelector('#comment_description').value.trim();

    //condition, if there is a comment, POST request will be send to the API routes and it will be posted to the page and page will be reloaded
    if(comment_description){
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id, 
                comment_description,
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};


document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);