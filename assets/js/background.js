chrome.runtime.onInstalled.addListener(function () {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://sellercenter-staging-linio-co.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://sellercenter-staging-linio-ve.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://sellercenter-staging-jumia-eg.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://sellercenter-staging-jumia-ng.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://sellercenter-staging-lazada-id.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://ellercenter-staging-lazada-my.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://ellercenter-staging-lazada-th.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://linio-co.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://linio-ve.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://jumia-eg.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://jumia-ng.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://lazada-id.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://lazada-my.sellercenter.net'},
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'https://master.sellercenter.net'},
                    })
                ],
                // And shows the extension's page action.
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});