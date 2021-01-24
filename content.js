console.log("Removing ads from " + window.location.host)
var yahoo = window.location.host.includes("search.yahoo");


if (yahoo == false) {
    if (window.location.host == "www.google.com"){
        document.getElementById("taw").style.display = "none"
        console.log("Ads have been cleared.")
    }
    else if (window.location.host == "www.bing.com"){
        document.getElementsByClassName("b_ad")[0].style.display = "none"
        document.getElementsByClassName("b_adBottom")[0].style.display = "none"
        console.log("Ads have been cleared.")
    }
}

else if (yahoo == true){
    document.getElementsByClassName("searchCenterTopAds")[0].style.display = "none"
    document.getElementsByClassName("searchRightBottomAds")[0].style.display = "none"
    document.getElementsByClassName("searchCenterBottomAds")[0].style.display = "none"
    console.log("Ads have been cleared.")
}
else {
    console.log("Bro, I don't know what is happening.")
}