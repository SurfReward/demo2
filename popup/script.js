$(function () {
    chrome.storage.local.get(['enabled'], function (data) {
        let enabled = 'no';
        if (data['enabled'] && (data['enabled'] != 'undefined'))
            enabled = data['enabled'];
        if (enabled == 'yes') {
            $("#cb").prop("checked", true);
        }
    });

    $("#cb").change(function () {
        let enabled = "no";
        if ($("#cb").is(":checked")) {
            enabled = "yes";
        }

        chrome.storage.local.set({
            enabled: enabled
        });
    });

});

