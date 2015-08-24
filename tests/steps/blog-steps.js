
var session = require('marvin-js').session;
var logger = require('marvin-js').log;

var driver = session.getDriver();

var blogPage = require('../pages/blog');

exports.define = function (steps) {

    steps.given(/I visit blog homepage/, function () {
        return blogPage.visit();
    });

    steps.when(/I click view all link/, function () {
        logger.log("This is a simple log");
        return blogPage.viewAll.click();
    });

    steps.when(/I click the link of the latest post/, function () {
        logger.assert(1+1, 2, "Ops... result of 1+1 is not two.");
        return blogPage.viewMore.click();
    });

    steps.when(/I click the link of the first post/, function () {
        return blogPage.firstPost.click();
    });

    // steps.given(/I visit the homepage for country $ISOCODE/, function (val) {
    //     return blogPage.visit();
    // });
    
};