var projects = [
    // UX DESIGN PROJECTS
    savedItems = {
        category: "UX",
        link: "/work/saved-items/",
        img: "../images/card-images/savedItems.png",
        alt: "Saved Items interface",
        title: "Saved Items",
        desc: "A better way to save library items online",
        feat: false,
        featImg: "/images/card-images/savedItems.png",
        order: 6,
        hide: false,
    },
    navigation = {
        category: "UX",
        link: "/work/navigation-icons/",
        img: "../images/card-images/navigation.png",
        alt: "New navigation style",
        title: "Navigation and Icons",
        desc: "Exploration of a new navigation design",
        feat: false,
        featImg: "/images/card-images/navigation.png",
        order: 5,
        hide: false,
    },
    collection = {
        category: "UX",
        link: "/work/collection-management/",
        img: "../images/card-images/collectionManagement.png",
        alt: "Collection Management request and return interface",
        title: "Collection Management",
        desc: "Quickly request or return collection items",
        feat: false,
        featImg: "/images/card-images/collectionManagement.png",
        order: 102,
        hide: true,
    },
    download = {
        category: "UX",
        link: "/work/download-history/",
        img: "../images/card-images/downloadHistory.png",
        alt: "Download history date selection modal",
        title: "Download History",
        desc: "Easily download library checkout history",
        feat: false,
        featImg: "/images/card-images/downloadHistory.png",
        order: 103,
        hide: true,
    },
    studyRoom = {
        category: "UX",
        link: "/work/study-room/",
        img: "../images/card-images/studyRoom.png",
        alt: "Sketch of mobile interface for study room reservation",
        title: "Study Room Reservation Redesign",
        desc: "Moving study room reservations to mobile",
        feat: false,
        featImg: "/images/card-images/studyRoom.png",
        order: 104,
        hide: true,
    },
    maps = {
        category: "UX",
        link: "/work/maps/",
        img: "../images/card-images/map.svg",
        alt: "Floor map of the third floor of the Harold B. Lee Library in Provo, Utah",
        title: "Library Floor Maps",
        desc: "Improving wayfinding at the BYU Library",
        feat: true,
        featImg: "/images/card-images/map.svg",
        order: 4,
        hide: false,
    },
    concepts = {
        category: "UX",
        link: "/work/concepts/",
        img: "../images/concepts/travel.svg",
        alt: "Main screen of the travel site concept",
        title: "UI Concepts",
        desc: "My best UI practice designs",
        feat: false,
        featImg: "/images/concepts/travel.svg",
        order: 106,
        hide: true,
    },
    vocabPhrases = {
        category: "UX",
        link: "/work/vocab-phrases/",
        img: "../images/card-images/vocabPhrases.svg",
        alt: "Prototype of Meet Someone screen listing vocabulary and phrases",
        title: "Vocabulary and Phrases",
        desc: "Making it easier to study language basics",
        feat: true,
        featImg: "/images/card-images/vocabPhrases.svg",
        order: 2,
        hide: false,
    },
    addedWords = {
        category: "UX",
        link: "/work/added-words/",
        img: "../images/card-images/addedWords.svg",
        alt: "Prototype of My Added Words adding a Spanish word",
        title: "My Added Words",
        desc: "Add words to enhance language learning",
        feat: false,
        featImg: "/images/card-images/addedWords.svg",
        order: 3,
        hide: false,
    },
    designSystem = {
        category: "UX",
        link: "/work/design-system/",
        img: "../images/card-images/designSystem.svg",
        alt: "",
        title: "Vasion Design System",
        desc: "Creating and maintaining a design system",
        feat: true,
        featImg: "/images/card-images/designSystem.svg",
        order: 1,
        hide: false,
    },
    searchFilterSort = {
        category: "UX",
        link: "/work/search-filter-sort/",
        img: "../images/card-images/placeholder.svg",
        alt: "",
        title: "Search, Filter, and Sort",
        desc: "Searching, filtering, and sorting data tables",
        feat: false,
        featImg: "/images/card-images/placeholder.svg",
        order: 100,
        hide: true,
    },
    // GRAPHIC DESIGN PROJECTS
    brighton = {
        category: "GD",
        link: "/work/brighton/",
        img: "../images/card-images/brighton.svg",
        alt: "Primary logo for the town of Brighton, Utah",
        title: "Brighton, Utah",
        desc: "Logo design for a small ski town",
        feat: false,
        featImg: "/images/card-images/brighton.svg",
        order: 13,
        hide: false,
    },
    tacoBomb = {
        category: "GD",
        link: "/work/taco-bomb/",
        img: "../images/card-images/tacoBomb.svg",
        alt: "Logomark for Taco Bomb food truck",
        title: "Taco Bomb",
        desc: "Food truck logo inspired by the Day of the Dead",
        feat: false,
        featImg: "/images/card-images/placeholder.svg",
        order: 15,
        hide: false,
    },
    photography = {
        category: "GD",
        link: "/work/rc-photography/",
        img: "../images/card-images/photography.svg",
        alt: "Primary logo for Rebekah Crockett Photography",
        title: "Rebekah Crockett Photography",
        desc: "Branding for a local photographer",
        feat: false,
        featImg: "/images/card-images/placeholder.svg",
        order: 12,
        hide: false,
    },
    jazz = {
        category: "GD",
        link: "/work/utah-jazz/",
        img: "../images/card-images/jazz.png",
        alt: "Infographic highlighting Donovan Mitchell",
        title: "Utah Jazz Infographic",
        desc: "All-Star level infographics",
        feat: false,
        featImg: "/images/card-images/jazz.png",
        order: 203,
        hide: true,
    },
    dac = {
        category: "GD",
        link: "/work/dac/",
        img: "../images/card-images/dac.svg",
        alt: "Draper Arts Council logo with amphitheater",
        title: "Draper Arts Council",
        desc: "Fresh branding for a popular arts council",
        feat: false,
        featImg: "/images/card-images/dac.svg",
        order: 11,
        hide: false,
    },
    cleanSlate = {
        category: "GD",
        link: "/work/clean-slate/",
        img: "../images/card-images/clean-slate.svg",
        alt: "The Clean Slate logo with lightning bolt droplet",
        title: "The Clean Slate",
        desc: "Logo for a start-up power washing company",
        feat: false,
        featImg: "/images/card-images/clean-slate.svg",
        order: 14,
        hide: false,
    },
    blueCopper = {
        category: "GD",
        link: "/work/blue-copper/",
        img: "../images/card-images/blueCopper.svg",
        alt: "Logotype badge for Blue Copper Woodworking",
        title: "Blue Copper Woodworking",
        desc: "A new logo for an upcoming woodworking shop",
        feat: true,
        featImg: "/images/card-images/blueCopper.svg",
        order: 10,
        hide: false,
    },
    zkelDesign = {
        category: "GD",
        link: "/work/zkel-design/",
        img: "../images/card-images/placeholder.svg",
        alt: "",
        title: "ZKEL Design",
        desc: "Destination postcards, posters, and stickers",
        feat: false,
        featImg: "/images/card-images/blueCopper.svg",
        order: 19,
        hide: true,
    },
]

