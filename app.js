// sidebar

let buttonSidebar = document.getElementById("button-sidebar"),
    sidebar = document.getElementById("sidebar"),
    section = document.getElementById("section"),

    buttons = document.getElementById("buttons"),
    image = document.getElementById("image"),
    Dashboard = document.getElementById("Dashboard"),
    user = document.getElementById("user"),
    page = document.getElementById("page"),
    Component = document.getElementById("Component"),
    Form = document.getElementById("Form"),
    Table = document.getElementById("Table"),
    Mapa = document.getElementById("Map"),
    Widget = document.getElementById("Widget"),
    Chart = document.getElementById("Chart"),
    Calendar = document.getElementById("Calendar"),

    CREATIVETIM = document.getElementById("CREATIVE-TIM"),
    TaniaAndrew = document.getElementById("Tania-Andrew");

buttonSidebar.onclick = function() {

    sidebar.classList.toggle('sidebar-off');
    section.classList.toggle('section-off');

    buttonSidebar.children[0].classList.toggle('fa-chevron-left');
    buttonSidebar.children[1].classList.toggle('fa-chevron-right');

    Dashboard.classList.toggle('row');
    page.classList.toggle('row');
    Component.classList.toggle('row');
    Form.classList.toggle('row');
    Table.classList.toggle('row');
    Mapa.classList.toggle('row');
    Widget.classList.toggle('row');
    Chart.classList.toggle('row');
    Calendar.classList.toggle('row');

    image.classList.toggle('col-4');
    image.classList.toggle('image');

    buttons.children[0].classList.toggle('button-OFF');
    CREATIVETIM.classList.toggle('col-7');
    CREATIVETIM.classList.toggle('disactive-h6');
    CREATIVETIM.classList.toggle('text-light');
    CREATIVETIM.classList.toggle('visible-item');
    TaniaAndrew.classList.toggle('col-6');
    TaniaAndrew.classList.toggle('disactive-p');
    TaniaAndrew.classList.toggle('text-light');
    TaniaAndrew.classList.toggle('visible-item');
    Dashboard.children[2].classList.toggle('col-1');
    Dashboard.children[1].classList.toggle('col-6');
    Dashboard.children[1].classList.toggle('disactive-Dashboard');
    Dashboard.children[1].classList.toggle('visible-item');
    page.children[1].classList.toggle('col-6');
    page.children[1].classList.toggle('disactive');
    page.children[1].classList.toggle('visible-item');
    Component.children[1].classList.toggle('col-6');
    Component.children[1].classList.toggle('disactive');
    Component.children[1].classList.toggle('visible-item');
    Form.children[1].classList.toggle('col-6');
    Form.children[1].classList.toggle('disactive');
    Form.children[1].classList.toggle('visible-item');
    Table.children[1].classList.toggle('col-6');
    Table.children[1].classList.toggle('disactive');
    Table.children[1].classList.toggle('visible-item');
    Mapa.children[1].classList.toggle('col-6');
    Mapa.children[1].classList.toggle('disactive');
    Mapa.children[1].classList.toggle('visible-item');
    Widget.children[1].classList.toggle('col-6');
    Widget.children[1].classList.toggle('disactive');
    Widget.children[1].classList.toggle('visible-item');
    Chart.children[1].classList.toggle('col-6');
    Chart.children[1].classList.toggle('disactive');
    Chart.children[1].classList.toggle('visible-item');
    Calendar.children[1].classList.toggle('col-6');
    Calendar.children[1].classList.toggle('disactive');
    Calendar.children[1].classList.toggle('visible-item');

    CREATIVETIM.classList.toggle('on');
    CREATIVETIM.classList.toggle('off');
    TaniaAndrew.classList.toggle('off');
    Dashboard.children[1].classList.toggle('off');
    page.children[1].classList.toggle('off');
    Component.children[1].classList.toggle('off');
    Form.children[1].classList.toggle('off');
    Table.children[1].classList.toggle('off');
    Mapa.children[1].classList.toggle('off');
    Widget.children[1].classList.toggle('off');
    Chart.children[1].classList.toggle('off');
    Calendar.children[1].classList.toggle('off');

    page.children[2].classList.toggle('disactive-i');
    Component.children[2].classList.toggle('disactive-i');
    Form.children[2].classList.toggle('disactive-i');
    Table.children[2].classList.toggle('disactive-i');
    Mapa.children[2].classList.toggle('disactive-i');

    //user.classList.toggle('nonea')
}


// drop menu

let userList = document.getElementById("user-list");
user.onclick = function() {
    userList.classList.toggle('users-active');
    userList.classList.toggle('user-disactive');
}

let pages = document.getElementById("pages"),
    pagesList = document.getElementById("pages-list");
