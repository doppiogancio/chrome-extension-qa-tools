var QAReport = /** @class */ (function () {
    function QAReport() {
        this._ventureName = '';
        this._environment = '';
        this._url = '';
        this._sw = '';
        this._tests = [];
        this._notes = '';
        this._effort = 0.0;
        this._isPassed = true;
        this._servers = {
            // LIVE SC
            'https://sellercenter.lamoda.ru': {
                venture: 'LAMODA RU',
                environment: 'LIVE'
            },
            // QA STAGING SC
            'https://sellercenter-staging-linio-co.sellercenter.net': {
                venture: 'LATAMZ CO',
                environment: 'QA STAGING'
            },
            'https://sellercenter-staging-linio-ve.sellercenter.net': {
                venture: 'LATAMZ VE',
                environment: 'QA STAGING'
            },
            'https://sellercenter-staging-jumia-eg.sellercenter.net': {
                venture: 'NAFAMZ EG',
                environment: 'QA STAGING'
            },
            'https://sellercenter-staging-jumia-ng.sellercenter.net': {
                venture: 'NAFAMZ NG',
                environment: 'QA STAGING'
            },
            'https://sellercenter-staging-lazada-id.sellercenter.net': {
                venture: 'SEAAMZ ID',
                environment: 'QA STAGING'
            },
            'https://sellercenter-staging-lazada-my.sellercenter.net': {
                venture: 'SEAAMZ MY',
                environment: 'QA STAGING'
            },
            // QA LIVE SC
            'https://linio-co.sellercenter.net': {
                venture: 'LATAMZ CO',
                environment: 'QA LIVE'
            },
            'https://linio-ve.sellercenter.net': {
                venture: 'LATAMZ VE',
                environment: 'QA LIVE'
            },
            'https://jumia-eg.sellercenter.net': {
                venture: 'NAFAMZ EG',
                environment: 'QA LIVE'
            },
            'https://jumia-ng.sellercenter.net': {
                venture: 'NAFAMZ NG',
                environment: 'QA LIVE'
            },
            'https://lazada-id.sellercenter.net': {
                venture: 'SEAAMZ ID',
                environment: 'QA LIVE'
            },
            'https://lazada-my.sellercenter.net': {
                venture: 'SEAAMZ MY',
                environment: 'QA LIVE'
            },
            'https://master.sellercenter.net': {
                venture: 'MASTER',
                environment: 'QA LIVE'
            }
        };
    }
    QAReport.prototype.setVenture = function (ventureName) {
        this._ventureName = ventureName;
    };
    QAReport.prototype.setEnvironment = function (environment) {
        this._environment = environment;
    };
    QAReport.prototype.setUrl = function (url) {
        this._url = url;
        if (this._servers[url]) {
            this.setVenture(this._servers[url]['venture']);
            this.setEnvironment(this._servers[url]['environment']);
        }
        else {
            this.setVenture('NOT RECOGNIZED');
        }
    };
    QAReport.prototype.setSW = function (sw) {
        this._sw = "{code}" + sw + "{code}";
    };
    QAReport.prototype.resetTests = function () {
        this._tests = [];
    };
    QAReport.prototype.addTest = function (test) {
        this._tests.push(test + " (/)");
    };
    QAReport.prototype.setNotes = function (notes) {
        this._notes = notes;
    };
    QAReport.prototype.setEffort = function (effort) {
        this._effort = effort;
    };
    QAReport.prototype.setIsPassed = function (isPassed) {
        this._isPassed = isPassed;
    };
    QAReport._newLine = function (key, value) {
        return "|| " + key + " | " + value + " |";
    };
    QAReport.prototype._getTestsAsString = function () {
        return this._tests.join("\n");
    };
    QAReport.prototype._getIsPassedStatusAsString = function () {
        if (this._isPassed) {
            return '{color:green}*PASSED*{color}';
        }
        else {
            return '{color:red}*NOT PASSED*{color}';
        }
    };
    QAReport.prototype.toString = function () {
        var lines = [];
        lines.push(QAReport._newLine('Venture', this._ventureName));
        lines.push(QAReport._newLine('Environment', this._environment));
        lines.push(QAReport._newLine('URL', this._url));
        lines.push(QAReport._newLine('SW', this._sw));
        lines.push(QAReport._newLine('Test', this._getTestsAsString()));
        lines.push(QAReport._newLine('Notes', this._notes));
        lines.push(QAReport._newLine('Screenshots', ''));
        lines.push(QAReport._newLine('QA effort', this._effort + 'h'));
        lines.push(QAReport._newLine('QA Result', this._getIsPassedStatusAsString()));
        return lines.join("\n");
    };
    return QAReport;
}());
