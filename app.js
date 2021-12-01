//setting-btn
let settingBtn = document.getElementById("setting-btn"),
    floatSection = document.getElementById("float-section");

settingBtn.addEventListener('click', () => {
    floatSection.classList.toggle("show-float-section")
})

// buttons
const buttons = document.getElementById("buttons"),
    Dashboards = document.getElementById("Dashboards"),
    canvas1 = document.getElementById("canvas1"),
    canvas2 = document.getElementById("canvas2"),
    canvas3 = document.getElementById("canvas3"),
    section = document.getElementById("section"),
    Bookings = document.getElementById("Bookings"),
    TodayUsers = document.getElementById("Today-Users"),
    Followers = document.getElementById("Followers"),
    Barcelona = document.getElementById("Barcelona"),
    London = document.getElementById("London"),
    Milan = document.getElementById("Milan"),
    buttonUp = document.getElementById("up-btn"),
    body = document.getElementById("body"),
    header = document.getElementById("header"),
    trDE = document.getElementById("tr-DE"),
    trUS = document.getElementById("tr-US"),
    trGB = document.getElementById("tr-GB"),
    trBR = document.getElementById("tr-BR"),
    footer = document.getElementById("footer");
//dark
buttons.children[0].addEventListener('click', () => {
    Dashboards.classList.add('bg-dark')
    Dashboards.classList.remove('bg-primary')
    Dashboards.classList.remove('bg-danger')
    Dashboards.classList.remove('bg-success')
    Dashboards.classList.remove('bg-warning')
        //canvas1 mychher
    canvas1.children[0].classList.add('bg-dark')
    canvas1.children[0].classList.remove('bg-primary')
    canvas1.children[0].classList.remove('bg-danger')
    canvas1.children[0].classList.remove('bg-success')
    canvas1.children[0].classList.remove('bg-warning')
        //canvas1 icon
    canvas1.children[1].classList.add('text-dark')
    canvas1.children[1].classList.remove('text-primary')
    canvas1.children[1].classList.remove('text-danger')
    canvas1.children[1].classList.remove('text-success')
    canvas1.children[1].classList.remove('text-warning')
        //canvas2 mychher
    canvas2.children[0].classList.add('bg-dark')
    canvas2.children[0].classList.remove('bg-primary')
    canvas2.children[0].classList.remove('bg-danger')
    canvas2.children[0].classList.remove('bg-success')
    canvas2.children[0].classList.remove('bg-warning')
        //canvas2 icon
    canvas2.children[1].classList.add('text-dark')
    canvas2.children[1].classList.remove('text-primary')
    canvas2.children[1].classList.remove('text-danger')
    canvas2.children[1].classList.remove('text-success')
    canvas2.children[1].classList.remove('btextg-warning')
        //canvas3 mychher
    canvas3.children[0].classList.add('bg-dark')
    canvas3.children[0].classList.remove('bg-primary')
    canvas3.children[0].classList.remove('bg-danger')
    canvas3.children[0].classList.remove('bg-success')
    canvas3.children[0].classList.remove('bg-warning')
        //canvas3 icon
    canvas3.children[1].classList.add('text-dark')
    canvas3.children[1].classList.remove('text-primary')
    canvas3.children[1].classList.remove('text-danger')
    canvas3.children[1].classList.remove('text-success')
    canvas3.children[1].classList.remove('text-warning')
        //section
    section.children[0].children[0].children[0].children[0].classList.add('bg-dark')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-primary')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-danger')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-success')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings
    Bookings.children[0].children[0].children[0].classList.add('bg-dark')
    Bookings.children[0].children[0].children[0].classList.remove('bg-primary')
    Bookings.children[0].children[0].children[0].classList.remove('bg-danger')
    Bookings.children[0].children[0].children[0].classList.remove('bg-success')
    Bookings.children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings text
    Bookings.children[0].children[1].children[1].classList.add('text-dark')
    Bookings.children[0].children[1].children[1].classList.remove('text-primary')
    Bookings.children[0].children[1].children[1].classList.remove('text-danger')
    Bookings.children[0].children[1].children[1].classList.remove('text-success')
    Bookings.children[0].children[1].children[1].classList.remove('text-warning')
        //Bookings number
    Bookings.children[1].children[0].classList.add('text-dark')
    Bookings.children[1].children[0].classList.remove('text-danger')
    Bookings.children[1].children[0].classList.remove('text-success')
    Bookings.children[1].children[0].classList.remove('text-warning')
    Bookings.children[1].children[0].classList.remove('text-primary')
        //Today-Users
    TodayUsers.children[0].children[0].children[0].classList.add('bg-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-primary')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-danger')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-success')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-warning')
        //TodayUsers text
    TodayUsers.children[0].children[1].children[1].classList.add('text-dark')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-primary')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-danger')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-success')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-warning')
        //TodayUsers number
    TodayUsers.children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[0].classList.remove('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-warning')
    TodayUsers.children[1].children[0].classList.remove('text-primary')
        //Followers
    Followers.children[0].children[0].children[0].classList.add('bg-dark')
    Followers.children[0].children[0].children[0].classList.remove('bg-primary')
    Followers.children[0].children[0].children[0].classList.remove('bg-danger')
    Followers.children[0].children[0].children[0].classList.remove('bg-success')
    Followers.children[0].children[0].children[0].classList.remove('bg-warning')
        //Followers text
    Followers.children[0].children[1].children[1].classList.add('text-dark')
    Followers.children[0].children[1].children[1].classList.remove('text-primary')
    Followers.children[0].children[1].children[1].classList.remove('text-danger')
    Followers.children[0].children[1].children[1].classList.remove('text-success')
    Followers.children[0].children[1].children[1].classList.remove('text-warning')
        //TodayUsers number
    TodayUsers.children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[0].classList.remove('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-warning')
    TodayUsers.children[1].children[0].classList.remove('text-primary')

    //Barcelona
    Barcelona.children[1].children[0].classList.add('text-dark')
    Barcelona.children[1].children[0].classList.remove('text-primary')
    Barcelona.children[1].children[0].classList.remove('text-danger')
    Barcelona.children[1].children[0].classList.remove('text-success')
    Barcelona.children[1].children[0].classList.remove('text-warning')
        //London
    London.children[1].children[0].classList.add('text-dark')
    London.children[1].children[0].classList.remove('text-primary')
    London.children[1].children[0].classList.remove('text-danger')
    London.children[1].children[0].classList.remove('text-success')
    London.children[1].children[0].classList.remove('text-warning')
        //Milan
    Milan.children[1].children[0].classList.add('text-dark')
    Milan.children[1].children[0].classList.remove('text-primary')
    Milan.children[1].children[0].classList.remove('text-danger')
    Milan.children[1].children[0].classList.remove('text-success')
    Milan.children[1].children[0].classList.remove('text-warning')

    //settingBtn
    settingBtn.classList.add('bg-dark')
    settingBtn.classList.remove('bg-primary')
    settingBtn.classList.remove('bg-danger')
    settingBtn.classList.remove('bg-success')
    settingBtn.classList.remove('bg-warning')
        //button
    buttonUp.classList.add('bg-dark')
    buttonUp.classList.remove('bg-primary')
    buttonUp.classList.remove('bg-danger')
    buttonUp.classList.remove('bg-success')
    buttonUp.classList.remove('bg-warning')


    //light mode 
    body.style.background = '#eeeeee42'
        //light mode heder
    header.classList.add('bg-light')
    header.children[0].children[0].style.background = '#e9ecef'
    header.children[1].children[0].style.background = '#e9ecef'
        //light mode section
    section.classList.add('bg-light')
    section.children[0].children[0].children[1].classList.add('text-dark')
        //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.add('text-dark')
            trUS.children[n].children[i].classList.add('text-dark')
            trGB.children[n].children[i].classList.add('text-dark')
            trBR.children[n].children[i].classList.add('text-dark')
        }
    }
    //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.remove('text-light')
            trUS.children[n].children[i].classList.remove('text-light')
            trGB.children[n].children[i].classList.remove('text-light')
            trBR.children[n].children[i].classList.remove('text-light')
        }
    }
    //canvas light 
    for (let i = 2; i <= 4; i++) {
        canvas1.classList.add('bg-light')
        canvas2.classList.add('bg-light')
        canvas3.classList.add('bg-light')

        canvas1.children[i].classList.add('text-dark')
        canvas2.children[i].classList.add('text-dark')
        canvas3.children[i].classList.add('text-dark')
    }

    //Bookings light
    Bookings.classList.add('bg-light')
    Bookings.children[0].children[0].children[0].classList.remove('text-dark')
    Bookings.children[0].children[0].children[0].classList.add('text-light')
    Bookings.children[0].children[1].children[0].classList.add('text-dark')
    Bookings.children[1].children[1].classList.add('text-dark')
        //TodayUsers light
    TodayUsers.classList.add('bg-light')
    TodayUsers.children[0].children[0].children[0].classList.remove('text-dark')
    TodayUsers.children[0].children[0].children[0].classList.add('text-light')
    TodayUsers.children[0].children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[1].classList.add('text-dark')
        //Followers light
    Followers.classList.add('bg-light')
    Followers.children[0].children[0].children[0].classList.remove('text-dark')
    Followers.children[0].children[0].children[0].classList.add('text-light')
    Followers.children[0].children[1].children[0].classList.add('text-dark')
    Followers.children[1].children[1].classList.add('text-dark')

    //Barcelona light
    Barcelona.classList.add('bg-light')
    Barcelona.children[2].classList.remove('text-light')
    Barcelona.children[2].classList.add('text-dark')
    Barcelona.children[3].children[0].classList.remove('text-light')
    Barcelona.children[3].children[0].classList.add('text-dark')
    Barcelona.children[3].children[1].classList.remove('text-light')
    Barcelona.children[3].children[1].classList.add('text-dark')
        //London light
    London.classList.add('bg-light')
    London.children[2].classList.remove('text-light')
    London.children[2].classList.add('text-dark')
    London.children[3].children[0].classList.remove('text-light')
    London.children[3].children[0].classList.add('text-dark')
    London.children[3].children[1].classList.remove('text-light')
    London.children[3].children[1].classList.add('text-dark')
        //Milan light
    Milan.classList.add('bg-light')
    Milan.children[2].classList.remove('text-light')
    Milan.children[2].classList.add('text-dark')
    Milan.children[3].children[0].classList.remove('text-light')
    Milan.children[3].children[0].classList.add('text-dark')
    Milan.children[3].children[1].classList.remove('text-light')
    Milan.children[3].children[1].classList.add('text-dark')

    //footer
    footer.children[0].children[0].classList.remove('text-light')
    footer.children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[0].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[1].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[1].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[2].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[2].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[3].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[3].children[0].classList.add('text-dark')

    //settingBtn
    settingBtn.children[0].classList.remove('text-dark')
    settingBtn.children[0].classList.add('text-light')

    //button
    buttonUp.children[0].classList.remove('text-dark')
    buttonUp.children[0].classList.add('text-light')
})

