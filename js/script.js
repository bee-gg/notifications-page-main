console.log('I am linked')

const notificationBox = document.querySelectorAll(".box")
const markAllButton = document.querySelector("#markallbutton")
const notificationCount = document.querySelector("#notificationcount")

notificationBox.forEach(function(element){

  element.addEventListener('click', function(){
    element.classList.toggle('unread');
    updateNotificationCount()
  })
});

markAllButton.addEventListener('click', function(){
  document.querySelectorAll('.unread').forEach((notification) => {
    notification.classList.remove('unread');
    updateNotificationCount();
  })
})

const updateNotificationCount = () => {
   notificationCount.innerHTML = document.querySelectorAll('.unread').length;
}

updateNotificationCount();

/*const readButton = document.querySelector(".mark-read")
const posts = document.querySelectorAll(".post-wrapper")
const notificationCount = document.querySelector(".notification-count")

readButton.addEventListener("click", function () {
  document.querySelectorAll(".unread").forEach((post) => {
    post.classList.remove("unread")
    setNotificationCount()
  })
})

posts.forEach((post) => {
  post.addEventListener("click", function () {
    post.classList.toggle("unread")
    setNotificationCount()
  })
})

function setNotificationCount() {
  const unreadPosts = document.querySelectorAll(".unread")
  notificationCount.innerHTML = unreadPosts.length
}*/