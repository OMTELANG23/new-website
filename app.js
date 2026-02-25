function search() {
    let input = document.querySelector(".search-input").value.toLowerCase();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
};
/*------------------------------------login----------------------------------------------*/

const sidebarNavigationEl = document.getElementById("sidear-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nev-sidebar");
const sidebarCloseNavigationEl = document.getElementById("close");  



sidebarOpenNavigationEl.addEventListener("click",()=>{
   sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click",()=>{
  sidebarNavigationEl.classList.toggle("slidebar-show"); 
});


/*----------------------------card--------------------------------------------*/
const cardNavigationEl = document.getElementById("card-navigation-id");
const cardOpenNavigationEl = document.getElementById("open-ne-sidebar");
const cardCloseNavigation = document.getElementById("close2");

cardOpenNavigationEl.addEventListener("click",()=>{
    cardNavigationEl.classList.toggle("slidebar-show");
 });
    cardCloseNavigation .addEventListener("click",()=>{
        cardNavigationEl.classList.toggle("slidebar-show");
   
});

/*in the card upi add code*/
const radioButtons = document.querySelectorAll('input[name="one"]');
const upiInputBox = document.getElementById('upi-input-id');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        
        if (this.id === 'upi-radio-btn') {
            upiInputBox.style.display = 'flex'; 
        } else {
            upiInputBox.style.display = 'none';
        }
    });
});

/*-------------customer service box opening--------------*/
const customerNavigationEl = document.getElementById("customerBtn-id");
const customerOpenBox = document.getElementById("customer-option-id")



customerNavigationEl.addEventListener("click",function(){
 customerOpenBox.classList.toggle("active");
});

/*-----------------more-products--------------*/

/*phone-box-page-opening*/
const mobileBoxOpenEl = document.getElementById("phone-id");
const  mobileOpenNavigationEl = document.getElementById("phone-box-page-id");

mobileBoxOpenEl.addEventListener("click",()=>{
    mobileOpenNavigationEl.classList.toggle("phone-show-box");
});

/*TVs & Appliances*/
const TvAppliancesOpenEl = document.getElementById("electornics-id");
const TvAppliancesOpenPageEl = document.getElementById("TVs-Appliances-box-page-id");

TvAppliancesOpenEl.addEventListener("click",()=>{
    TvAppliancesOpenPageEl.classList.toggle("phone-show-box2");
});
/********image slider*******/
/*const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow');
const slider = document.querySelector('.container');

const images = document.querySelectorAll('.sliding-images');

let slideNumber = 1;

left.addEventListener('click',()=>{
    if(slideNumber < images.length){
          slider.style.transform = `translateX(-${slideNumber*1455}px)`;
          slideNumber++;
    }else{
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
    
});*/


