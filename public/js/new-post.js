// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
  
    // Get references to the body, title, form and author
    const postForm = document.getElementById('postForm');
    const name = document.getElementById('name');
    const caption = document.getElementById('caption');
    const favoriteBook = document.getElementById('favoriteBook');
    const clubName = document.getElementById('clubName');
    const postTitle = document.getElementById('postTitle');
    const postBody = document.getElementById('postBody');
    const submitBtn = document.getElementById('submitBtn');

    // Create a post


  // Event handler for when the post for is submitted
  const handleFormSubmit = (event) => {
    // event.preventDefault();
    console.log("submit btn pressed...")
    console.log(name.value + caption.value + favoriteBook.values + clubName.value + postTitle.value + postBody.value)

    // Make sure the form isn't empty
    if (
      !name.value.trim() ||
      !caption.value.trim() ||
      !favoriteBook.value.trim() ||
      !clubName.value.trim() ||
      !postTitle.value.trim() ||
      !postBody.value.trim()
    ) {
        console.log("not submitted, empty form boxes");
      return;
    }

    // Objects that will be sent to the db

    const newUser = {
        name: name.value.trim(),
        caption: caption.value.trim(),
        favoriteBook: favoriteBook.value.trim(),
        clubName: clubName.value.trim(),
    }
    
    const newPost = {
        postTitle: postTitle.value.trim(),
        postBody: postBody.value.trim()
    };

    // // Update a post if flag is true, otherwise submit a new one
    // if (updating) {
    //   newPost.id = postId;
    //   updatePost(newPost);
    // } else {
    
    submitUser(newUser)
    submitPost(newPost);
    };

    // Submits new user
    const submitUser = (post) => {
    fetch('/api/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
        .catch((err) => console.error(err));
    };

    // Submits new post then redirects to posts
    const submitPost = (post) => {
        fetch('/api/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
            .then(() => {
            window.location.href = '/posts';
            })
            .catch((err) => console.error(err));
        };

    // Get query parameter
    const url = window.location.search;
    let postId;
    // let authorId;
    let nameId; 
    let updating = false;
  
    // Get post data for editing/adding
    const getPostData = (id, type) => {
      const queryUrl =
        type === 'post' ? `/api/posts/${id}` : `/api/authors/${id}`;
  
      fetch(queryUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log('Success in getting post:', data);
  
            // Populate the form for editing
            titleInput.value = data.title;
            bodyInput.value = data.body;
            authorId = data.AuthorId || data.id;
  
            // We are updating
            updating = true;
          }
        })
        .catch((err) => console.error(err));
    };

  
    
  
    
  

    // Handle submit button press
    submitBtn.addEventListener('click', function (){
        console.log("submit button pressed");
        handleFormSubmit();
    

    });

});
    // submitBtn.addEventListener('click', handleFormSubmit);


//     // Update a post then redirect to blog
//     const updatePost = (post) => {
//       fetch('/api/posts', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//       })
//         .then(() => {
//           window.location.href = '/blog';
//         })
//         .catch((err) => console.error(err));
//     };

