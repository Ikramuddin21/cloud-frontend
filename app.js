const createNewBlueprint = document.getElementById("create_new_blueprint");
const modal = document.getElementById("my_modal");
const mainTag = document.getElementsByTagName("main");

// open modal
createNewBlueprint.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
mainTag[0].classList.add("hidden");

// close modal
/* closeModalButton.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}); */