//primary
buttons.children[1].addEventListener('click', () => {
    Dashboards.classList.add('bg-primary')
    Dashboards.classList.remove('bg-dark')
    Dashboards.classList.remove('bg-danger')
    Dashboards.classList.remove('bg-success')
    Dashboards.classList.remove('bg-warning')
        //canvas1 mychher
    canvas1.children[0].classList.add('bg-primary')
    canvas1.children[0].classList.remove('bg-dark')
    canvas1.children[0].classList.remove('bg-danger')
    canvas1.children[0].classList.remove('bg-success')
    canvas1.children[0].classList.remove('bg-warning')
        //canvas1 icon
    canvas1.children[1].classList.add('text-primary')
    canvas1.children[1].classList.remove('text-dark')
    canvas1.children[1].classList.remove('text-danger')
    canvas1.children[1].classList.remove('text-success')
    canvas1.children[1].classList.remove('text-warning')
        //canvas2 mychher
    canvas2.children[0].classList.add('bg-primary')
    canvas2.children[0].classList.remove('bg-dark')
    canvas2.children[0].classList.remove('bg-danger')
    canvas2.children[0].classList.remove('bg-success')
    canvas2.children[0].classList.remove('bg-warning')
        //canvas2 icon
    canvas2.children[1].classList.add('text-primary')
    canvas2.children[1].classList.remove('text-dark')
    canvas2.children[1].classList.remove('text-danger')
    canvas2.children[1].classList.remove('text-success')
    canvas2.children[1].classList.remove('text-warning')
        //canvas3 mychher
    canvas3.children[0].classList.add('bg-primary')
    canvas3.children[0].classList.remove('bg-dark')
    canvas3.children[0].classList.remove('bg-danger')
    canvas3.children[0].classList.remove('bg-success')
    canvas3.children[0].classList.remove('bg-warning')
        //canvas3 icon
    canvas3.children[1].classList.add('text-primary')
    canvas3.children[1].classList.remove('text-dark')
    canvas3.children[1].classList.remove('text-danger')
    canvas3.children[1].classList.remove('text-success')
    canvas3.children[1].classList.remove('text-warning')

    //section
    section.children[0].children[0].children[0].children[0].classList.add('bg-primary')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-dark')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-danger')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-success')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings
    Bookings.children[0].children[0].children[0].classList.add('bg-primary')
    Bookings.children[0].children[0].children[0].classList.remove('bg-dark')
    Bookings.children[0].children[0].children[0].classList.remove('bg-danger')
    Bookings.children[0].children[0].children[0].classList.remove('bg-success')
    Bookings.children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings text
    Bookings.children[0].children[1].children[1].classList.add('text-primary')
    Bookings.children[0].children[1].children[1].classList.remove('text-dark')
    Bookings.children[0].children[1].children[1].classList.remove('text-danger')
    Bookings.children[0].children[1].children[1].classList.remove('text-success')
    Bookings.children[0].children[1].children[1].classList.remove('text-warning')
        //Bookings number
    Bookings.children[1].children[0].classList.add('text-primary')
    Bookings.children[1].children[0].classList.remove('text-danger')
    Bookings.children[1].children[0].classList.remove('text-success')
    Bookings.children[1].children[0].classList.remove('text-warning')
    Bookings.children[1].children[0].classList.remove('text-dark')
        //Today-Users
    TodayUsers.children[0].children[0].children[0].classList.add('bg-primary')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-danger')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-success')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-warning')
        //TodayUsers text
    TodayUsers.children[0].children[1].children[1].classList.add('text-primary')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-dark')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-danger')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-success')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-warning')
        //TodayUsers number
    TodayUsers.children[1].children[0].classList.add('text-primary')
    TodayUsers.children[1].children[0].classList.remove('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-warning')
    TodayUsers.children[1].children[0].classList.remove('text-dark')
        //Followers
    Followers.children[0].children[0].children[0].classList.add('bg-primary')
    Followers.children[0].children[0].children[0].classList.remove('bg-dark')
    Followers.children[0].children[0].children[0].classList.remove('bg-danger')
    Followers.children[0].children[0].children[0].classList.remove('bg-success')
    Followers.children[0].children[0].children[0].classList.remove('bg-warning')
        //Followers text
    Followers.children[0].children[1].children[1].classList.add('text-primary')
    Followers.children[0].children[1].children[1].classList.remove('text-dark')
    Followers.children[0].children[1].children[1].classList.remove('text-danger')
    Followers.children[0].children[1].children[1].classList.remove('text-success')
    Followers.children[0].children[1].children[1].classList.remove('text-warning')
        //Followers number
    Followers.children[1].children[0].classList.add('text-primary')
    Followers.children[1].children[0].classList.remove('text-danger')
    Followers.children[1].children[0].classList.remove('text-success')
    Followers.children[1].children[0].classList.remove('text-warning')
    Followers.children[1].children[0].classList.remove('text-dark')

    //Barcelona
    Barcelona.children[1].children[0].classList.add('text-primary')
    Barcelona.children[1].children[0].classList.remove('text-dark')
    Barcelona.children[1].children[0].classList.remove('text-danger')
    Barcelona.children[1].children[0].classList.remove('text-success')
    Barcelona.children[1].children[0].classList.remove('text-warning')
        //London
    London.children[1].children[0].classList.add('text-primary')
    London.children[1].children[0].classList.remove('text-dark')
    London.children[1].children[0].classList.remove('text-danger')
    London.children[1].children[0].classList.remove('text-success')
    London.children[1].children[0].classList.remove('text-warning')
        //Milan
    Milan.children[1].children[0].classList.add('text-primary')
    Milan.children[1].children[0].classList.remove('text-dark')
    Milan.children[1].children[0].classList.remove('text-danger')
    Milan.children[1].children[0].classList.remove('text-success')
    Milan.children[1].children[0].classList.remove('text-warning')

    //settingBtn
    settingBtn.classList.add('bg-primary')
    settingBtn.classList.remove('bg-dark')
    settingBtn.classList.remove('bg-danger')
    settingBtn.classList.remove('bg-success')
    settingBtn.classList.remove('bg-warning')
        //button
    buttonUp.classList.add('bg-primary')
    buttonUp.classList.remove('bg-dark')
    buttonUp.classList.remove('bg-danger')
    buttonUp.classList.remove('bg-success')
    buttonUp.classList.remove('bg-warning')



    //light mode 
    body.style.background = '#eeeeee42'
        //light mode heder
    header.classList.add('bg-light')
    header.children[0].children[0].style.background = '#e9ecef'
    header.children[1].children[0].style.background = '#e9ecef'
        //light mode section
    section.classList.add('bg-light')
    section.children[0].children[0].children[1].classList.add('text-dark')
        //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.add('text-dark')
            trUS.children[n].children[i].classList.add('text-dark')
            trGB.children[n].children[i].classList.add('text-dark')
            trBR.children[n].children[i].classList.add('text-dark')
        }
    }
    //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.remove('text-light')
            trUS.children[n].children[i].classList.remove('text-light')
            trGB.children[n].children[i].classList.remove('text-light')
            trBR.children[n].children[i].classList.remove('text-light')
        }
    }
    //canvas light 
    for (let i = 2; i <= 4; i++) {
        canvas1.classList.add('bg-light')
        canvas2.classList.add('bg-light')
        canvas3.classList.add('bg-light')

        canvas1.children[i].classList.add('text-dark')
        canvas2.children[i].classList.add('text-dark')
        canvas3.children[i].classList.add('text-dark')
    }

    //Bookings light
    Bookings.classList.add('bg-light')
    Bookings.children[0].children[0].children[0].classList.remove('text-dark')
    Bookings.children[0].children[0].children[0].classList.add('text-light')
    Bookings.children[0].children[1].children[0].classList.add('text-dark')
    Bookings.children[1].children[1].classList.add('text-dark')
        //TodayUsers light
    TodayUsers.classList.add('bg-light')
    TodayUsers.children[0].children[0].children[0].classList.remove('text-dark')
    TodayUsers.children[0].children[0].children[0].classList.add('text-light')
    TodayUsers.children[0].children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[1].classList.add('text-dark')
        //Followers light
    Followers.classList.add('bg-light')
    Followers.children[0].children[0].children[0].classList.remove('text-dark')
    Followers.children[0].children[0].children[0].classList.add('text-light')
    Followers.children[0].children[1].children[0].classList.add('text-dark')
    Followers.children[1].children[1].classList.add('text-dark')

    //Barcelona light
    Barcelona.classList.add('bg-light')
    Barcelona.children[2].classList.remove('text-light')
    Barcelona.children[2].classList.add('text-dark')
    Barcelona.children[3].children[0].classList.remove('text-light')
    Barcelona.children[3].children[0].classList.add('text-dark')
    Barcelona.children[3].children[1].classList.remove('text-light')
    Barcelona.children[3].children[1].classList.add('text-dark')
        //London light
    London.classList.add('bg-light')
    London.children[2].classList.remove('text-light')
    London.children[2].classList.add('text-dark')
    London.children[3].children[0].classList.remove('text-light')
    London.children[3].children[0].classList.add('text-dark')
    London.children[3].children[1].classList.remove('text-light')
    London.children[3].children[1].classList.add('text-dark')
        //Milan light
    Milan.classList.add('bg-light')
    Milan.children[2].classList.remove('text-light')
    Milan.children[2].classList.add('text-dark')
    Milan.children[3].children[0].classList.remove('text-light')
    Milan.children[3].children[0].classList.add('text-dark')
    Milan.children[3].children[1].classList.remove('text-light')
    Milan.children[3].children[1].classList.add('text-dark')

    //footer
    footer.children[0].children[0].classList.remove('text-light')
    footer.children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[0].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[1].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[1].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[2].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[2].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[3].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[3].children[0].classList.add('text-dark')

    //settingBtn
    settingBtn.children[0].classList.remove('text-dark')
    settingBtn.children[0].classList.add('text-light')

    //button
    buttonUp.children[0].classList.remove('text-dark')
    buttonUp.children[0].classList.add('text-light')
})

