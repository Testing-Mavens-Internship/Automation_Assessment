import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$landingPageHeader =()=> $(`//label[@id='8hTycH0aR0']`);
        this.$configurationsMenu = ()=> $(`//div[@class='rz-navigation-item-link']`);
        this.$configurationsMenuOptions = ()=> $(`//a[@href='/SelectUser']`);

    }
    }

export default new LandingPage();