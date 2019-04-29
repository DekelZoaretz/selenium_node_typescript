const wd = require("../../../../helpers/webDriver");

describe("Home page description", () => {

	let browser: any;

	beforeEach(function(done) {
		browser = wd.webDriverConfig.browser();
		browser.manage().window().maximize();
		browser.get(process.env.MAIN_DOMAIN).then(done);
	});

	afterEach(function(done) {
		browser.quit().then(done);
	});

	it("should check if the logo is displayed", async function() {
		const isDisplayed = await browser.findElement(wd.webDriverConfig.By.css(".site-header")).isDisplayed();
		expect(isDisplayed).toBeTruthy();
	});

});
