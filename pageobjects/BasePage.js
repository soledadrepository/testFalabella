import {By, until} from 'selenium-webdriver';
import {timeouts} from '../config/';
import chai from 'chai';

var assert = chai.assert;
var driver;

class BasePage {
	constructor (webdriver) {
		this.driver = webdriver;
	}

	async open (url) {
		await this.driver.get(url);
	}

	sendValue (locator,value) {
		return this.driver.findElement(By.css(locator)).clear()
		.then (()=>{
			 return this.driver.findElement(By.css(locator)).sendKeys(value);
		})
		.catch(( )=>{
			assert.fail('click operation has failed on css:'+ locator);
		})
	}

	clickear(locator){
		return this.driver.findElement(By.css(locator)).click()
			.catch(( )=>{
			assert.fail('click operation has failed on css:'+ locator);
			})
	}

	clickWithWait(locator){
		return this.waitForDisplayed(locator,7000)
			.then(() => {
				return this.driver.findElement(By.css(locator)).click();
			})
			.catch(( )=>{
			assert.fail('click operation has failed on css:'+ locator);
			});
	}	

	waitForDisplayed (locator,timeout) {
		return this.driver.wait(until.elementLocated(By.css(locator)),timeout)
		.catch(( )=>{
			assert.fail('click operation has failed on css:'+ locator);
			})

	}

	getText(locator){
		return this.driver.findElement(By.css(locator))
		.then ((element) => {		      		
        		return element.getText();
    		})
		.catch(( )=>{
			assert.fail('the web element has not be found :'+ locator);
			})
	}	

    assertValue (locator,expectedValue) {
    let actualText = this.getText();
      	return  assert.equal(actualText,expectedValue)	
    	.catch(( )=>{
			assert.fail('the value at '+ locator,'is not equal at:' + expectedValue);
			})
    }
}

export default BasePage;