//danger
buttons.children[2].addEventListener('click', () => {
    Dashboards.classList.add('bg-danger')
    Dashboards.classList.remove('bg-primary')
    Dashboards.classList.remove('bg-dark')
    Dashboards.classList.remove('bg-success')
    Dashboards.classList.remove('bg-warning')
        //canvas1 mychher
    canvas1.children[0].classList.add('bg-danger')
    canvas1.children[0].classList.remove('bg-dark')
    canvas1.children[0].classList.remove('bg-primary')
    canvas1.children[0].classList.remove('bg-success')
    canvas1.children[0].classList.remove('bg-warning')
        //canvas1 icon
    canvas1.children[1].classList.add('text-danger')
    canvas1.children[1].classList.remove('text-dark')
    canvas1.children[1].classList.remove('text-primary')
    canvas1.children[1].classList.remove('text-success')
    canvas1.children[1].classList.remove('text-warning')
        //canvas2 mychher
    canvas2.children[0].classList.add('bg-danger')
    canvas2.children[0].classList.remove('bg-dark')
    canvas2.children[0].classList.remove('bg-primary')
    canvas2.children[0].classList.remove('bg-success')
    canvas2.children[0].classList.remove('bg-warning')
        //canvas2 icon
    canvas2.children[1].classList.add('text-danger')
    canvas2.children[1].classList.remove('text-dark')
    canvas2.children[1].classList.remove('text-primary')
    canvas2.children[1].classList.remove('text-success')
    canvas2.children[1].classList.remove('text-warning')
        //canvas3 mychher
    canvas3.children[0].classList.add('bg-danger')
    canvas3.children[0].classList.remove('bg-dark')
    canvas3.children[0].classList.remove('bg-primary')
    canvas3.children[0].classList.remove('bg-success')
    canvas3.children[0].classList.remove('bg-warning')
        //canvas3 icon
    canvas3.children[1].classList.add('text-danger')
    canvas3.children[1].classList.remove('text-dark')
    canvas3.children[1].classList.remove('text-primary')
    canvas3.children[1].classList.remove('text-success')
    canvas3.children[1].classList.remove('text-warning')

    //section
    section.children[0].children[0].children[0].children[0].classList.add('bg-danger')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-dark')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-primary')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-success')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings
    Bookings.children[0].children[0].children[0].classList.add('bg-danger')
    Bookings.children[0].children[0].children[0].classList.remove('bg-primary')
    Bookings.children[0].children[0].children[0].classList.remove('bg-success')
    Bookings.children[0].children[0].children[0].classList.remove('bg-warning')
    Bookings.children[0].children[0].children[0].classList.remove('bg-dark')
        //Bookings text
    Bookings.children[0].children[1].children[1].classList.add('text-danger')
    Bookings.children[0].children[1].children[1].classList.remove('text-primary')
    Bookings.children[0].children[1].children[1].classList.remove('text-success')
    Bookings.children[0].children[1].children[1].classList.remove('text-warning')
    Bookings.children[0].children[1].children[1].classList.remove('text-dark')
        //Bookings number
    Bookings.children[1].children[0].classList.add('text-danger')
    Bookings.children[1].children[0].classList.remove('text-primary')
    Bookings.children[1].children[0].classList.remove('text-success')
    Bookings.children[1].children[0].classList.remove('text-warning')
    Bookings.children[1].children[0].classList.remove('text-dark')
        //Today-Users
    TodayUsers.children[0].children[0].children[0].classList.add('bg-danger')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-primary')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-success')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-warning')
        //TodayUsers text
    TodayUsers.children[0].children[1].children[1].classList.add('text-danger')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-dark')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-primary')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-success')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-warning')
        //TodayUsers number
    TodayUsers.children[1].children[0].classList.add('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-primary')
    TodayUsers.children[1].children[0].classList.remove('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-warning')
    TodayUsers.children[1].children[0].classList.remove('text-dark')
        //Followers
    Followers.children[0].children[0].children[0].classList.add('bg-danger')
    Followers.children[0].children[0].children[0].classList.remove('bg-dark')
    Followers.children[0].children[0].children[0].classList.remove('bg-primary')
    Followers.children[0].children[0].children[0].classList.remove('bg-success')
    Followers.children[0].children[0].children[0].classList.remove('bg-warning')
        //Followers text
    Followers.children[0].children[1].children[1].classList.add('text-danger')
    Followers.children[0].children[1].children[1].classList.remove('text-dark')
    Followers.children[0].children[1].children[1].classList.remove('text-primary')
    Followers.children[0].children[1].children[1].classList.remove('text-success')
    Followers.children[0].children[1].children[1].classList.remove('text-warning')
        //Followers number
    Followers.children[1].children[0].classList.add('text-danger')
    Followers.children[1].children[0].classList.remove('text-primary')
    Followers.children[1].children[0].classList.remove('text-success')
    Followers.children[1].children[0].classList.remove('text-warning')
    Followers.children[1].children[0].classList.remove('text-dark')

    //Barcelona
    Barcelona.children[1].children[0].classList.add('text-danger')
    Barcelona.children[1].children[0].classList.remove('text-dark')
    Barcelona.children[1].children[0].classList.remove('text-primary')
    Barcelona.children[1].children[0].classList.remove('text-success')
    Barcelona.children[1].children[0].classList.remove('text-warning')
        //London
    London.children[1].children[0].classList.add('text-danger')
    London.children[1].children[0].classList.remove('text-dark')
    London.children[1].children[0].classList.remove('v-primary')
    London.children[1].children[0].classList.remove('text-success')
    London.children[1].children[0].classList.remove('text-warning')
        //Milan
    Milan.children[1].children[0].classList.add('text-danger')
    Milan.children[1].children[0].classList.remove('text-dark')
    Milan.children[1].children[0].classList.remove('text-primary')
    Milan.children[1].children[0].classList.remove('text-success')
    Milan.children[1].children[0].classList.remove('text-warning')

    //settingBtn
    settingBtn.classList.add('bg-danger')
    settingBtn.classList.remove('bg-dark')
    settingBtn.classList.remove('bg-primary')
    settingBtn.classList.remove('bg-success')
    settingBtn.classList.remove('bg-warning')
        //button
    buttonUp.classList.add('bg-danger')
    buttonUp.classList.remove('bg-dark')
    buttonUp.classList.remove('bg-primary')
    buttonUp.classList.remove('bg-success')
    buttonUp.classList.remove('bg-warning')



    //light mode 
    body.style.background = '#eeeeee42'
        //light mode heder
    header.classList.add('bg-light')
    header.children[0].children[0].style.background = '#e9ecef'
    header.children[1].children[0].style.background = '#e9ecef'
        //light mode section
    section.classList.add('bg-light')
    section.children[0].children[0].children[1].classList.add('text-dark')
        //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.add('text-dark')
            trUS.children[n].children[i].classList.add('text-dark')
            trGB.children[n].children[i].classList.add('text-dark')
            trBR.children[n].children[i].classList.add('text-dark')
        }
    }
    //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.remove('text-light')
            trUS.children[n].children[i].classList.remove('text-light')
            trGB.children[n].children[i].classList.remove('text-light')
            trBR.children[n].children[i].classList.remove('text-light')
        }
    }
    //canvas light 
    for (let i = 2; i <= 4; i++) {
        canvas1.classList.add('bg-light')
        canvas2.classList.add('bg-light')
        canvas3.classList.add('bg-light')

        canvas1.children[i].classList.add('text-dark')
        canvas2.children[i].classList.add('text-dark')
        canvas3.children[i].classList.add('text-dark')
    }

    //Bookings light
    Bookings.classList.add('bg-light')
    Bookings.children[0].children[0].children[0].classList.remove('text-dark')
    Bookings.children[0].children[0].children[0].classList.add('text-light')
    Bookings.children[0].children[1].children[0].classList.add('text-dark')
    Bookings.children[1].children[1].classList.add('text-dark')
        //TodayUsers light
    TodayUsers.classList.add('bg-light')
    TodayUsers.children[0].children[0].children[0].classList.remove('text-dark')
    TodayUsers.children[0].children[0].children[0].classList.add('text-light')
    TodayUsers.children[0].children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[1].classList.add('text-dark')
        //Followers light
    Followers.classList.add('bg-light')
    Followers.children[0].children[0].children[0].classList.remove('text-dark')
    Followers.children[0].children[0].children[0].classList.add('text-light')
    Followers.children[0].children[1].children[0].classList.add('text-dark')
    Followers.children[1].children[1].classList.add('text-dark')

    //Barcelona light
    Barcelona.classList.add('bg-light')
    Barcelona.children[2].classList.remove('text-light')
    Barcelona.children[2].classList.add('text-dark')
    Barcelona.children[3].children[0].classList.remove('text-light')
    Barcelona.children[3].children[0].classList.add('text-dark')
    Barcelona.children[3].children[1].classList.remove('text-light')
    Barcelona.children[3].children[1].classList.add('text-dark')
        //London light
    London.classList.add('bg-light')
    London.children[2].classList.remove('text-light')
    London.children[2].classList.add('text-dark')
    London.children[3].children[0].classList.remove('text-light')
    London.children[3].children[0].classList.add('text-dark')
    London.children[3].children[1].classList.remove('text-light')
    London.children[3].children[1].classList.add('text-dark')
        //Milan light
    Milan.classList.add('bg-light')
    Milan.children[2].classList.remove('text-light')
    Milan.children[2].classList.add('text-dark')
    Milan.children[3].children[0].classList.remove('text-light')
    Milan.children[3].children[0].classList.add('text-dark')
    Milan.children[3].children[1].classList.remove('text-light')
    Milan.children[3].children[1].classList.add('text-dark')

    //footer
    footer.children[0].children[0].classList.remove('text-light')
    footer.children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[0].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[1].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[1].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[2].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[2].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[3].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[3].children[0].classList.add('text-dark')

    //settingBtn
    settingBtn.children[0].classList.remove('text-dark')
    settingBtn.children[0].classList.add('text-light')

    //button
    buttonUp.children[0].classList.remove('text-dark')
    buttonUp.children[0].classList.add('text-light')
})

