var report = null;

chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "extractUrlAndSw") {
        console.log('Document', request.informations.theDocument);

        jQuery.get(request.informations.revTextUrl, function (revTxt) {
            report.setSW(revTxt);

            report.setVenture('local');
            report.setEnvironment('*DEV Branch*');
            report.setUrl(request.informations.url);

            report.setEffort(0.5);
            report.setIsPassed(true);

            jQuery('#qa-report').val(report.toString());
        });
    }
});

function onWindowLoad() {
    report = new QAReport();

    chrome.tabs.getSelected(null, function (tab) {
        var location = new URL(tab.url)

        var revTxtUrl = location.protocol + '//' + location.host + '/rev.txt';
        var url = location.origin;

        // Get rev.txt content
        jQuery.get(revTxtUrl, function (revTxt) {
            report.setSW(revTxt);

            report.setVenture('local');
            report.setEnvironment('*DEV Branch*');
            report.setUrl(url);

            report.setEffort(0.5);
            report.setIsPassed(true);

            jQuery('#qa-report').val(report.toString());
        });

        // Update the snippet when tests change
        jQuery('#tests-performed').on('keyup', function () {
            var listOfTests = jQuery(this).val().split("\n");

            report.resetTests();

            listOfTests.forEach(function (value) {
                report.addTest(value);
            });

            jQuery('#qa-report').val(report.toString());
        })
    });
}

window.onload = onWindowLoad;