pages.onclick = function() {
    pagesList.classList.toggle('pages-active');

    ComponentsList.classList.remove('Components-active');
    FormsList.classList.remove('Forms-active');
    TablesList.classList.remove('Tables-active');
    MapsList.classList.remove('Maps-active');

    if (pagesList.classList.contains('pages-active')) {
        pages.classList.add("btn-primary")
    } else {
        pages.classList.remove("btn-primary")
    }
    if (ComponentsList.classList.contains('Components-active')) {
        Components.classList.add("btn-primary")
    } else {
        Components.classList.remove("btn-primary")
    }
    if (FormsList.classList.contains('Forms-active')) {
        Forms.classList.add("btn-primary")
    } else {
        Forms.classList.remove("btn-primary")
    }
    if (TablesList.classList.contains('Tables-active')) {
        Tables.classList.add("btn-primary")
    } else {
        Tables.classList.remove("btn-primary")
    }
}


let Components = document.getElementById("Components"),
    ComponentsList = document.getElementById("Components-list");
Components.onclick = function() {
    ComponentsList.classList.toggle('Components-active');

    pagesList.classList.remove('pages-active');
    FormsList.classList.remove('Forms-active');
    TablesList.classList.remove('Tables-active');
    MapsList.classList.remove('Maps-active');

    if (pagesList.classList.contains('pages-active')) {
        pages.classList.add("btn-primary")
    } else {
        pages.classList.remove("btn-primary")
    }
    if (ComponentsList.classList.contains('Components-active')) {
        Components.classList.add("btn-primary")
    } else {
        Components.classList.remove("btn-primary")
    }
    if (FormsList.classList.contains('Forms-active')) {
        Forms.classList.add("btn-primary")
    } else {
        Forms.classList.remove("btn-primary")
    }
    if (TablesList.classList.contains('Tables-active')) {
        Tables.classList.add("btn-primary")
    } else {
        Tables.classList.remove("btn-primary")
    }
}


let Forms = document.getElementById("Forms"),
    FormsList = document.getElementById("Forms-list");
Forms.onclick = function() {
    FormsList.classList.toggle('Forms-active');

    ComponentsList.classList.remove('Components-active');
    pagesList.classList.remove('pages-active');
    TablesList.classList.remove('Tables-active');
    MapsList.classList.remove('Maps-active');

    if (pagesList.classList.contains('pages-active')) {
        pages.classList.add("btn-primary")
    } else {
        pages.classList.remove("btn-primary")
    }
    if (ComponentsList.classList.contains('Components-active')) {
        Components.classList.add("btn-primary")
    } else {
        Components.classList.remove("btn-primary")
    }
    if (FormsList.classList.contains('Forms-active')) {
        Forms.classList.add("btn-primary")
    } else {
        Forms.classList.remove("btn-primary")
    }
    if (TablesList.classList.contains('Tables-active')) {
        Tables.classList.add("btn-primary")
    } else {
        Tables.classList.remove("btn-primary")
    }
}


let Tables = document.getElementById("Tables"),
    TablesList = document.getElementById("Tables-list");
Tables.onclick = function() {
    TablesList.classList.toggle('Tables-active');

    ComponentsList.classList.remove('Components-active');
    FormsList.classList.remove('Forms-active');
    pagesList.classList.remove('pages-active');
    MapsList.classList.remove('Maps-active');

    if (pagesList.classList.contains('pages-active')) {
        pages.classList.add("btn-primary")
    } else {
        pages.classList.remove("btn-primary")
    }
    if (ComponentsList.classList.contains('Components-active')) {
        Components.classList.add("btn-primary")
    } else {
        Components.classList.remove("btn-primary")
    }
    if (FormsList.classList.contains('Forms-active')) {
        Forms.classList.add("btn-primary")
    } else {
        Forms.classList.remove("btn-primary")
    }
    if (TablesList.classList.contains('Tables-active')) {
        Tables.classList.add("btn-primary")
    } else {
        Tables.classList.remove("btn-primary")
    }

}


let Maps = document.getElementById("Maps"),
    MapsList = document.getElementById("Maps-list");
Maps.onclick = function() {
    MapsList.classList.toggle('Maps-active');

    ComponentsList.classList.remove('Components-active');
    FormsList.classList.remove('Forms-active');
    TablesList.classList.remove('Tables-active');
    pagesList.classList.remove('pages-active');

    if (MapsList.classList.contains('Maps-active')) {
        Maps.classList.add("btn-primary")
    } else {
        Maps.classList.remove("btn-primary")
    }
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
const images = document.getElementById("images");

images.children[0].onclick = function() {
    sidebar.style.background = 'url(css/images/pexels-eberhard-grossgasteiger-1624438.jpg)';
    sidebar.style.backgroundSize = 'cover';
}

images.children[1].onclick = function() {
    sidebar.style.background = 'url(css/images/pexels-nuno-veludo-3558637.jpg)';
    sidebar.style.backgroundSize = 'cover';
}

images.children[2].onclick = function() {
    sidebar.style.background = 'url(css/images/pexels-lisa-vhb-893978.jpg)';
    sidebar.style.backgroundSize = 'cover';
}

images.children[3].onclick = function() {
    sidebar.style.background = 'url(css/images/pexels-александр-прокофьев-561463.jpg)';
    sidebar.style.backgroundSize = 'cover';
}