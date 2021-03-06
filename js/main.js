//Navigation Bar
$(".nav-link").eq(0).addClass("active")

$(function(){
    $(window).bind("resize",function(){
        if($(this).width() <768){
            $('#navbar').removeClass('rounded-pill').removeClass('w-75')
        }
        else{
            $('#navbar').addClass('rounded-pill').addClass('w-75')
        }
    })
})

//For Dark Mode
function goDarkMode(){
    if (document.getElementById("light-dark").innerText == "Dark"){
        document.documentElement.setAttribute('data-theme', 'dark')
        //button
        $("#light-dark").addClass("btn-light").removeClass("btn-dark")
        document.getElementById("light-dark").innerText = "Light"
        $("body").addClass("text-white")
        $(".jumbotron").addClass("bg-dark")
        $("hr").addClass("border-white")
        $("#img-web").attr('src', 'img/web-primary.png')
        $("#img-cloud").attr('src', 'img/cloud-primary.png')
        $("#img-db").attr('src', 'img/db-primary.png')
        $("#img-money").attr('src', 'img/money-primary.png')
        $("#img-robot").attr('src', 'img/robot-primary.png')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        //button
        $("#light-dark").addClass("btn-dark").removeClass("btn-light")
        document.getElementById("light-dark").innerText = "Dark";
        $("body").removeClass("text-white")
        $(".jumbotron").removeClass("bg-dark")
        $("hr").removeClass("border-white")
        $("#img-web").attr('src', 'img/web.png')
        $("#img-cloud").attr('src', 'img/cloud.png')
        $("#img-db").attr('src', 'img/db.png')
        $("#img-money").attr('src', 'img/money.png')
        $("#img-robot").attr('src', 'img/robot.png')
    }
}
let toggleButton = document.getElementById("light-dark")
toggleButton.addEventListener('click', goDarkMode)

/** 
Format
Add shadows to cards on mouse hover. **/
$(".card").hover(
    function() {
        $(this).addClass('shadow-lg'); 
    },
    function() {
        $(this).removeClass('shadow-lg');
});
$(".card-text").addClass("text-justify")

// Display link to My Repository
$("#repo-title").hover(
    function() {
        $(this).text("github.com/marvintensuan"); 
    },
    function() {
        $(this).text("My GitHub Repository"); 
});

// Calculate work experiences
let today = new Date()
$("#work-xp").text(today.getFullYear() - 2018)

// Load image from external sources
$(window).scroll(function(){
        $("#img-unsplash-1").attr('src', "https://images.unsplash.com/photo-1615001257674-351efb7d40ac")
    }
)