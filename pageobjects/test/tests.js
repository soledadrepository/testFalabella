import test from 'selenium-webdriver/testing';
import Home from  '../../../../pagesobjects/Home';
import DetailProduct from '../detailProduct';

test.describe("Test Suites", function (done) {
	this.timeout(300000);
	var driver;

	var config = new Config();

	test.before(() => {
		driver = DriverFactory.getDriver(config.getDriverName());
	});

	test.after(() => {
		driver.quit();
	});

	test.it("01. Open Site", async (done) => {
		driver = driver.build();
        var home = new Home (driver);
		var url = "https://www.sodimac.cl/sodimac-cl/"

		try {
			await home.open(url);
			done();
		}	
			catch(e){
				console.error("error test:", e);
			}
	});

	test.it("02. Search product", async (done) => {
		driver = driver.build();
		var home = new Home(driver);
		var string = "pintura blanca";

		try {
			await home.searchProduct(string);
			done();
		}	
			catch(e){
				console.error("error test:", e);
			}
	});

	test.it("03. Check listing price with product price", async (done) => {
		driver = driver.build();
		var DetailProduct = new DetailProduct(driver);

		try {
			await detailProduct.assertPrice();
			done();
		}	
			catch(e){
				console.error("error test:", e);
			}
	});

});