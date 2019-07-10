// ---------------- Verable ----------------
const theApp = document.querySelector('#the_app')
const graveYard = document.querySelector(".graveyard");
const modal = document.getElementById("myModal");
const showStory = document.getElementById("showModal")
const storyclose = showStory.querySelector('.close')
const showForm = document.querySelector(".js-btn");
const welcomeForm = document.querySelector('.the_form');
const span = document.querySelector("#newStoryClose");
const newStoryForm = document.querySelector('#newStoryForm')
const likeBtn = document.querySelector(".like-btn")
const searchForm = document.querySelector("#search")
const storyTag = document.querySelector("#storyTag")
const commentForm = document.querySelector("#commentform")
const deleteBtn = document.querySelector("#deleteBtn")
const data = ApiAdapter.fetchStories()
const welcome = new Welcome
const newStory = new NewStoryModal
const oneStory = new ShowStoryModal


// ---------------- EVENT LISTENERS ----------------
document.addEventListener("DOMContentLoaded", () => {
  showForm.addEventListener("click", newStory.displayModal)
  welcomeForm.addEventListener("submit", welcome.secondStage)
  newStoryForm.addEventListener("submit", newStory.newStoryInfo)
  commentForm.addEventListener("submit", oneStory.newComment)
  likeBtn.addEventListener("click", oneStory.likeStory)
  deleteBtn.addEventListener("click", ApiAdapter.deleteStory)
})
