// sidebar
let buttonSidebar = document.getElementById("button-sidebar"),
    sidebar = document.getElementById("sidebar"),
    section = document.getElementById("section");
buttonSidebar.onclick = function() {

    sidebar.classList.toggle('col-xl-3');
    sidebar.classList.toggle('col-lg-3');
    sidebar.classList.toggle('col-md-3');

    section.classList.toggle('col-xl-9');
    section.classList.toggle('col-lg-9');
    section.classList.toggle('col-md-9');

    sidebar.style.width = "100px";
    section.style.width = "1000px";

    buttonSidebar.children[0].classList.toggle('fa-chevron-left');
    buttonSidebar.children[1].classList.toggle('fa-chevron-right');
}


// drop menu


let pages = document.getElementById("pages"),
    pagesList = document.getElementById("pages-list");
pages.onclick = function() {
    pagesList.classList.toggle('pages-active');
}


let Components = document.getElementById("Components"),
    ComponentsList = document.getElementById("Components-list");
Components.onclick = function() {
    ComponentsList.classList.toggle('Components-active');
}


let Forms = document.getElementById("Forms"),
    FormsList = document.getElementById("Forms-list");
Forms.onclick = function() {
    FormsList.classList.toggle('Forms-active');
}


let Tables = document.getElementById("Tables"),
    TablesList = document.getElementById("Tables-list");
Tables.onclick = function() {
    TablesList.classList.toggle('Tables-active');
}


let Maps = document.getElementById("Maps"),
    MapsList = document.getElementById("Maps-list");
Maps.onclick = function() {
    MapsList.classList.toggle('Maps-active');
}

// end drop menu




/* SIDEBAR FILTERS*/
let Setting = document.getElementById("Setting"),
    SIDEBARFLOUT = document.getElementById("SIDEBAR-FLOUT");
Setting.onclick = function() {
    SIDEBARFLOUT.classList.toggle('on-off');
}

/* color */
let SIDEBARFILTERS = document.getElementById("SIDEBAR-FILTERS"),
    Dashboard = document.getElementById("Dashboard"),
    Widgets = document.getElementById("Widgets"),
    Charts = document.getElementById("Charts"),
    Calendars = document.getElementById("Calendars");
/* primary */
SIDEBARFILTERS.children[0].onclick = function() {
        Dashboard.style.background = '#0D6EFD';
    }
    /* danger */
SIDEBARFILTERS.children[1].onclick = function() {
    Dashboard.style.background = '#DC3545';
    Dashboard.style.border = '#DC3545';
}

/*  warning */
SIDEBARFILTERS.children[2].onclick = function() {
    Dashboard.style.background = '#FFC107';
    Dashboard.style.border = '#FFC107';
}

/*  secondary */
SIDEBARFILTERS.children[3].onclick = function() {
    Dashboard.style.background = '#6C757D';
    Dashboard.style.border = '#6C757D';
}

/*  success */
SIDEBARFILTERS.children[4].onclick = function() {
    Dashboard.style.background = '#198754';
    Dashboard.style.border = '#198754';

}

/* SIDEBARBACKGROUND */
let SIDEBARBACKGROUND = document.getElementById("SIDEBAR-BACKGROUND"),
    overlay = document.getElementById("overlay");

SIDEBARBACKGROUND.children[0].onclick = function() {
    overlay.style.background = 'rgb(0 0 0 / 70%)';
}

SIDEBARBACKGROUND.children[1].onclick = function() {
    overlay.style.background = 'rgb(201 201 201 / 70%)';
}

SIDEBARBACKGROUND.children[2].onclick = function() {
    overlay.style.background = 'rgb(240 53 53 / 70%)';
}


/* images */
let images = document.getElementById("images");

images.children[0].onclick = function() {
    sidebar.style.background = 'url(../css/images/sidebar-1.jpg)';
}

images.children[1].onclick = function() {
    sidebar.style.background = 'url(../css/images/sidebar-2.jpg)';
    sidebar.style.backgroundSize = 'initial';
}

images.children[2].onclick = function() {
    sidebar.style.background = 'url(../css/images/sidebar-3.jpg)';
}

images.children[3].onclick = function() {
    sidebar.style.background = 'url(../css/images/sidebar-4.jpg)';
}