const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function locomo(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomo();

var tl = gsap.timeline()

tl.to(".page1 h1",{
    x:-80,
    duration:1,
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h2",{
    x:80,
    duration:1,
    scrollTrigger:{
        trigger:".page1 h2",
        scroller:".main",
        // markers:true,
        start:"top 54%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 video",{


    width:"95%",
    scrollTrigger:{
        trigger:".page1 video",
        scroller:".main",
        // markers:true,
        start:"top 100%",
        end:"top 0%",
        scrub:3
    }
})

tl.to(".main",{
  backgroundColor:"#fff",
  scrollTrigger:{
    trigger:".main",
    scroller:".main",
    // markers:true,
    start:"top -150%",
    end:"top -130%",
    scrub:3
  }
})