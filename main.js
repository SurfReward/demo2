//const replace_img = chrome.runtime.getURL('replace_image.png');


$(function () {
    chrome.storage.local.get(['enabled'], function (data) {
        let enabled = "no";

        if (data['enabled'] && (data['enabled'] != 'undefined'))
            enabled = data['enabled'];
        if (enabled == "yes") {
            setInterval(function () {
                $("iframe").each(function () {
                    let iframe_id = "";
                    let iframe_src = "";
                    if ($(this).attr("id")) {
                        iframe_id = $(this).attr("id");
                    }
                    if ($(this).attr("src")) {
                        iframe_src = $(this).attr("src");
                    }
                    if (iframe_src.includes("google") || iframe_id.includes("utif_") || iframe_id.includes("google_ads_")) {
                        // Get the size of the ad
                        let adWidth = $(this).width();
                        let adHeight = $(this).height();

                        // Construct the path to the replacement image
                        
			let replace_img = chrome.runtime.getURL('images/ads/' + adWidth + 'x' + adHeight + '.png');
                        
                        $(this).replaceWith('<img id="replace_image" src="' + replace_img + '" />');
                    }
                });
            }, 0);
        }
    });
});

//$(function () {
//    chrome.storage.local.get(['enabled'], function (data) {
//        let enabled = "no";
//
//        if (data['enabled'] && (data['enabled'] != 'undefined'))
//            enabled = data['enabled'];
//        if (enabled == "yes") {
//            setInterval(function () {
//                $("iframe").each(function () {
//                    let iframe_id = "";
//                    let iframe_src = "";
//                    if ($(this).attr("id")) {
//                        iframe_id = $(this).attr("id");
//                    }
//                    if ($(this).attr("src")) {
//                        iframe_src = $(this).attr("src");
//                    }
//                    if (iframe_src.includes("google") || iframe_id.includes("utif_") || iframe_id.includes("google_ads_")) {
//                        $(this).replaceWith('<img id="replace_image" src="' + replace_img + '" />');
//                    }
//                });
//            }, 0);
//        }
//    });
//});
