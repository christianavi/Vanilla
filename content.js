var yahoo = window.location.host.includes("search.yahoo");


if (yahoo == false) {
    if (window.location.host == "www.google.com"){
        console.log("🍦 Removing ads from " + window.location.host)
        document.getElementById("taw").style.display = "none"
        console.log("🍦 Ads have been cleared.")
    }
    else if (window.location.host == "www.bing.com"){
        console.log("🍦 Removing ads from " + window.location.host)
        document.getElementsByClassName("b_ad")[0].style.display = "none"
        document.getElementsByClassName("b_adBottom")[0].style.display = "none"
        console.log("🍦 Ads have been cleared.")
    }
}

else if (yahoo == true){
    console.log("🍦 Removing ads from " + window.location.host)
    document.getElementsByClassName("searchCenterTopAds")[0].style.display = "none"
    document.getElementsByClassName("searchRightBottomAds")[0].style.display = "none"
    document.getElementsByClassName("searchCenterBottomAds")[0].style.display = "none"
    console.log("🍦 Ads have been cleared.")
}
else {
    console.log("🍦 Apparently, this is one of the unforseen events.")
}