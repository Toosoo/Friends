

let tl = gsap.timeline()
tl.from(".hero-text h1",{
y:"30px",
opacity:0,
duration:2,
ease:"power4.inOut",
delay:1
})
  .to(".flower",{
  rotate:360,
  duration:4,
  ease:"linear",
  repeat:-1
  },"<")
  .from(".hero-text p",{
  y:"-30px",
  opacity:0,
  duration:2,
  ease:"power4.inOut"
  },"<")

  .to(".white-overlay",{
  y:"100%",
  duration:2,
  ease:"power4.inOut",
})

  .to(".black-overlay",{
  y:"-100%",
  duration:2,
  ease:"power4.inOut",
},"<")

