import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$spinner = ()=> $(`//div[@class="loader-home"]/div[@class="lds-spinner"]`);
        this.$landingPageUsernameHeader =(username)=>$(`//label[text()="${username}"]`);
        this.$configurationsMenu = ()=> $(`//div[@class='rz-navigation-item-link']`);
        this.$configurationsMenuOptions = ()=> $(`//a[@href='/SelectUser']`);

    }
    }

export default new LandingPage();