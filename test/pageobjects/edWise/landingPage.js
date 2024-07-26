import CommonPage from "./commonPage.js";

export class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$configurationOption=()=>$(`//span[text()="Configurations"]`);
        this.$$configurationSubCategories=()=>$$(`//li[@class="rz-navigation-item config-sub-link"]`);
        this.$selectUserOption=()=>$(`//span[text()="Select User"]`);
        this.$$DropdownHeaders=()=>$$(`//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"]`);
        this.$selectUserDropDown=()=>$(`//label[text()="Select User"]`);
        this.$nameSachin=()=>$(`(//span[text()="Sachin"])[last()]`);
        this.$selectRoleDropDown=()=>$(`//label[text()="Select Role"]`);
        this.$firstRole=()=>$(`(//li[@aria-label="LEA_Data_Admin"])[last()]`);
        this.$selectUserHeaderChange=()=>$(`//label[text()="Sachin"]`);
        this.$selectRoleHeaderChange=()=>$(`//label[text()="LEA_Data_Admin"]`);
        this.$selectButton=()=>$(`//span[normalize-space()="Select"]`);
        this.$addRequestButton=()=>$(`(//span[text()="Add Request"])[last()]`);
        this.$addRequestOption=()=>$(`//span[text()="Add Request"]`);
        this.$userName=()=>$(`//label[@class="rz-label header-profilename"]`);
        this.$$requestFieldHeaders=()=>$$(`//div[@class="search-education-title"]`);
        this.$mcnaryDistrict=()=>$(`//li[@aria-label="Mcnary Elementary District"]`);
        this.$educationOrganizationOption=()=>$(`//input[@aria-label="4163"]`);
        this.$educationOrgHeaderChange=()=>$(`//label[text()="Mcnary Elementary District"`)
        this.$categoryOption=()=>$(`//div[@id="aeUXhUWI5E"]`);
        this.$charterAuthorizerOption=()=>$(`aria-label="Charter Authorizer"`);
        this.$categoryHeaderChange=()=>$(`//label[text()="Charter Authorizer"`);
        this.$futureOption=()=>$(`//label[text()="Future"`)
    }
    /**
     * To click on the configuration option present in the sidebar.
     */
    async clickConfiguration(){
        await this.$configurationOption().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."});
        await this.$configurationOption().click();
        await this.$$configurationSubCategories().waitForDisplayed({timeout:5000,timeoutMsg:"Sub categories still not displayed."});
    }
    /**
     * To click on the select user option.
     */
    async clickSelectUser(){
        await this.$selectUserOption().click();
        await this.$$DropdownHeaders().waitForDisplayed({timeout:5000,timeoutMsg:"Dropdown headers still not displayed."});
        
    }
    /**
     * To click on the select user option.
     */
    async clickSelectUserDropDown(){
        await this.$selectUserDropDown().waitForClickable({timeout:5000,timeoutMsg:"Dropdown option still not clicked."});
        await this.$selectUserDropDown().click();
        await this.$nameSachin().waitForDisplayed({timeout:5000,timeoutMsg:"Name still not displayed."})
    }
    /**
     * To select the name from the dropdown.
     */
async selectName(){
    await this.$nameSachin().waitForClickable({timeout:5000,timeoutMsg:"Name still not clicked."});
    await this.$nameSachin().click();
    await this.$selectUserHeaderChange().waitForDisplayed({timeout:5000,timeoutMsg:"Dropdown header still not displayed."})
    let userName=await this.$nameSachin().getText();
    return userName;
}
/**
 * To click on the select role dropdown option.
 */
async clickSelectRoleDropDown(){
    await this.$selectRoleDropDown().waitForClickable({timeout:5000,timeoutMsg:"Dropdown option still not clicked."});
    await this.$selectRoleDropDown().click();
    await this.$firstRole().waitForDisplayed({timeout:5000,timeoutMsg:"Role still not displayed."});

}
/**
 * To click on the first role from the dropdown.
 */
async clickFirstRole(){
    await this.$firstRole().waitForClickable({timeout:5000,timeoutMsg:"Role still not clicked."});
    await this.$firstRole().click();
    await this.$selectRoleHeaderChange().waitForDisplayed({timeout:5000,timeoutMsg:"Dropdown header still not displayed."});

}
/**
 * To click on the select button after selecting user and role.
 */
async clickSelectButton(){
    await this.$selectButton().click();
    await this.$selectButton().waitForClickable({timeout:5000,timeoutMsg:"Button still not clicked."});
    await this.$addRequestButton().waitForDisplayed({timeout:5000,timeoutMsg:"Button still not displayed."});

}
/**
 * To click on the add request option present in the side bar.
 */
async clickAddRequest(){
await this.$addRequestOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option still not displayed."});
await this.$addRequestOption().click();
await this.$$requestFieldHeaders().waitForDisplayed({timeout:5000,timeoutMsg:"Headers still not displayed."});
await this.$userName().waitForDisplayed({timeout:5000,timeoutMsg:"Username still not displayed."});
let userIconName=await this.$userName().getText();
return userIconName;
}
/**
 * To click on the eduction organization field.
 */
async clickEducationOrganization(){
    await this.$educationOrganizationOption().click();
    await this.$mcnaryDistrict().waitForDisplayed({timeout:5000,timeoutMsg:"Option not yet displayed."});
}
/**
 * To select Mcnary district from the dropdown.
 */
async clickMcnaryDistrict(){
    await this.$mcnaryDistrict().click();
    await this.$educationOrgHeaderChange().waitForDisplayed({timeout:5000,timeoutMsg:"Header still not displayed."})
    
}
/**
 * To click on the category option and view the dropdown.
 */
async clickCategory(){
    await this.$categoryOption().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."})
    await this.$categoryOption().click();
}
/**
 * To select charter authorizer from the dropdown.
 */
async clickCharterAuthorizer(){
    await this.$charterAuthorizerOption().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."});
    await this.$charterAuthorizerOption().click();
    await this.$categoryHeaderChange().waitForDisplayed({timeout:5000,timeoutMsg:"Header still not changed"});
}
/**
 * To click on the future from the effective date.
 */
async clickFuture(){
    await this.$futureOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option still not displayed."});
    await this.$futureOption().click();
}
}
export default new LandingPage();