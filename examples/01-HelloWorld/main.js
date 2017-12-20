#!/usr/bin/env bash.origin.test via github.com/nightwatchjs/nightwatch
/*
module.config = {
    "browsers": [
        "chrome"
    ],
    "test_runner": "mocha"
}
*/

//console.log(">>>TEST_IGNORE_LINE:GET /dist/resources/insight.renderers.default/images/<<<");

describe("Suite", function() {

    require('bash.origin.workspace').LIB.BASH_ORIGIN_EXPRESS.runForTestHooks(before, after, {
        "routes": {
            "^/": function /* CodeBlock */ () {

                return function (req, res, next) {

                    var html = [
                        '<script src="/dist/domplate.js"></script>',
                        '<div></div>',
                        '<script>',
                        'var rep = window.domplate.domplate({',
                        '    tag: window.domplate.tags.DIV("$message")',
                        '});',
                        'rep.tag.replace({',
                        '    message: "Hello World!"',
                        '}, document.querySelector("DIV"));',
                        '</script>'
                    ];

                    res.end(html.join("\n"));
                };
            },
            "/dist/domplate.js": {
                "@it.pinf.org.browserify#s1": {
                    "src": __dirname + "/../../lib/domplate.js",
                    "dist": __dirname + "/../../dist/domplate.js",
                    "format": "standalone",
                    "expose": {
                        "window": "domplate"
                    },
                    "prime": true
                }
            }
        }
    });

    it('Test', function (client) {

        client.url('http://localhost:' + process.env.PORT + '/').pause(500);

        var selector = 'BODY DIV';

        client.waitForElementPresent(selector, 3000);

        client.expect.element(selector).text.to.contain([
            'Hello World!'
        ].join("\n"));

    });
});
