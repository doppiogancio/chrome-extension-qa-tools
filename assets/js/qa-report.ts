class QAReport {
    _ventureName: string;
    _environment: string;
    _url: string;
    _sw: string;
    _tests: string[];
    _notes: string;
    _effort: number;
    _isPassed: boolean;
    _servers: object;

    constructor() {
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
            },
        };
    }

    setVenture(ventureName: string) {
        this._ventureName = ventureName;
    }

    setEnvironment(environment: string) {
        this._environment = environment;
    }

    setUrl(url: string) {
        this._url = url;

        if (this._servers[url]) {
            this.setVenture(this._servers[url]['venture']);
            this.setEnvironment(this._servers[url]['environment']);
        } else {
            this.setVenture('NOT RECOGNIZED');
        }
    }

    setSW(sw: string) {
        this._sw = "{code}" + sw + "{code}";
    }

    resetTests() {
        this._tests = [];
    }

    addTest(test: string) {
        this._tests.push(test + " (/)");
    }

    setNotes(notes: string) {
        this._notes = notes;
    }

    setEffort(effort: number) {
        this._effort = effort;
    }

    setIsPassed(isPassed: boolean) {
        this._isPassed = isPassed;
    }

    private static _newLine(key: string, value: string) {
        return "|| " + key + " | " + value + " |";
    }

    private _getTestsAsString() {
        return this._tests.join("\n");
    }

    private _getIsPassedStatusAsString() {
        if (this._isPassed) {
            return '{color:green}*PASSED*{color}';
        } else {
            return '{color:red}*NOT PASSED*{color}';
        }
    }

    toString() {
        let lines = [];
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
    }
}