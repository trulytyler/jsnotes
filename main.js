
//lesson tabs

function openLesson(lessontypeName) {
  var i;
  var x = document.getElementsByClassName("lessontype");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(lessontypeName).style.display = "block";  
}


//create a note
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//local storage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "delete_outline.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})


//delete a note

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();

}
else if(e.target.tagName === "P"){
  notes = document.querySelectorAll(".input-box");
  notes.forEach(nt => {
    nt.onkeyup = function(){
          updateStorage();
    }

  })
}
    
})


document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})



document.getElementById('clear-storage-btn').addEventListener('click', function () {
            if (confirm('Are you sure you want to clear local storage? This action cannot be undone.')) {
                localStorage.clear();
                alert('Local storage has been successfully cleared!');
            } else {
                alert('Action canceled. Local storage remains intact.');
            }
        });

document.addEventListener('paste', function(event) {
//  document.execCommand("insertText");
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the text from the clipboard
    navigator.clipboard.readText().then(text => {
        // Insert the unformatted text into the target element
        const target = document.getElementById(".input-box");
      //target.value += text; // For input or textarea elements
     target.innerText += text; // For other elements like div or p
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
});