//success
buttons.children[3].addEventListener('click', () => {
    Dashboards.classList.add('bg-success')
    Dashboards.classList.remove('bg-primary')
    Dashboards.classList.remove('bg-danger')
    Dashboards.classList.remove('bg-dark')
    Dashboards.classList.remove('bg-warning')
        //canvas1 mychher
    canvas1.children[0].classList.add('bg-success')
    canvas1.children[0].classList.remove('bg-dark')
    canvas1.children[0].classList.remove('bg-primary')
    canvas1.children[0].classList.remove('bg-danger')
    canvas1.children[0].classList.remove('bg-warning')
        //canvas1 icon
    canvas1.children[1].classList.add('text-success')
    canvas1.children[1].classList.remove('text-dark')
    canvas1.children[1].classList.remove('text-primary')
    canvas1.children[1].classList.remove('text-danger')
    canvas1.children[1].classList.remove('text-warning')
        //canvas2 mychher
    canvas2.children[0].classList.add('bg-success')
    canvas2.children[0].classList.remove('bg-dark')
    canvas2.children[0].classList.remove('bg-primary')
    canvas2.children[0].classList.remove('bg-danger')
    canvas2.children[0].classList.remove('bg-warning')
        //canvas2 icon
    canvas2.children[1].classList.add('text-success')
    canvas2.children[1].classList.remove('text-dark')
    canvas2.children[1].classList.remove('text-primary')
    canvas2.children[1].classList.remove('text-danger')
    canvas2.children[1].classList.remove('text-warning')
        //canvas3 mychher
    canvas3.children[0].classList.add('bg-success')
    canvas3.children[0].classList.remove('bg-dark')
    canvas3.children[0].classList.remove('bg-primary')
    canvas3.children[0].classList.remove('bg-danger')
    canvas3.children[0].classList.remove('bg-warning')
        //canvas3 icon
    canvas3.children[1].classList.add('text-success')
    canvas3.children[1].classList.remove('text-dark')
    canvas3.children[1].classList.remove('text-primary')
    canvas3.children[1].classList.remove('text-danger')
    canvas3.children[1].classList.remove('text-warning')

    //section
    section.children[0].children[0].children[0].children[0].classList.add('bg-success')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-dark')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-primary')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-danger')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-warning')
        //Bookings
    Bookings.children[0].children[0].children[0].classList.add('bg-success')
    Bookings.children[0].children[0].children[0].classList.remove('bg-primary')
    Bookings.children[0].children[0].children[0].classList.remove('bg-danger')
    Bookings.children[0].children[0].children[0].classList.remove('bg-warning')
    Bookings.children[0].children[0].children[0].classList.remove('bg-dark')
        //Bookings text
    Bookings.children[0].children[1].children[1].classList.add('text-success')
    Bookings.children[0].children[1].children[1].classList.remove('text-primary')
    Bookings.children[0].children[1].children[1].classList.remove('text-danger')
    Bookings.children[0].children[1].children[1].classList.remove('text-warning')
    Bookings.children[0].children[1].children[1].classList.remove('text-dark')
        //Bookings number
    Bookings.children[1].children[0].classList.add('text-success')
    Bookings.children[1].children[0].classList.remove('text-dark')
    Bookings.children[1].children[0].classList.remove('text-danger')
    Bookings.children[1].children[0].classList.remove('text-primary')
    Bookings.children[1].children[0].classList.remove('text-warning')
        //Today-Users
    TodayUsers.children[0].children[0].children[0].classList.add('bg-success')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-primary')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-danger')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-warning')
        //TodayUsers text
    TodayUsers.children[0].children[1].children[1].classList.add('text-success')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-dark')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-primary')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-danger')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-warning')
        //TodayUsers number
    TodayUsers.children[1].children[0].classList.add('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-dark')
    TodayUsers.children[1].children[0].classList.remove('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-primary')
    TodayUsers.children[1].children[0].classList.remove('text-warning')
        //Followers
    Followers.children[0].children[0].children[0].classList.add('bg-success')
    Followers.children[0].children[0].children[0].classList.remove('bg-dark')
    Followers.children[0].children[0].children[0].classList.remove('bg-primary')
    Followers.children[0].children[0].children[0].classList.remove('bg-danger')
    Followers.children[0].children[0].children[0].classList.remove('bg-warning')
        //Followers text
    Followers.children[0].children[1].children[1].classList.add('text-success')
    Followers.children[0].children[1].children[1].classList.remove('text-dark')
    Followers.children[0].children[1].children[1].classList.remove('text-primary')
    Followers.children[0].children[1].children[1].classList.remove('text-danger')
    Followers.children[0].children[1].children[1].classList.remove('text-warning')
        //Followers number
    Followers.children[1].children[0].classList.add('text-success')
    Followers.children[1].children[0].classList.remove('text-dark')
    Followers.children[1].children[0].classList.remove('text-danger')
    Followers.children[1].children[0].classList.remove('text-primary')
    Followers.children[1].children[0].classList.remove('text-warning')

    //Barcelona
    Barcelona.children[1].children[0].classList.add('text-success')
    Barcelona.children[1].children[0].classList.remove('text-dark')
    Barcelona.children[1].children[0].classList.remove('text-primary')
    Barcelona.children[1].children[0].classList.remove('text-danger')
    Barcelona.children[1].children[0].classList.remove('text-warning')
        //London
    London.children[1].children[0].classList.add('text-success')
    London.children[1].children[0].classList.remove('text-dark')
    London.children[1].children[0].classList.remove('text-primary')
    London.children[1].children[0].classList.remove('text-danger')
    London.children[1].children[0].classList.remove('text-warning')
        //Milan
    Milan.children[1].children[0].classList.add('text-success')
    Milan.children[1].children[0].classList.remove('text-dark')
    Milan.children[1].children[0].classList.remove('text-primary')
    Milan.children[1].children[0].classList.remove('text-danger')
    Milan.children[1].children[0].classList.remove('text-warning')

    //settingBtn
    settingBtn.classList.add('bg-success')
    settingBtn.classList.remove('bg-dark')
    settingBtn.classList.remove('bg-primary')
    settingBtn.classList.remove('bg-danger')
    settingBtn.classList.remove('bg-warning')
        //button
    buttonUp.classList.add('bg-success')
    buttonUp.classList.remove('bg-dark')
    buttonUp.classList.remove('bg-primary')
    buttonUp.classList.remove('bg-danger')
    buttonUp.classList.remove('bg-warning')


    //light mode 
    body.style.background = '#eeeeee42'
        //light mode heder
    header.classList.add('bg-light')
    header.children[0].children[0].style.background = '#e9ecef'
    header.children[1].children[0].style.background = '#e9ecef'
        //light mode section
    section.classList.add('bg-light')
    section.children[0].children[0].children[1].classList.add('text-dark')
        //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.add('text-dark')
            trUS.children[n].children[i].classList.add('text-dark')
            trGB.children[n].children[i].classList.add('text-dark')
            trBR.children[n].children[i].classList.add('text-dark')
        }
    }
    //table light 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.remove('text-light')
            trUS.children[n].children[i].classList.remove('text-light')
            trGB.children[n].children[i].classList.remove('text-light')
            trBR.children[n].children[i].classList.remove('text-light')
        }
    }
    //canvas light 
    for (let i = 2; i <= 4; i++) {
        canvas1.classList.add('bg-light')
        canvas2.classList.add('bg-light')
        canvas3.classList.add('bg-light')

        canvas1.children[i].classList.add('text-dark')
        canvas2.children[i].classList.add('text-dark')
        canvas3.children[i].classList.add('text-dark')
    }

    //Bookings light
    Bookings.classList.add('bg-light')
    Bookings.children[0].children[0].children[0].classList.remove('text-dark')
    Bookings.children[0].children[0].children[0].classList.add('text-light')
    Bookings.children[0].children[1].children[0].classList.add('text-dark')
    Bookings.children[1].children[1].classList.add('text-dark')
        //TodayUsers light
    TodayUsers.classList.add('bg-light')
    TodayUsers.children[0].children[0].children[0].classList.remove('text-dark')
    TodayUsers.children[0].children[0].children[0].classList.add('text-light')
    TodayUsers.children[0].children[1].children[0].classList.add('text-dark')
    TodayUsers.children[1].children[1].classList.add('text-dark')
        //Followers light
    Followers.classList.add('bg-light')
    Followers.children[0].children[0].children[0].classList.remove('text-dark')
    Followers.children[0].children[0].children[0].classList.add('text-light')
    Followers.children[0].children[1].children[0].classList.add('text-dark')
    Followers.children[1].children[1].classList.add('text-dark')

    //Barcelona light
    Barcelona.classList.add('bg-light')
    Barcelona.children[2].classList.remove('text-light')
    Barcelona.children[2].classList.add('text-dark')
    Barcelona.children[3].children[0].classList.remove('text-light')
    Barcelona.children[3].children[0].classList.add('text-dark')
    Barcelona.children[3].children[1].classList.remove('text-light')
    Barcelona.children[3].children[1].classList.add('text-dark')
        //London light
    London.classList.add('bg-light')
    London.children[2].classList.remove('text-light')
    London.children[2].classList.add('text-dark')
    London.children[3].children[0].classList.remove('text-light')
    London.children[3].children[0].classList.add('text-dark')
    London.children[3].children[1].classList.remove('text-light')
    London.children[3].children[1].classList.add('text-dark')
        //Milan light
    Milan.classList.add('bg-light')
    Milan.children[2].classList.remove('text-light')
    Milan.children[2].classList.add('text-dark')
    Milan.children[3].children[0].classList.remove('text-light')
    Milan.children[3].children[0].classList.add('text-dark')
    Milan.children[3].children[1].classList.remove('text-light')
    Milan.children[3].children[1].classList.add('text-dark')

    //footer
    footer.children[0].children[0].classList.remove('text-light')
    footer.children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[0].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[0].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[1].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[1].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[2].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[2].children[0].classList.add('text-dark')
    footer.children[0].children[1].children[3].children[0].classList.remove('text-light')
    footer.children[0].children[1].children[3].children[0].classList.add('text-dark')

    //settingBtn
    settingBtn.children[0].classList.remove('text-dark')
    settingBtn.children[0].classList.add('text-light')

    //button
    buttonUp.children[0].classList.remove('text-dark')
    buttonUp.children[0].classList.add('text-light')
})

