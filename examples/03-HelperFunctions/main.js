#!/usr/bin/env bash.origin.test via github.com/nightwatchjs/nightwatch
/*
module.config = {
    "browsers": [
        "chrome"
    ],
    "test_runner": "mocha"
}
*/

console.log(">>>TEST_IGNORE_LINE:^[\\d\\.]+\\s<<<");

describe("Suite", function() {

    require('bash.origin.lib').js.BASH_ORIGIN_EXPRESS.runForTestHooks(before, after, {
        "routes": {
            "^/reps/": {
                "@github.com~cadorn~domplate#s1": {
                    "reps": {
                        "announcer": function CodeBlock /*CodeBlock */ () {

                            return {
                                tag: domplate.tags.DIV("$message|capitalize"),
                                capitalize: function (str) {
                                    return str.toUpperCase();
                                }
                            };
                        }
                    }
                }
            },
            "/": [
                '<head>',
                    '<script src="/reps/domplate-eval.js"></script>',
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

    it('Test', function (client) {

        client.url('http://localhost:' + process.env.PORT + '/').pause(500);

        client.waitForElementPresent('BODY > DIV > DIV', 3000);
        client.expect.element('BODY > DIV > DIV').text.to.contain([
            'HELLO WORLD!'
        ].join(""));

        if (process.env.BO_TEST_FLAG_DEV) client.pause(60 * 60 * 24 * 1000);
    });
});
