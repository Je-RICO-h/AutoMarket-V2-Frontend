/* global document */

function navopen(){
    if(document.getElementsByClassName("navbox")[0].style.display == "none")
        {
            document.getElementsByClassName("navbox")[0].style.display = "block";
        }
    else
        {
            document.getElementsByClassName("navbox")[0].style.display = "none";
        }
}