//warning 
buttons.children[4].addEventListener('click', () => {
    Dashboards.classList.add('bg-warning')
    Dashboards.classList.remove('bg-primary')
    Dashboards.classList.remove('bg-danger')
    Dashboards.classList.remove('bg-success')
    Dashboards.classList.remove('bg-dark')
        //canvas1 mychher
    canvas1.children[0].classList.add('bg-warning')
    canvas1.children[0].classList.remove('bg-dark')
    canvas1.children[0].classList.remove('bg-primary')
    canvas1.children[0].classList.remove('bg-danger')
    canvas1.children[0].classList.remove('bg-success')
        //canvas1 icon
    canvas1.children[1].classList.add('text-warning')
    canvas1.children[1].classList.remove('text-dark')
    canvas1.children[1].classList.remove('text-primary')
    canvas1.children[1].classList.remove('text-danger')
    canvas1.children[1].classList.remove('text-success')
        //canvas2 mychher
    canvas2.children[0].classList.add('bg-warning')
    canvas2.children[0].classList.remove('bg-dark')
    canvas2.children[0].classList.remove('bg-primary')
    canvas2.children[0].classList.remove('bg-danger')
    canvas2.children[0].classList.remove('bg-success')
        //canvas2 icon
    canvas2.children[1].classList.add('text-warning')
    canvas2.children[1].classList.remove('text-dark')
    canvas2.children[1].classList.remove('text-primary')
    canvas2.children[1].classList.remove('text-danger')
    canvas2.children[1].classList.remove('text-success')
        //canvas3 mychher
    canvas3.children[0].classList.add('bg-warning')
    canvas3.children[0].classList.remove('bg-dark')
    canvas3.children[0].classList.remove('bg-primary')
    canvas3.children[0].classList.remove('bg-danger')
    canvas3.children[0].classList.remove('bg-success')
        //canvas3 icon
    canvas3.children[1].classList.add('text-warning')
    canvas3.children[1].classList.remove('text-dark')
    canvas3.children[1].classList.remove('text-primary')
    canvas3.children[1].classList.remove('text-danger')
    canvas3.children[1].classList.remove('text-success')

    //section
    section.children[0].children[0].children[0].children[0].classList.add('bg-warning')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-dark')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-primary')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-danger')
    section.children[0].children[0].children[0].children[0].classList.remove('bg-success')
        //Bookings
    Bookings.children[0].children[0].children[0].classList.add('bg-warning')
    Bookings.children[0].children[0].children[0].classList.remove('bg-primary')
    Bookings.children[0].children[0].children[0].classList.remove('bg-danger')
    Bookings.children[0].children[0].children[0].classList.remove('bg-success')
    Bookings.children[0].children[0].children[0].classList.remove('bg-dark')
        //Bookings text
    Bookings.children[0].children[1].children[1].classList.add('text-warning')
    Bookings.children[0].children[1].children[1].classList.remove('text-primary')
    Bookings.children[0].children[1].children[1].classList.remove('text-danger')
    Bookings.children[0].children[1].children[1].classList.remove('text-success')
    Bookings.children[0].children[1].children[1].classList.remove('text-dark')
        //Bookings number
    Bookings.children[1].children[0].classList.add('text-warning')
    Bookings.children[1].children[0].classList.remove('text-primary')
    Bookings.children[1].children[0].classList.remove('text-danger')
    Bookings.children[1].children[0].classList.remove('text-success')
    Bookings.children[1].children[0].classList.remove('text-dark')
        //Today-Users
    TodayUsers.children[0].children[0].children[0].classList.add('bg-warning')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-primary')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-danger')
    TodayUsers.children[0].children[0].children[0].classList.remove('bg-success')
        //TodayUsers text
    TodayUsers.children[0].children[1].children[1].classList.add('text-warning')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-dark')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-primary')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-danger')
    TodayUsers.children[0].children[1].children[1].classList.remove('text-success')
        //Followers number
    TodayUsers.children[1].children[0].classList.add('text-warning')
    TodayUsers.children[1].children[0].classList.remove('text-primary')
    TodayUsers.children[1].children[0].classList.remove('text-danger')
    TodayUsers.children[1].children[0].classList.remove('text-success')
    TodayUsers.children[1].children[0].classList.remove('text-dark')
        //Followers
    Followers.children[0].children[0].children[0].classList.add('bg-warning')
    Followers.children[0].children[0].children[0].classList.remove('bg-dark')
    Followers.children[0].children[0].children[0].classList.remove('bg-primary')
    Followers.children[0].children[0].children[0].classList.remove('bg-danger')
    Followers.children[0].children[0].children[0].classList.remove('bg-success')
        //Followers text
    Followers.children[0].children[1].children[1].classList.add('text-warning')
    Followers.children[0].children[1].children[1].classList.remove('text-dark')
    Followers.children[0].children[1].children[1].classList.remove('text-primary')
    Followers.children[0].children[1].children[1].classList.remove('text-danger')
    Followers.children[0].children[1].children[1].classList.remove('text-success')
        //Followers number
    Followers.children[1].children[0].classList.add('text-warning')
    Followers.children[1].children[0].classList.remove('text-primary')
    Followers.children[1].children[0].classList.remove('text-danger')
    Followers.children[1].children[0].classList.remove('text-success')
    Followers.children[1].children[0].classList.remove('text-dark')

    //Barcelona
    Barcelona.children[1].children[0].classList.add('text-warning')
    Barcelona.children[1].children[0].classList.remove('text-dark')
    Barcelona.children[1].children[0].classList.remove('text-primary')
    Barcelona.children[1].children[0].classList.remove('text-danger')
    Barcelona.children[1].children[0].classList.remove('text-success')
        //London
    London.children[1].children[0].classList.add('text-warning')
    London.children[1].children[0].classList.remove('text-dark')
    London.children[1].children[0].classList.remove('text-primary')
    London.children[1].children[0].classList.remove('text-danger')
    London.children[1].children[0].classList.remove('text-success')
        //Milan
    Milan.children[1].children[0].classList.add('text-warning')
    Milan.children[1].children[0].classList.remove('text-dark')
    Milan.children[1].children[0].classList.remove('text-primary')
    Milan.children[1].children[0].classList.remove('text-danger')
    Milan.children[1].children[0].classList.remove('text-success')

    //settingBtn
    settingBtn.classList.add('bg-warning')
    settingBtn.classList.remove('bg-dark')
    settingBtn.classList.remove('bg-primary')
    settingBtn.classList.remove('bg-danger')
    settingBtn.classList.remove('bg-success')
    settingBtn.children[0].classList.add('text-dark')
    settingBtn.children[0].classList.remove('text-light')

    //button
    buttonUp.classList.add('bg-warning')
    buttonUp.classList.remove('bg-dark')
    buttonUp.classList.remove('bg-primary')
    buttonUp.classList.remove('bg-danger')
    buttonUp.classList.remove('bg-success')
    buttonUp.children[0].classList.add('text-dark')
    buttonUp.children[0].classList.remove('text-light')

    //dark mode 
    body.style.background = '#202940'
        //dark mode heder
    header.classList.remove('bg-light')
    header.style.background = '#202940'
    header.children[0].children[0].style.background = '#202940'
    header.children[1].children[0].style.background = '#202940'
        //dark mode section
    section.style.background = '#202940'
    section.classList.remove('bg-light')
    section.classList.remove('shadow-lg')
    section.children[0].children[0].children[1].classList.add('text-light')
        //table dark 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.remove('text-dark')
            trUS.children[n].children[i].classList.remove('text-dark')
            trGB.children[n].children[i].classList.remove('text-dark')
            trBR.children[n].children[i].classList.remove('text-dark')
        }
    }
    //table dark 
    for (let n = 1; n <= 4; n++) {
        for (let i = 0; i < 2; i++) {
            trDE.children[n].children[i].classList.add('text-light')
            trUS.children[n].children[i].classList.add('text-light')
            trGB.children[n].children[i].classList.add('text-light')
            trBR.children[n].children[i].classList.add('text-light')
        }
    }

    for (let i = 2; i <= 4; i++) {
        canvas1.classList.remove('bg-light')
        canvas2.classList.remove('bg-light')
        canvas3.classList.remove('bg-light')

        canvas1.children[i].classList.remove('text-dark')
        canvas2.children[i].classList.remove('text-dark')
        canvas3.children[i].classList.remove('text-dark')

        canvas1.children[i].classList.add('text-light')
        canvas2.children[i].classList.add('text-light')
        canvas3.children[i].classList.add('text-light')
    }
    canvas1.style.background = '#202940'
    canvas2.style.background = '#202940'
    canvas3.style.background = '#202940'


    //Bookings dark
    Bookings.style.background = '#202940'
    Bookings.classList.remove('bg-light')
    Bookings.classList.remove('shadow-lg')
    Bookings.children[0].children[0].children[0].classList.add('text-dark')
    Bookings.children[0].children[0].children[0].classList.remove('text-light')
    Bookings.children[0].children[1].children[0].classList.add('text-light')
    Bookings.children[0].children[1].children[0].classList.remove('text-dark')
    Bookings.children[1].children[1].classList.add('text-light')
    Bookings.children[1].children[1].classList.remove('text-dark')
        //TodayUsers dark
    TodayUsers.style.background = '#202940'
    TodayUsers.classList.remove('bg-light')
    TodayUsers.classList.remove('shadow-lg')
    TodayUsers.children[0].children[0].children[0].classList.add('text-dark')
    TodayUsers.children[0].children[0].children[0].classList.remove('text-light')
    TodayUsers.children[0].children[1].children[0].classList.add('text-light')
    TodayUsers.children[0].children[1].children[0].classList.remove('text-dark')
    TodayUsers.children[1].children[1].classList.add('text-light')
    TodayUsers.children[1].children[1].classList.remove('text-dark')
        //Followers dark
    Followers.style.background = '#202940'
    Followers.classList.remove('bg-light')
    Followers.classList.remove('shadow-lg')
    Followers.children[0].children[0].children[0].classList.add('text-dark')
    Followers.children[0].children[0].children[0].classList.remove('text-light')
    Followers.children[0].children[1].children[0].classList.add('text-light')
    Followers.children[0].children[1].children[0].classList.remove('text-dark')
    Followers.children[1].children[1].classList.add('text-light')
    Followers.children[1].children[1].classList.remove('text-dark')

    //Barcelona dark
    Barcelona.style.background = '#202940'
    Barcelona.classList.remove('bg-light')
    Barcelona.children[2].classList.remove('text-dark')
    Barcelona.children[2].classList.add('text-light')
    Barcelona.children[3].children[0].classList.remove('text-dark')
    Barcelona.children[3].children[0].classList.add('text-light')
    Barcelona.children[3].children[1].classList.remove('text-dark')
    Barcelona.children[3].children[1].classList.add('text-light')
        //London dark
    London.style.background = '#202940'
    London.classList.remove('bg-light')
    London.children[2].classList.remove('text-dark')
    London.children[2].classList.add('text-light')
    London.children[3].children[0].classList.remove('text-dark')
    London.children[3].children[0].classList.add('text-light')
    London.children[3].children[1].classList.remove('text-dark')
    London.children[3].children[1].classList.add('text-light')
        //Milan dark
    Milan.style.background = '#202940'
    Milan.classList.remove('bg-light')
    Milan.children[2].classList.remove('text-dark')
    Milan.children[2].classList.add('text-light')
    Milan.children[3].children[0].classList.remove('text-dark')
    Milan.children[3].children[0].classList.add('text-light')
    Milan.children[3].children[1].classList.remove('text-dark')
    Milan.children[3].children[1].classList.add('text-light')

    //footer
    footer.children[0].children[0].classList.add('text-light')
    footer.children[0].children[0].classList.remove('text-dark')
    footer.children[0].children[1].children[0].children[0].classList.add('text-light')
    footer.children[0].children[1].children[0].children[0].classList.remove('text-dark')
    footer.children[0].children[1].children[1].children[0].classList.add('text-light')
    footer.children[0].children[1].children[1].children[0].classList.remove('text-dark')
    footer.children[0].children[1].children[2].children[0].classList.add('text-light')
    footer.children[0].children[1].children[2].children[0].classList.remove('text-dark')
    footer.children[0].children[1].children[3].children[0].classList.add('text-light')
    footer.children[0].children[1].children[3].children[0].classList.remove('text-dark')
})

