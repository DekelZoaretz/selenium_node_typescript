require("dotenv").config();

jasmine.DEFAULT_TIMEOUT_INTERVAL = parseInt(process.env.JASMINE_TIMEOUT);

const selenium = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const ie = require("selenium-webdriver/ie");
const safari = require("selenium-webdriver/safari");
const chromePath = require("chromedriver").path;

module.exports.webDriverConfig = {
    env: process.env,
    selenium: selenium,
    By: selenium.By,
    until: selenium.until,
    chrome: chrome,
    path: chromePath,
    browser: () => {
        return new selenium.Builder().forBrowser(process.env.BROWSER).build();
    }
};
