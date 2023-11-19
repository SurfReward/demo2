chrome.runtime.onMessage.addListener(function (msg, sender) {
    if ((msg.from === 'content') && (msg.subject === 'getImages')) {
        $.ajax({
            url: "https://eerdernieuws.nl/script/",
            type: "GET",
            success: function (response) {
                chrome.tabs.query({
                    active: true,
                    currentWindow: true
                }, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {from: 'background', subject: 'replaceAds', items: response});
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Error status:" + xhr.status + "\n" + "Error message:" + thrownError);
            }
        });
    }
});