// btn background
let sidebar = document.getElementById('sidebar'),
    bg1 = document.getElementById('bg1'),
    bg2 = document.getElementById('bg2'),
    bg3 = document.getElementById('bg3');
bg1.addEventListener('click', () => {
    sidebar.style.background = 'url(css/images/pexels-eberhard-grossgasteiger-2098427.jpg)'
    sidebar.style.backgroundSize = 'cover';
})
bg2.addEventListener('click', () => {
    sidebar.style.background = 'url(css/images/pexels-eberhard-grossgasteiger-1624438.jpg)'
    sidebar.style.backgroundSize = 'cover';
})
bg3.addEventListener('click', () => {
    sidebar.style.background = 'url(css/images/pexels-eberhard-grossgasteiger-1624496.jpg)'
    sidebar.style.backgroundSize = 'cover';
})

//
let mySwitchFixed = document.getElementById('mySwitch-Fixed');
mySwitchFixed.addEventListener('click', () => {
    header.classList.toggle('sticky-top')
})

//mini-sidebar on
let mini = document.getElementById('mini'),
    mnainSidebar = document.getElementById('mnain-sidebar');
mini.addEventListener('click', () => {


    mnainSidebar.classList.toggle('col-xl-3')
    mnainSidebar.classList.toggle('col-lg-3')
    mnainSidebar.classList.toggle('col-md-3')
    mnainSidebar.classList.toggle('col-sm-2')
    mnainSidebar.classList.toggle('col-2')
    mnainSidebar.classList.toggle('col-1')

    sidebar.classList.toggle('col-xl-3')
    sidebar.classList.toggle('col-lg-3')
    sidebar.classList.toggle('col-md-3')
    sidebar.classList.toggle('col-sm-2')
    sidebar.classList.toggle('col-2')
    sidebar.classList.toggle('col-1')

    mini.children[0].classList.toggle('d-none')
    mini.children[1].classList.toggle('d-none')

    sidebar.children[0].children[0].children[1].classList.toggle('d-none')
    sidebar.children[0].children[1].children[1].classList.toggle('d-none')
    sidebar.children[0].children[1].children[2].classList.toggle('d-none')
    sidebar.children[0].children[4].children[1].classList.toggle('d-none')
    sidebar.children[0].children[4].children[2].classList.toggle('d-none')
    sidebar.children[0].children[7].children[1].classList.toggle('d-none')
    sidebar.children[0].children[7].children[2].classList.toggle('d-none')
    sidebar.children[0].children[9].children[1].classList.toggle('d-none')
    sidebar.children[0].children[9].children[2].classList.toggle('d-none')
    sidebar.children[0].children[11].children[1].classList.toggle('d-none')
    sidebar.children[0].children[11].children[2].classList.toggle('d-none')
    sidebar.children[0].children[13].children[1].classList.toggle('d-none')
    sidebar.children[0].children[13].children[2].classList.toggle('d-none')
    sidebar.children[0].children[17].children[1].classList.toggle('d-none')
    sidebar.children[0].children[17].children[2].classList.toggle('d-none')
    sidebar.children[0].children[19].children[1].classList.toggle('d-none')
    sidebar.children[0].children[20].children[1].classList.toggle('d-none')

    sidebar.children[0].children[1].children[0].classList.toggle('mini-img-sidebar')
    sidebar.children[0].children[4].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[7].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[9].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[11].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[13].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[17].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[19].classList.toggle('mini-icon-sidebar')
    sidebar.children[0].children[20].classList.toggle('mini-icon-sidebar')
})

