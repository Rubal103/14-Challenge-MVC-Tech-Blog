//to handle creation of new blog
const newFormHandler = async (event) => {

event.preventDefault();

//will get the new blog title provided by the user
const title = document.querySelector('#blog-title').value.trim();

//will get the description of the new blog created by the user
const description = document.querySelector('#blog-desc').value.trim();


//if there is a title an description, POST request will be sent to the API route and user will be taken to the dashboard where they can see the new blog. 
if(title && description){

  const response = await fetch(`/api/blogs`, {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: {
      'content-Type' : 'application/json',
    },
});

  if(response.ok){
    document.location.replace('/dashboard');

  } else {
    alert ('Failed to create blog');
  }
}
};


//to delete the their blog, when user is logged in 
const delButtonHandler = async (event) =>{
  if(event.target.hasAttribute('data-id')){
    const id = event.target.getAttribute('data-id');

    const response = await fetch (`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok){
      document.location.replace('/dashboard');
    } else{
      alert('Failed to delete blog');
    }


  }
};

document.querySelector('.new-blog-form')
.addEventListener('submit', newFormHandler);

document.querySelector('.blog-list')
.addEventListener('click', delButtonHandler);







































//  // Get all the data from the user inputs
//  async function doupload(event) {
//   event.preventDefault();
//   const phone = document.querySelector("#phoneNumber").value.trim();
//   const emergencyName = document.querySelector("#emergencyName").value.trim();
//   const emergencyPhone = document.querySelector("#emergencyPhone").value.trim();
//   // Pulling from id=userId in profile.handlebars
//   const userId = document.querySelector("#userId").value;
//   const fileInput = document.querySelector("#files");
//   const formData = new FormData();
  // Checking to see if user gave us a profile picture
//   if (fileInput.files.length > 0) {
//     const fileName = fileInput.files[0].name;
//     const fileExtension = fileName.split(".").pop().toLowerCase();
//     const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"]; // Array of allowed file forms for profile pictures
//     if (allowedExtensions.indexOf(fileExtension) === -1) {
//       alert("Please upload a valid image file.");
//       return; // If the user does not provide a good extension then they cannot upload a profile picture and return a custom message
//     }
//     // Append user information and profile picture
//     formData.append("picture", fileInput.files[0]);
//   }
//   if (phone) formData.append("phoneNumber", phone);
//   if (emergencyName) formData.append("emergencyName", emergencyName);
//   if (emergencyPhone) formData.append("emergencyNumber", emergencyPhone);
//   for (const value of formData.entries()) {
//     console.log(value);
//   }
//   const response = await fetch(`/api/users/${userId}`, {
//     method: "PATCH", // Instead of PUT for partial field input
//     body: formData,
//   });
//   if (response.ok) {
//     document.location.reload(); // Profile picture will reload for the user
//   } else {
//     alert("User could not be updated." + response.statusText); // Send alert to user that their information could not be updated
//   }
// }
// document.querySelector("#form").addEventListener("submit", doupload); 

// function doFileupload() {
   
//   alert('your file has been uploaded');
//   location.reload();
// }