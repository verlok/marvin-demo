
var session = require('marvin-js').session;
var logger = require('marvin-js').log;

var driver = session.getDriver();

var blogPage = require('../pages/blog');

exports.define = function (steps) {

    steps.given(/I visit blog homepage/, function () {
        logger.log("Simple log test");
        return blogPage.visit();
    });

    steps.when(/I click view all link/, function () {
        return blogPage.viewAll.click();
    });

    steps.when(/I click the link of the latest post/, function () {
        return blogPage.viewMore.click();
    });

    steps.when(/I click the link of the first post/, function () {
        return blogPage.firstPost.click();
    });

    // steps.given(/I visit the homepage for country $ISOCODE/, function (val) {
    //     return blogPage.visit();
    // });
    
};