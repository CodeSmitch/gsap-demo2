document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  gsap.to(".box", {
    rotation: 135,
    x: 100,
    duration: 0.5,
    width: 100,
    height: 100,
    borderRadius: "50%",
  });
  gsap.to("#b1", { backgroundColor: "pink", duration: 5 });
  gsap.to("#b2", { y: 500 });
});
