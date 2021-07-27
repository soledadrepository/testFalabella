const {Builder, By, Key, util} = require ("selenium-webdriver");
import Selectors from './selectors';
import BasePage from '../../BasePage';
import {assert} from 'chai';

class Home extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}	

    async searchProduct(text){
		return this.waitForDisplayed(Selectors.searchButton, 3000)
			.then(() => {
				return this.sendValue(Selectors.searchButton, text);
			})
        }
    
    async getFirstElement(list){
        return list.shift();
        }
}