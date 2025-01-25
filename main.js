function openLesson(lessontypeName) {
  var i;
  var x = document.getElementsByClassName("lessontype");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(lessontypeName).style.display = "block";  
}


