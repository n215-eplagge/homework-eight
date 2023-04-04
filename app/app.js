var homeBody = `
<div class="hero">
<div class="banner">bikepacking.com
</div>
<div class="callout">
    <p>The gear index</p>
    <h1>ROUND UP OF</h1>
    <h1>DROP BAR TWENTY NINE</h1>
</div>
</div>`

var newsBody = `
<div class="dispatch">
    <div class="heading">
        <p>DISPATCH</p>
    </div>
    <div class="picture-holder">
        <div class="news-container">
            <p>8 HOURS AGO</p>
            <div class="kingdom"></div>
            <a href="#">The Lanna Kingdom Interview (Video)</a>
        </div>
        <div class="news-container">
            <p>9 HOURS AGO</p>
            <div class="hayduke"></div>
            <a href="#">ANNOUNCING THE 2023 ESKER HAYDUKE</a>
        </div>
        <div class="news-container">
            <p>9 HOURS AGO</p>
            <div class="weekend"></div>
            <a href="#">WEEKEND SNAPSHOT</a>
        </div>
        <div class="news-container">
            <p>JAN 28</p>
            <div class="scratch"></div>
            <a href="#">DON'T SCRATCH (FILM)</a>
        </div>
        <div class="news-container">
            <p>JAN 27</p>
            <div class="friday"></div>
            <a href="#">FRIDAY DEBRIEF: TI CHAINRINGS, 2023 MIKE HALL BURSARY, ALL-TERRAIN WAGONS, AND MORE...</a>
        </div>
        <div class="news-container">
            <p>JAN 27</p>
            <div class="alfie"></div>
            <a href="#">ALFIE THE ODD JOB BOY (FILM)</a>
        </div>
    </div>
    <div class="load">
        <a href="#">LOAD MORE</a>
    </div>
</div>
`

var infoBody = `
<div class="explain">
    <div class="wrapper">
    <div class="advert"></div>
    <div class="explain-text">
        <p>BIKEPACKING.com is the resource for the latest bikepacking routes, gear reviews, inspiration, planning insight, adventure stories, news, and events. Brought to you by folks addicted to campfire smoke, chromoly steel & getting lost.</p>
    </div>
    <div class="bikepacking"></div>
    </div>
</div>
<div class="explore">
    <div class="banner">EXPLORE</div>
    <a href="#" class="explore-routes"></a>
    <a href="#" class="explore-gear"></a>
    <a href="#" class="explore-bikes"></a>
    <a href="#" class="explore-lists"></a>
</div>
<div class="companies">
    <div class="banner">RAD COMPANIES THAT SUPPORT US</div>
    <div class="wrapper">
    <div class="mountain"></div>
    <div class="kona"></div>
    <div class="blackburn"></div>
    <div class="pedal"></div>
    <div class="nrth"></div>
    <div class="jones"></div>
    <div class="tooth"></div>
    <div class="ride"></div>
</div>
</div>`

var bikeBody = `
<div class="statement">
<div class="wrapper">
    <div class="snake"></div>
    <div class="text">
        <p>BIKEPACKING.com is dedicated to exploration by bicycle. We inspire and inform through original bikepacking routes, stories, and coverage of the gear, news, and events that make our community thrive. We believe travel by bicycle has the power to encourage conservation, inclusivity, and respect for all people and cultures. More here.</p>
    </div>
    <div class="icons">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-wifi"></i>
    </div>
    <div class="info-wrapper">
        <div class="info">
            <p class="header">WHERE TO START</p>
            <a href="#">BIKEPACKING 101</a>
            <br>
            <a href="#">GUIDE TO BIKEPACKING BAGS</a>
            <br>
            <a href="#">THE POWER OF AN OVERNIGHTER</a>
            <br>
            <a href="#">ADVICE FOR NEW BIKEPACKERS</a>
            <br>
            <a href="#">BIKEPACKING VIDEOS</a>
            <br>
            <a href="#">BIKEPACKING ROUTES MAP</a>
        </div>
        <div class="info">
            <p class="header">GEAR NERDERY</p>
            <a href="#">THE GEAR INDEX</a>
            <br>
            <a href="#">BIKEPACKING GEAR THAT LASTS</a>
            <br>
            <a href="#">BIKEPACKING BIKES</a>
            <br>
            <a href="#">BIKEPACKING GEAR LISTS</a>
            <br>
            <a href="#">BIKEPACKING BAG REVIEWS</a>
            <br>
            <a href="#">A BIKEPACKING REPAIR KIT</a>
        </div>
        <div class="info">
            <p class="header">RECOMMENDED READING</p>
            <a href="#">#PUBLIC-LANDS</a>
            <br>
            <a href="#">BIKEPACKING ROUTE PLANNING GUIDE</a>
            <br>
            <a href="#">RIDER AND RIG</a>
            <br>
            <a href="#">LEAVE NO TRACE</a>
            <br>
            <a href="#">BOUNDLESS</a>
            <br>
            <a href="#">FREEDOM</a>
        </div>
        <div class="info">
            <p class="header">ABOUT US</p>
            <a href="#">ABOUT BIKEPACKING.COM</a>
            <br>
            <a href="#">CONTACT US</a>
            <br>
            <a href="#">SUGGEST A DISPATCH</a>
            <br>
            <a href="#">SHARE YOUR ROUTE</a>
            <br>
            <a href="#">BIKEPACKING COLLECTIVE LOGIN</a>
            <br>
            <a href="#">BECOME A MEMBER</a>
        </div>
    </div>
    <footer>© Copyright Year and Date BIKEPACKING.com LLC / all designs, photos & articles are property of BIKEPACKING.com</footer>
</div>
`

function initFunction(){
    let navID;
    $("nav a").on("click", function(e){
        navID = e.currentTarget.id;
        let contentID = navID + "Body";
        updateContent(contentID);
        
    })
}

function updateContent(contentName){
    $("#inject").html(eval(contentName));
}


$(document).ready(function (){
    updateContent('homeBody');
    initFunction();
})

