const closeModal = document.getElementById("close_modal");
const createNewBlueprint = document.getElementById("create_new_blueprint");
const toggle = document.getElementById("toggle");
const bluePrintOpen = document.getElementById("blueprint_checked");
const modal = document.getElementById("my_modal");
const serverTypeSelected = document.querySelectorAll(".server_type_selected");
const blueprintName = document.querySelectorAll(".blueprint_name");
const mainTag = document.getElementsByTagName("main");
const footerTag = document.getElementsByTagName("footer");

// handle home page blueprint toggle switch button
toggle.addEventListener("change", (event) => {
  if (event.target.checked) {
    bluePrintOpen.classList.remove("hidden");
  } else {
    bluePrintOpen.classList.add("hidden");
  }
});

// home page: handle server type selected
serverTypeSelected.forEach((item) => {
  item.addEventListener("click", () => {
    serverTypeSelected.forEach((el) =>
      el.classList.remove("!border-[#147AFF]")
    );
    item.classList.add("!border-[#147AFF]");
  });
});

// home page: handle blueprint name selected
blueprintName.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.checked);
    blueprintName.forEach((el) => el.classList.remove("border-[#147AFF]"));

    item.classList.add("border-[#147AFF]");
  });
});

// open modal
createNewBlueprint.addEventListener("click", () => {
  modal.classList.remove("hidden");
  mainTag[0].classList.add("hidden");
  footerTag[0].classList.add("hidden");
});

// close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  mainTag[0].classList.remove("hidden");
  footerTag[0].classList.remove("hidden");
});
