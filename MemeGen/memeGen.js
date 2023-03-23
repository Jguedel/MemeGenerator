let memeForm = document.querySelector("form");
let memeHolder = document.querySelector(".memeHolder");

//HANDLE INPUT SUMBITION
memeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let memeImg = document.querySelector(".memeImg").value;
  //WHEN INPUT FIELD IS LEFT BLACK INPUT == ''
  let topText = document.querySelector(".topText").value;
  let bottomText = document.querySelector(".bottomText").value;
  createMeme(memeImg, topText, bottomText);
  //EMPTY INPUT FIELDS
  document.querySelector(".memeImg").value = "";
  document.querySelector(".topText").value = "";
  document.querySelector(".bottomText").value = "";
});

//DELETE MEME
memeHolder.addEventListener("click", function (e) {
  //IF TARGET ID IS DEL REMOVE PARENT ELEMENT
  if (e.target.id == "del") {
    e.target.parentElement.remove();
  }
});

//CREATE A MEME
function createMeme(img, topInp, bottomInp) {
  //SELECT REFRESHED MEME HOLDER
  memeHolder = document.querySelector(".memeHolder");
  //CREAT MEME DIV
  let meme = document.createElement("div");
  meme.classList.add("meme");
  meme.style.backgroundImage = `url(${img})`;
  //CREAT TOP TEXT
  let topText = document.createElement("p");
  topText.innerText = topInp;
  meme.append(topText);
  //CREAT BOTTOM TEXT
  let bottomText = document.createElement("p");
  bottomText.innerText = bottomInp;
  meme.append(bottomText);
  //CREATE DELETE BUTTON ON HOVER
  let del = document.createElement("div");
  del.innerText = "Delete";
  del.id = "del";
  //SPACE HOVER CORRECTLY IF TEXT IS THERE OR NOT
  if (topInp.length > 0 && bottomInp.length > 0) {
    del.classList.add("allText");
  } else if (topInp.length > 0) {
    del.classList.add("oneText");
  } else if (bottomInp.length > 0) {
    del.classList.add("oneText");
  } else {
    del.classList.add("noText");
  }
  meme.append(del);
  //ADD MEME TO MEME HOLDER
  memeHolder.append(meme);
}
