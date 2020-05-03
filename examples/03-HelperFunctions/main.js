#!/usr/bin/env bash.origin.test via github.com/nightwatchjs/nightwatch
/*
module.config = {
    "browsers": [
        "chrome"
    ],
    "test_runner": "mocha"
}
*/

console.log(">>>TEST_IGNORE_LINE:Run tool step for:<<<");
console.log(">>>TEST_IGNORE_LINE:Writing to:<<<");

const LIB = require('bash.origin.lib').js;

describe("Suite", function() {

    const server = LIB.BASH_ORIGIN_EXPRESS.runForTestHooks(before, after, {
        "routes": {
            "^/reps/": {
                "gi0.PINF.it/build/v0 # /.dist # /": {
                    "@domplate # router/v1": {
                        "reps": {
                            "announcer": function /*CodeBlock */ () {

                                return {
                                    tag: domplate.tags.DIV("$message|capitalize"),
                                    capitalize: function (str) {
                                        return str.toUpperCase();
                                    }
                                };
                            }
                        }
                    }
                }
            },
            "/": [
                '<head>',
                    '<script src="/reps/dist/domplate-eval.browser.js"></script>',
                '</head>',
                '<body><div></div></body>',
                '<script>',
                'window.domplate.loadRep("/reps/announcer", function (rep) {',
                    'rep.tag.replace({ message: "Hello World!" }, document.querySelector("DIV"));',
                '}, console.error);',
                '</script>'
            ].join("\n")
        }
    });

    it('Test', async function (client) {

        const PORT = (await server).config.port;

        client.url('http://localhost:' + PORT + '/').pause(500);

        client.waitForElementPresent('BODY > DIV > DIV', 10 * 1000);
        client.expect.element('BODY > DIV > DIV').text.to.contain([
            'HELLO WORLD!'
        ].join(""));

        if (process.env.BO_TEST_FLAG_DEV) client.pause(60 * 60 * 24 * 1000);
    });
});
