const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

const nav =Array.from(document.querySelectorAll('a'))
nav[0].textContent = siteContent["nav"]['nav-item-1'];
nav[1].textContent = siteContent["nav"]['nav-item-2'];
nav[2].textContent = siteContent["nav"]['nav-item-3'];
nav[3].textContent = siteContent["nav"]['nav-item-4'];
nav[4].textContent = siteContent["nav"]['nav-item-5'];
nav[5].textContent = siteContent["nav"]['nav-item-6'];



//New Nav

const newNav1 = document.createElement('a');
newNav1.textContent = "KickStart";

const newNav2 = document.createElement('a');
newNav2.textContent = "Store";

const navBar = document.querySelector("nav");
navBar.appendChild(newNav1);
navBar.prepend(newNav2);

newNav1.style.color ='green';
newNav2.style.color ='green';


// html selector
let htmlBackground = document.querySelector('html');
htmlBackground.style.background = '#E69A8D'

//nav text color

nav.forEach(element => {
  element.style.color = 'green'
})

//topsec

let topText = document.querySelector('.cta h1');
topText.textContent = siteContent["cta"]["h1"];


let buttonText = document.querySelector('.cta button');
buttonText.textContent = siteContent["cta"]["button"];

let codeImg= document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);


//middlesec

let middleH4 = Array.from(document.querySelectorAll('.text-content h4'))
middleH4[0].textContent = siteContent["main-content"]["features-h4"];
middleH4[1].textContent = siteContent["main-content"]["about-h4"];
middleH4[2].textContent = siteContent["main-content"]["services-h4"];
middleH4[3].textContent = siteContent["main-content"]["product-h4"];
middleH4[4].textContent = siteContent["main-content"]["vision-h4"];

middleH4.forEach(element => {
  element.style.color = 'purple'
  element.style.fontSize = '3rem'
  
})



let middleP = Array.from(document.querySelectorAll('.text-content p'))
middleP[0].textContent = siteContent["main-content"]["features-content"];
middleP[1].textContent = siteContent["main-content"]["about-content"];
middleP[2].textContent = siteContent["main-content"]["services-content"];
middleP[3].textContent = siteContent["main-content"]["product-content"];
middleP[4].textContent = siteContent["main-content"]["vision-content"];


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact

let contactH = document.querySelector(".contact h4");
contactH.textContent= siteContent["contact"]["contact-h4"];

let contactP = Array.from(document.querySelectorAll(".contact p"));
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];


//footer

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];







//Event listener

logo.addEventListener('mouseover', (event) => {
  htmlBackground.style.background = 'white';
})

codeImg.addEventListener('click', (event) => {
  htmlBackground.style.background = '#E69A8D'
})