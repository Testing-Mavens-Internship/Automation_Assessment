export default class CommonPage {
constructor(){

}
/**
 * Method to launch edwise web application
 */
async launchUrl(){
    await browser.maximizeWindow();
    await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/')
} 

/**
 * 
 * Method to click on the element
 */
async clickElementButton($element){
    await $element.click();
}


}