for (let i = 0; i < document.querySelectorAll(".drum").length; i++) 
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () 
            {
                var buttonInnerHtml = this.innerHTML;
                playaudio(i);  // Wrapping the function call
                buttonAnimation(buttonInnerHtml);
            });
}


function playaudio(i) {
    var audio;
    if (i === 0) {
        audio = new Audio('sounds/tom-1.mp3');
    } else if (i === 1) {
        audio = new Audio('sounds/tom-2.mp3');
    } else if (i === 2) {
        audio = new Audio('sounds/tom-3.mp3');
    } else if (i === 3) {
        audio = new Audio('sounds/tom-4.mp3');
    } else if (i === 4) {
        audio = new Audio('sounds/snare.mp3');
    } else if (i === 5) {
        audio = new Audio('sounds/crash.mp3');
    } else {
        audio = new Audio('sounds/kick-bass.mp3');
    }
    audio.play();
}


document.addEventListener("keypress" , function(event){
    var bt = event.key;
    switch (bt) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "k":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
                
        default:
            break;
        }

        buttonAnimation(bt);
    });


    function buttonAnimation(buttonInnerHtml)
    {
        var activeButton = document.querySelector("."+buttonInnerHtml);
        activeButton.classList.add("pressed");

        setTimeout( function(){activeButton.classList.remove("pressed")} , 200);
    }








/*
entebeh enno bel .addEventListener("event" , functionname());
eza ana hatet  functionname()  ma3 l () ya3ne enno ana zedet l () se3eta li rah ysir enno deghre rah yen3amalla 
call lal l function bala ma hatta ysir l event... enno deghre byen3amalla call

FA MAJBOUR BAS HOT L FUNCTION NAME BALA L ()


LEZEM ENTEBEH ENNO WA2TA ANA HOT querySelectorAll("...") fayie deghre a3mol .addEventListener  la2ano hie array 
majbour hadid se3eta    document.querySelectorAll(".drum")[i].addEventListener("click" , f1);  
enno hot [ra2emmm]


BI MA ENNO document.querySelectorAll(".drum")  BET REDELLE AN ARRAY BE2DAR LE2E L LENGTH TABA3A BE2DAR HOT
document.querySelectorAll(".drum").length


function s1()
{
    var audio = new Audio('sounds/tom-1.mp3')
    audio1.play();
}
HAYDE L FUCNTION STAKHDAMNEHA LA NA3MOL PLAY LA A SOUND  BEKHLA2 A NEW VARIABLE = BEKHLA2 A NEW OBJECT LAL
L AUDIO LA E2DAR JIB L SOUND ('BHOT LINK TABA3O YA3NE (ENESEM L FILE LI MAWJOUD BI ALBO/ESEM L SOUND)')
w la a3mol play lal l sound bhot LPVARIABLE LI KHALA2TA.play();


!!!!!!!!!!!!!!!
ENTEBEHHHH KTRRRRRRRRRR MNIHH MAFIEEE A3MOL CALL LAL L FUNCTION HEK DEGHRE:
document.querySelectorAll(".drum")[i].addEventListener("click" , playaudio(i));

The issue in your code is that you're calling the playaudio function immediately inside addEventListener
which results in the function executing right away, instead of being called only when the button is clicked.

MAFIE DEGHRE HOTTT playaudio(i)   GHALATTTTTTT BI HALL LTARI2A BKOUN DEGHRE AAM BA3MOL CALL LAL L FUCNTION W
MA RAH TEZBAT SE3ETA ELNA YA MEN HOT ESEM L FUNCTION BAS YA SE3ETA EZA BADNA NMARE2LA PARAMETTER METTARIN SE3ETA 
N3OUZ AN UNNAMED FUNCTION YA3NE HEK :

document.querySelectorAll(".drum")[i].addEventListener("click" , function ()
{
    playaudio(i);
}
);

HEK SE3ETA BTEZBATTT


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) 
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () 
            {
                this.innerHTML.style.color="white";
            });
}

THIS HONE HIE OBJECT REFERING LA KELL L BUTTONS LI 3ENDON CLASS .drum  ya3ne ana se3eta hone wa2ta eje ekbos
aala a button with class drum li rah ysir houe this(object) li ana 3meltelo click rah yetaba2 3le l function
ya3ne l innerHTML rah tekhod l text li joua w rah tkhale l style taba3o enno color tb3 l text tsir white
THIS REFERS TO THE OBEJCT LI HOUE A BUTTON WITH CLASS drum W LI ANA BA3MELO CLICK ...
*/