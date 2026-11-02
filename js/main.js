
/*---------------------- nav bar --------------------- */


    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");    /*we define the variable by picking them up 
                                                               from the document using querySelector*/
    hamburgerBtn.addEventListener("click", showNavMenu);    /*addEventListener by clicking on hamburgerBtn we want our
                                                              function showNavMenu to run */
    closeNavBtn.addEventListener("click", hideNavMenu);     /*by clicking on closeNavBtn we wnat our function hideNavMenu
                                                              to run */



    function showNavMenu(){
        navMenu.classList.add("open");    // we want to add to navMenu the class open 
    }
    
    function hideNavMenu(){
        navMenu.classList.remove("open");   // we want to remove from navMenu the class open 
        fadeOutEffect();                    // and also run the fadeOutEffect function 

    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{                                          //immediatly invoked fuction - using arrow function
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    //atatch an event handler to document
    document.addEventListener("click", (event)=>{
       if(event.target.classList.contains('link-item')){      //if this event contains class of link-item we want to continue
           //make sure event.target.hash has a value before overriding default behavior
           if(event.target.hash !==""){
               // prevent default anchor click behavior
               event.preventDefault();  //if the event does not get explicitly handled its action should not be taken as it normally would be
               const hash = event.target.hash;    
               console.log(hash);
               // deactivate existing active section
               document.querySelector(".section.active").classList.add("hide");
               document.querySelector(".section.active").classList.remove("active");
               // activate new section
               document.querySelector(hash).classList.add("active");
               document.querySelector(hash).classList.remove("hide");
               // deactivate existing active nav menu link-item
               navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
               navMenu.querySelector(".active").classList.remove("active","inner-shadow");
               // if clicked link-item is contained within the nav menu 
               if(navMenu.classList.contains("open")){
               //activiate  new nav menu link-item
               event.target.classList.add("active", "inner-shadow");
               event.target.classList.remove("outer-shadow", "hover-in-shadow");
               //hide nav menu
               hideNavMenu();
               }

               else{
                   let navItems = navMenu.querySelectorAll(".link-item");
                   navItems.forEach((item) =>{
                       if(hash === item.hash){
                           // activiate  new nav menu link-item
                           item.classList.add("active", "inner-shadow");
                           item.classList.remove("outer-shadow", "hover-in-shadow");
                       }
                   })
                   fadeOutEffect();
               }
               // add hash (#) to url by using window.location.hash = hashtag
               window.location.hash = hash;

            }
       }
       
    })




/*--------------------About section tabs---------------- */


    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");         //define aboutSection & tabsContainer to use it later on  

    tabsContainer.addEventListener("click", (event) =>{
        /*if event.target contains 'tab-item' class and not contains 'active' class */
        if(event.target.classList.contains("tab-item") &&
       !event.target.classList.contains("active")){
           const target = event.target.getAttribute("data-target");  // when i click aboutSection tab-item its change it to active
           // deactivate existing active 'tab-item'
           tabsContainer.querySelector(".active").classList.remove("outer-shadow" , "active");
           // active new 'tab-item'
           event.target.classList.add("active" , "outer-shadow");
           //deactivate existing active 'tab-content'
           aboutSection.querySelector(".tab-content.active").classList.remove("active")
           // activate new 'tab-content'
           aboutSection.querySelector(target).classList.add("active");
       }

    })



/*--------------------------- teami slider ------------------- */
 
    const sliderContainer = document.querySelector(".teami-slider-container"),
    slides = sliderContainer.querySelectorAll(".teami-item"),
    slideWidth = sliderContainer.offsetWidth,     // return the viewable width of an element (in px) including the padding , border and scroll bar but not the margin
    prevBtn = document.querySelector(".teami-slider-nav .prev"),
    nextBtn = document.querySelector(".teami-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".teami-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
        activeSlide); // return the first index at wish a given element can be found in the array , orrrrr -1 if it s not present
                      // return 0 to 20 depend on '.active' place 
    //set widht of all slides 
    slides.forEach((slide) => {
      slide.style.width = slideWidth + "px";    // return width = 570px
    })
    //set widht of sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px"; // return width = 1710 px

    nextBtn.addEventListener("click", () =>{  
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;               //console.log 1 2 0 
        }
        slider(); //function return positive 
    })

    prevBtn.addEventListener("click", ()=>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider(); // function return negative 
    })

    function slider(){
        //deactivate existing active slides
        sliderContainer.querySelector(".teami-item.active").classList.remove("active");
        //activate new slide
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";   //return width = -1710 px margin-left = -1140px 
                                                                                  // changes for each item 
    }
    slider();




/*------------Hide all section except active -------------- */



    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })

 /*-------------------- submit btn ---------------- */
 function myalert(){
     alert ("Message Sent");
     document.getElementById('name-holder').value = '';
     document.getElementById('email-holder').value = '';
     document.getElementById('subject-holder').value = '';
     document.getElementById('message-holder').value = '';

 }