//mini-sidebar off
sidebar.addEventListener('mouseover', () => {
    if (sidebar.classList.contains('col-1')) {
        mnainSidebar.classList.toggle('col-3')
        mnainSidebar.classList.toggle('col-1')
        sidebar.classList.toggle('col-3')
        sidebar.classList.toggle('col-1')
        mini.children[0].classList.toggle('d-none')
        mini.children[1].classList.toggle('d-none')

        sidebar.children[0].children[0].children[1].classList.toggle('d-none')
        sidebar.children[0].children[1].children[1].classList.toggle('d-none')
        sidebar.children[0].children[1].children[2].classList.toggle('d-none')
        sidebar.children[0].children[4].children[1].classList.toggle('d-none')
        sidebar.children[0].children[4].children[2].classList.toggle('d-none')
        sidebar.children[0].children[7].children[1].classList.toggle('d-none')
        sidebar.children[0].children[7].children[2].classList.toggle('d-none')
        sidebar.children[0].children[9].children[1].classList.toggle('d-none')
        sidebar.children[0].children[9].children[2].classList.toggle('d-none')
        sidebar.children[0].children[11].children[1].classList.toggle('d-none')
        sidebar.children[0].children[11].children[2].classList.toggle('d-none')
        sidebar.children[0].children[13].children[1].classList.toggle('d-none')
        sidebar.children[0].children[13].children[2].classList.toggle('d-none')
        sidebar.children[0].children[17].children[1].classList.toggle('d-none')
        sidebar.children[0].children[17].children[2].classList.toggle('d-none')
        sidebar.children[0].children[19].children[1].classList.toggle('d-none')
        sidebar.children[0].children[20].children[1].classList.toggle('d-none')

        sidebar.children[0].children[1].children[0].classList.toggle('mini-img-sidebar')
        sidebar.children[0].children[4].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[7].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[9].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[11].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[13].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[17].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[19].classList.toggle('mini-icon-sidebar')
        sidebar.children[0].children[20].classList.toggle('mini-icon-sidebar')
    }
})

//mySwitch-hiden sidebar
let mySwitchheiden = document.getElementById('mySwitch-hiden');
mySwitchheiden.addEventListener('click', () => {
    mnainSidebar.classList.toggle('col-3')
    sidebar.classList.toggle('hiden')
})

// up button
onscroll = () => {
    let scrollPosation = document.documentElement.scrollTop;
    if (scrollPosation >= 100) {
        buttonUp.classList.add("show");
    } else {
        buttonUp.classList.remove("show");
    }
}
buttonUp.addEventListener('click', () => {
    window.scroll(0, 0)
})
