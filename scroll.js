window.addEventListener("wheel", (e) => {
  e.preventDefault();
  
  document.documentElement.scrollLeft += e.deltaY;
  document.body.scrollLeft += e.deltaY; //for older browsers
},
{ passive: false });