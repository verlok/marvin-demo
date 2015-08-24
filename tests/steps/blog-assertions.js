
var session = require('marvin-js').session;
var driver = session.getDriver();

var blogPage = require('../pages/blog');

exports.define = function (steps) {

    steps.then(/The whole archive is loaded/, function () {
        driver.sleep(1000);
        blogPage.postsList.then(function(posts) {
            expect(posts.length).to.be.at.least(10);
        });
    });

    steps.then(/The latest post is loaded/, function () {
        driver.sleep(1000);
        blogPage.postTitle.getText().then(function(title) {
            title.should.be.equal("EcmaScript2015 modules today through jsmp");
        });
    });

    steps.then(/The first post is loaded/, function () {
        driver.sleep(1000);
        blogPage.postTitle.getText().then(function(title) {
            title.should.be.equal("Hello world!");
            session.saveScreenshot("hello-world");
        });
    });

};