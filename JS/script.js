
//Replace carousel images into background images.
// $('#carousel .carousel-item img').each(function() {
//     var imgSrc = $(this).attr('src');
//     $(this).parent().css({'background-image': 'url('+imgSrc+')'});
//     $(this).remove();
//   });


// PRELOADER
window.addEventListener("load", () =>{
   let pre = document.querySelector(".pre");
   let left = document.querySelector(".left");
   let right = document.querySelector(".right");
   let ball = document.querySelector(".ball");
//    let gif = document.querySelector (".ball-hold");
   
   setTimeout(() =>{
      left.style.width = "0";
      right.style.width = "0";
      ball.style.opacity = "0";
      pre.style.visibility = "hidden"
    //   pre.style.display = 'none';
    //   gif.style.display = 'none';
   }, 3000)
})

// NavBar Effect
window.addEventListener('scroll', () =>{
   const nav = document.querySelector("nav");
   const navBtn = document.querySelector(".nav-btn");
   if(window.scrollY > 10){
      nav.classList.add("navStyle");
      navBtn.classList.add("btnStyle");
   }else{
      nav.classList.remove("navStyle");
      nav.style.transition = '0.5s ease-out';
      navBtn.classList.remove("btnStyle");
      navBtn.style.borderColor = 'white';
   }
})


// Email info
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t);
})

// scroll to top
window.addEventListener('scroll', () =>{
   const top = document.querySelector(".top");
   if(window.scrollY > 400){
      top.classList.add("show")
   }else{
      top.classList.remove("show")
   }
})

function scroller(){
   window.scrollTo(0, 0);
}

// our mission
function showMission (){
   let mission = document.querySelector(".BD1");
   let vision = document.querySelector(".BD2");
   let goal = document.querySelector(".BD3");
   mission.style.display = 'flex';
   goal.style.display = 'none';
   vision.style.display = 'none';
}

function showVision (){
   let mission = document.querySelector(".BD1");
   let vision = document.querySelector(".BD2");
   let goal = document.querySelector(".BD3");
   mission.style.display = 'none';
   goal.style.display = 'none';
   vision.style.display = 'flex';
}

function showGoal (){
   let goal = document.querySelector(".BD3");
   let mission = document.querySelector(".BD1");
   let vision = document.querySelector(".BD2");
   mission.style.display = 'none';
   vision.style.display = 'none';
   goal.style.display = 'flex';
}

function myvalid(){
   let errorI = document.getElementById("e1");
   let errorII = document.getElementById("e2");
   let errorIII = document.getElementById("e3");
   let errorIV = document.getElementById("e4");


   let nme = document.getElementById("name");
   let name = nme.value;
   let eml = document.getElementById("email");
   let Email = eml.value;
   let bgt = document.getElementById("budget");
   let budget = bgt.value;
   let prjt = document.getElementById("project");
   let project = prjt.value;

   let text = /^[A-Za-z\s]+$/;
   let num = /^[0-9]+$/;
   let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   let comment = /^(?=.*[a-zA/-Z\d].*)[a-zA-Z\d!/@#$%&*]{7,}$/;

   if(name.trim() == ''){
       errorI.style.display = "inline";
       errorI.innerHTML = " *please fill in name";
       errorII.style.display = "none";
       errorIII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(!text.test(name)){
       errorI.style.display = "inline";
       errorI.innerHTML = " *please fill in name correctly";
       errorII.style.display = "none";
       errorIII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(Email.trim() == ''){
       errorII.style.display = "inline";
       errorII.innerHTML = " *please fill in Email";
       errorI.style.display = "none";
       errorIII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(!email.test(Email)){
       errorII.style.display = "inline";
       errorII.innerHTML = " *please fill in Email correctly";
       errorI.style.display = "none";
       errorIII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(budget.trim() == ''){
       errorIII.style.display = "inline";
       errorIII.innerHTML = " *please fill in Budget";
       errorI.style.display = "none";
       errorII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(!num.test(budget)){
       errorIII.style.display = "inline";
       errorIII.innerHTML = " *please fill in Budget correctly";
       errorI.style.display = "none";
       errorII.style.display = "none";
       errorIV.style.display = "none";
       return false;
   }else if(project.trim() == ''){
       errorIV.style.display = "inline";
       errorIV.innerHTML = " *please fill in Project";
       errorI.style.display = "none";
       errorII.style.display = "none";
       errorIII.style.display = "none";
       return false;
   }else if(!text.test(project)){
       errorIV.style.display = "inline";
       errorIV.innerHTML = " *please fill in Project correctly";
       errorI.style.display = "none";
       errorII.style.display = "none";
       errorIII.style.display = "none";
       return false;
   }
   else{
       return true;
   }
}

function myvalid2(){
    let errorI = document.getElementById("e1");
    let errorII = document.getElementById("e2");
    let errorIII = document.getElementById("e3");
    let errorIV = document.getElementById("e4");
    let errorV = document.getElementById("e5");
 
    let nme = document.getElementById("name");
    let name = nme.value;
    let eml = document.getElementById("email");
    let Email = eml.value;
    let add = document.getElementById("address");
    let address = add.value;
    let pNum = document.getElementById("phoneNo");
    let phoneNo = pNum.value;
    let prjt = document.getElementById("project");
    let project = prjt.value;
 
    let text = /^[A-Za-z\s]+$/;
    let num = /^[0-9]+$/;
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
 
    if(name.trim() == ''){
        errorI.style.display = "inline";
        errorI.innerHTML = " *please fill in name";
        return false;
    }else if(!text.test(name)){
        errorI.style.display = "inline";
        errorI.innerHTML = " *please fill in name correctly";
        return false;
    }else if(Email.trim() == ''){
        errorII.style.display = "inline";
        errorII.innerHTML = " *please fill in Email";
        errorI.style.display = "none";
        return false;
    }else if(!email.test(Email)){
        errorII.style.display = "inline";
        errorII.innerHTML = " *please fill in Email correctly";
        return false;
    }else if(phoneNo.trim() == ''){
        errorIII.style.display = "inline";
        errorIII.innerHTML = " *please fill in Phone Number";
        errorII.style.display = "none";
        return false;
    }else if(!num.test(phoneNo)){
        errorIII.style.display = "inline";
        errorIII.innerHTML = " *please fill in Phone Number correctly";
        return false;
    }else if(phoneNo.trim() == "" || phoneNo.length < 11 || phoneNo.length > 11){
        errorIII.style.display = "inline";
        errorIII.innerHTML = 'Must be 11 digits';
        return false; 
    }else if(address.trim() == ''){
        errorIV.style.display = "inline";
        errorIV.innerHTML = " *please fill in address";
        errorIII.style.display = "none";
        return false;
    }else if(project.trim() == ''){
        errorV.style.display = "inline";
        errorV.innerHTML = " *please describe Project";
        errorIV.style.display = "none";
        return false;
    }
    else{
        errorV.style.display = "none";
        localStorage.setItem('name', name);
        return true;
    }
 }

//  ABOUT PG RANGE
const pros = document.querySelectorAll(".pro");
const pros2 = document.querySelectorAll(".pro2");
const pros3 = document.querySelectorAll(".pro3");
const observer = new IntersectionObserver((entries) =>{
   entries.forEach(entry =>{
      if(entry.intersectionRatio > 0){
         entry.target.classList.add("mov");
      }
   })
})
pros.forEach((pro) =>{
   observer.observe(pro)
})
pros2.forEach((pro2) =>{
    observer.observe(pro2)
})
pros3.forEach((pro3) =>{
    observer.observe(pro3)
})