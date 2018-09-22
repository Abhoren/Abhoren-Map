var locations=[
    ["odea",-15,-90],       // index: 0  
    ["shattered",53,-82.62],   // index: 1
    ["ucul",51.84,15.12],         // index: 2
    ["destiny",39,90.35],      // index: 3
    ["iogos",-23,99],       // index: 4
    ["prelora",-54,-49],    // index: 5
    ["ascension",2.5,-3.5]     // index: 6
];

// var JSONs=[
//     ['{"name":"Conor Lilley", "image":"img/conorselfie.jpg", "libraries":"To create this interactive map I have used the leafletjs library, the jquery library, and the Leaflet-sidebar.js plugin.", "scripts":"n/a", "software":"This site was made using Visual Studio Code and using Google Drive to write the lore", "sources":"<a href = "https://github.com/Leaflet/Leaflet">Leaflet.js:</a><br><a href = "https://jquery.com">JQuery:</a><br><a href = "https://github.com/Turbo87/leaflet-sidebar">Leaflet-sidebar.js:</a>", "inspiration":"Much of the inspiration of this work comes from <a href ="https://loremaps.azurewebsites.net/Maps/Faerun">Loremap\'s Faerun map</a><br>A lot of ideas have been inspired from various works of fiction such as Lord of the Rings and Dungeons and Dragons.", "work":"In creating this site, I have utilized Leaflet to create markers that fully read json files to fill the sidebar that opens when clicked. I also created much of the content inside the markers, including the calendar, lore for several nations, and god pantheons.", "learned":"I especially learned from this project that I should always start earlier than I think I should. This project ended up being really fun, yet challenging. I definitely enriched my understanding of javascript and how to implement javascript libraries to make something really cool. I also learned that creating lore beforehand is much easier than writing while you are placing markers.", "struggles":"I especially struggled on this project with filling a sidebar with information when the marker was clicked. It took me a few days to work out how to use a json file to fill the markers, but once I did it was a big relief. Another thing I struggled with on this project was creating lore on the spot for many locations, as we had not previously written about them.", "above_and_beyond":"The original idea was to only have a few workable markers on the map. I believe the amount of markers and lore inside of each marker really shows how much work both me and Matthew have put into this. I learned how to read in jsons instead of just hard coding a few markers. We also created markers for all the other continents that display information that is helpful to the viewer about what they can one day expect in one of those areas. All in all, I believe we did our work well, and I look forward to five more continents."}'],
    
//     ['{"name":"Matthew Paseltiner", "image":"img/solarisPic.jpg", "libraries":"", "scripts":"", "software":"", "sources":"", "inspiration":"", "work":"", "learned":"", "struggles":"", "above_and_beyond":""}']
// ];

