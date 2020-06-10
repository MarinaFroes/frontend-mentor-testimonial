const text = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    imageUrl: "./images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    imageUrl: "./images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
  }
];

(function showTestimonial(text) {
  let counter = 0;
  const testimonialContainer = document.getElementById('testimonial');
  testimonialContainer.className = "testimonial-container";
  
  const textContainer = document.createElement("div");

  const userInfo = document.createElement("d");
  userInfo.className = "user-info";

  const userName = document.createElement("p");
  userName.className = "name";
  userName.innerText = text[counter].name;

  const testimonialText = document.createElement("p");
  testimonialText.className = "text";
  testimonialText.innerText = text[counter].text;

  const userRole = document.createElement("p");
  userRole.className = "role";
  userRole.innerText = text[counter].role;

  const userImage = document.createElement("img");
  userImage.className = "user-image";
  userImage.src = text[counter].imageUrl;

  userInfo.append(userName);
  userInfo.append(userRole);

  textContainer.append(testimonialText);
  textContainer.append(userInfo);

  testimonialContainer.append(textContainer);
  testimonialContainer.append(userImage);
})(text);