projects.sort((a, b) => a.order - b.order);

var i = 0;
var len = projects.length;
var featuredWork = "";
for (; i < len; i++) {
    if (projects[i].feat == true && projects[i].hide == false) {
        featuredWork += `<a href="` + projects[i].link + `">`;
        featuredWork += `<div class="card"><img src="` + projects[i].featImg + `" alt="` + projects[i].alt + `" />`;
        featuredWork += `<div><h3>` + projects[i].title + `</h3>`;
        featuredWork += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}

var i = 0;
var len = projects.length;
var uxProjects = "";
for (; i < len; i++) {
    if (projects[i].category == "UX" && projects[i].hide == false) {
        uxProjects += `<a href="` + projects[i].link + `">`;
        uxProjects += `<div class="card"><img src="` + projects[i].img + `" alt="` + projects[i].alt + `" />`;
        uxProjects += `<div><h3>` + projects[i].title + `</h3>`;
        uxProjects += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}

var i = 0;
var len = projects.length;
var gdProjects = "";
for (; i < len; i++) {
    if (projects[i].category == "GD" && projects[i].hide == false) {
        gdProjects += `<a href="` + projects[i].link + `">`;
        gdProjects += `<div class="card"><img src="` + projects[i].img + `" alt="` + projects[i].alt + `" />`;
        gdProjects += `<div><h3>` + projects[i].title + `</h3>`;
        gdProjects += `<p>` + projects[i].desc + `</p></div></div></a>`;
    }
}


/* ---------- NAVBAR ---------- */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("body").style.marginright = "200px";
    document.getElementById("darken").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementsByTagName(main).style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("body").style.marginright = "0";
    document.getElementById("darken").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
    document.getElementsByTagName(main).style.overflow = "visible";
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