var map = L.map("map").setView([0, 0], 1);
L.tileLayer("Abhoren Website/maps/worldMap/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxZoom: 4,
    continuousWorld: false,
    noWrap: true,
}).addTo(map);
var contIcon = L.icon({
    iconUrl: "Abhoren Website/scripts/leaflet/images/continentIcon.svg",
    iconSize: [32, 32]
});
//var popup = L.popup();        
var markers=[]; //0 = Odea, 1 = The Shattered Isles, 2 = Ucul, 3 = The Isle of Destiny, 4 = Iogos, 5 = Prelora, 6 = Isle of Ascension
for(var i=0;i<locations.length;i++){
    if(i==0){
        var odeaPopup = L.popup({minWidth: 100})
            .setContent("<h2><b>Odea</b></h2><button type='button' id='toOdea' onclick='loadContinent(0)'>Explore Odea</button>");
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})
        .bindPopup(odeaPopup)
        //<button type='button' id='toOdea'>Explore Odea</button>
        //<p><a href='major/odea.html' class='button'>Exlpore Odea</a></p>
        .addTo(map);
    }
    if(i==1){
        var shatteredIslesPopup = L.popup({minWidth: 500})
            .setContent("<h2><b>The Shattered Isles</b></h2><p>This landmass was, until recently, a solid continent. After two great wizards had a realm shaking duel the land shattered. Now the landmass is known as the Shattered Isles but nothing else is known as the residual magical energy makes exploration impossible even for the gods of this universe.</p><p>In the future when the magical energy settles a more detailed map will be created for this region.</p><p><br>**In the future a more in-depth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})
        .bindPopup(shatteredIslesPopup)
        .addTo(map);
    }
    else if(i==2){
        var uculPopup = L.popup({minWidth: 500})
            .setContent("<h2><b>Ucul</b></h2><p>When the current cycle of this world was started, Ucul was used by the gods' as a testing ground for new creatures. This land is wild, untamed and full of unspeakable horrors that are the gods failed experiments. It is a land completely unfit for normal mortal civilizations. However, the curiosity of some races is insatiable and a few daring mortals have begun to attempt colonization of this continent.</p><p>Will their curiosity be their downfall or are they determined enough to tame this treacherous land?</p><p><br>**In the future a more in-depth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");           
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})            
        .bindPopup(uculPopup)
        .addTo(map);
    }
    else if(i==3){
        var isleOfDestinyPopup = L.popup({minWidth: 500})
            .setContent("<h2><b>The Isle of Destiny</b></h2><p>Etune the Goddess of Destiny has gathered a large organization of followers known as The Assembly of the Everknowing Mistress to protect the destinies of the races of Abhoren. The Isle of Destiny is the main gathering point of the Assembly and home to their leader, The Whisper of the Mistress. The Assembly of the Everknowing Mistress keeps knowledge of this land a secret and all outsiders off of this land. Only maps created by the Assembly have the Isle of Destiny depicted.</p> <p><br>**In the future a more in-depth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})
        .bindPopup(isleOfDestinyPopup)
        .addTo(map);
    }
    else if(i==4){
        var iogosPopup = L.popup({minWidth: 500})
            .setContent("<h2><b>Iogos</b></h2><p>Iogos is a land with the most radical changes in geography. The major mountain ranges act as borders containing different climates. The westernmost part of the land is covered in fertile grassland, rivers, and the occasional forest. This part of Iogos is mostly inhabited by a civilization known for their agricultural expertise. They are the breadbasket of Abhoren, supplying food throughout the kingdoms. The central part of Iogos is covered in a desert with temperatures making it inhabitable except for the Lizardfolk who find the hot temperatures to be ideal because of their cold-blooded biology. Few Lizardfolk venture outside of the comfort of the desert. The Eastern part of Iogos is covered in dense forest home to a massive population of Foeden and other creatures of nature. The large mountain ranges are home to many a Mynyden kingdom and the occasional wandering tribe of giant Gol.</p><p><br>**In the future a more in-depth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})            
        .bindPopup(iogosPopup)
        .addTo(map);
    }
    else if(i==5){
        var preloraPopup = L.popup({minWidth: 500})  
            .setContent("<h2><b>Prelora</b></h2><p>The southern half of Prelora is covered in a frozen tundra inhabited by nomadic tribes of the Gol. The northern half of Prelora is inhabited by a single kingdom. This kingdom is one of the most diverse kingdoms in Abhoren. The mortal races of Prelora have put aside their usual quarrels and feuds and banded together. Their diversity is one of necessity as their combined knowledge and skills are needed to fend off the Gol whenever a tribe decides to move North and pillage the land.</p><p>There are times where the Savage Races have not attacked in many generations. During these times the relations between the mortal races begin to fray as the absence of a common enemy causes unrest among those that would not naturally live together. The occasional skirmish will break out as a faction of either Syffren or Mynyden, the most restless and quick-tempered of these races, attempts to wrest control of a city and establish their own 'pure' city.</p><p><br>**In the future a more in-depth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");              
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})
        .bindPopup(preloraPopup)
        .addTo(map);
    }
    else if(i==6){
        var isleOfAscencionPopup = L.popup({minWidth: 500})  
            .setContent("<h2><b>The Isle of Ascension</b></h2><p>Almost nothing is known about this tiny island. What is known is this:<ul> <li>this land lies somewhere between the mortal realm(Abhoren) and the divine realm of the gods</li><li>only a god or a mortal on the path to godhood is able to step foot on this island</li><li>it is the only location to remain the same when the gods wipe the world to begin a new cycle</li></ul></p><p>Perhaps there will come a time when a god grants the mortals knowledge of the geography of the Isle of Ascension.</p><p><br>**In the future a more indepth map, similar to Odea, will be made by the creators of this Abhoren. World building is more time consuming and energy intensive than they originally thought.**</p>");              
        marker=new L.marker([locations[i][1],locations[i][2]],{icon:contIcon})
        .bindPopup(isleOfAscencionPopup)
        .addTo(map);
    }
    //marker.on('click',(e)=> {this.popitup(e)});
    markers.push(marker);
}
map.on('click', onMapClick);

function popitup(e) {
    for(var x=0;x<markers.length;x++){
        if(markers[x]==e.target && x == 0){
            window.location.href = "Abhoren Website/major/"+locations[x][0]+".html";
        }
    }
}

