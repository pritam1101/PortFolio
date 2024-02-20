var typed = new Typed(".auto-type",{
    strings: ["Web Technologies", "DSA with Java..", " C and C++..",
               "Reactjs..", "Nodejs..", "DBMS(Sql & MongoDB)", "Computer Networking", "Flutter.."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

  function scrollleft() {
    document.getElementById("scrolling-text").style.left = '100%';
    setTimeout(scrollleft, 25);
  }
   scrollleft();