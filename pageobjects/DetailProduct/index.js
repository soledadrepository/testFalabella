const {Builder, By, Key, util} = require ("selenium-webdriver");

import Selectors from './selectors';
import BasePage from '../../BasePage';
import {assert} from 'chai';

class DetailProduct extends BasePage {
	
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}	

    async assertPrice(expectedPrice){

		return this.driver.findElement(By.css(Selectors.price)).getText()
		.then ((text) => {					
       			return assert.equal(text, expectedPrice);
		})
	}
}

export default DetailProduct;