function onMapClick(e) {
    //alert("You clicked the map at " + e.latlng);
    if(leftDocumentationSiderbar.isVisible()){
        leftDocumentationSiderbar.toggle();
    }
    if(rightDocumentationSidebar.isVisible()){
        rightDocumentationSidebar.toggle();
    }
}

// var sidebar = L.control.sidebar('sidebar');
// map.addControl(sidebar);

var documentationButton = L.easyButton("fa fa-info-circle", function(btn, map){
    loadDocumentation();
}, "documentation").addTo(map);

var leftDocumentationSiderbar = L.control.sidebar('sidebar-left', { position: 'left' });
var rightDocumentationSidebar = L.control.sidebar('sidebar-right', { position: 'right' });
map.addControl(rightDocumentationSidebar);
map.addControl(leftDocumentationSiderbar);


function loadDocumentation(){
    leftDocumentationSiderbar.toggle();
    rightDocumentationSidebar.toggle();
    // var leftObj=JSON.parse(JSONs[0]);
    // document.getElementById("name-left").innerHTML = leftObj.name+ "\'s Documentation";
    // document.getElementById("image-left").innerHTML = '<img style="height: 300px; width: 300px; "src='+leftObj.image+' alt='+leftObj.name+'>';
    // document.getElementById("libraries-left").innerHTML = leftObj.libraries;
    // document.getElementById("scripts-left").innerHTML = leftObj.scripts;
    // document.getElementById("software-left").innerHTML = leftObj.software;
    // document.getElementById("sources-left").innerHTML = leftObj.sources;
    // document.getElementById("inspiration-left").innerHTML = leftObj.inspiration;
    // document.getElementById("work-left").innerHTML = leftObj.work;
    // document.getElementById("learned-left").innerHTML = leftObj.learned;
    // document.getElementById("struggles-left").innerHTML = leftObj.struggles;
    // document.getElementById("above_and_beyond-left").innerHTML = leftObj.above_and_beyond;
    // var rightObj=JSON.parse(JSONs[1]);
    // document.getElementById("name-right").innerHTML = rightObj.name+ "\'s Documentation";
    // document.getElementById("image-right").innerHTML = '<img style="height: 300px; width: 300px; "src='+rightObj.image+' alt='+rightObj.name+'>';
    // document.getElementById("libraries-right").innerHTML = rightObj.libraries;
    // document.getElementById("scripts-right").innerHTML = rightObj.scripts;
    // document.getElementById("software-right").innerHTML = rightObj.software;
    // document.getElementById("sources-right").innerHTML = rightObj.sources;
    // document.getElementById("inspiration-right").innerHTML = rightObj.inspiration;
    // document.getElementById("work-right").innerHTML = rightObj.work;
    // document.getElementById("learned-right").innerHTML = rightObj.learned;
    // document.getElementById("struggles-right").innerHTML = rightObj.struggles;
    // document.getElementById("above_and_beyond-right").innerHTML = rightObj.above_and_beyond;
}

function loadContinent(index){
    index = parseInt(index);
    window.location = "Abhoren Website/major/"+locations[index][0]+".html";          
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var projectInformationPopup = L.popup({maxHeight: 400, minWidth: 200, maxWidth:400, className: "information-popup"})       
        .setLatLng([-50,0])
        .setContent("<h2>Welcome to Abhoren!</h2><p>This is a magical land full of sentient cultures, massive dragons, and dangerous beasts. This project began in the Summer of 2017 between a group of friends, and has steadily grown to become what it is today. Currently, the only continent fully made explorable is the far western one, Odea. You can still click the other continents to learn what will one day exist there.</p><p>Enjoy your stay in Abhoren, and look out for pesky Gol!</p><br><br>This project is still a work in progress and was at first designed as a class project.**")
        .openOn(map);
}

else {
    var projectInformationPopup = L.popup({maxHeight: 400, minWidth: 400, className: "information-popup"})       
        .setLatLng([-50,0])
        .setContent("<h2>Welcome to Abhoren!</h2><p>This is a magical land full of sentient cultures, massive dragons, and dangerous beasts. This project began in the Summer of 2017 between a group of friends, and has steadily grown to become what it is today. Currently, the only continent fully made explorable is the far western one, Odea. You can still click the other continents to learn what will one day exist there.</p><p>Enjoy your stay in Abhoren, and look out for pesky Gol!</p><br><br>This project is still a work in progress and was at first designed as a class project.**")
        .openOn(map);
}