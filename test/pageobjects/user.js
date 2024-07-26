import Common from "./common.js";

class User extends Common
{
    constructor()
    {
        super()
        this.$selectUser=()=>$(`//a[@href="/SelectUser"]`)
        this.$userDropdown=()=>$(`//div[@id="TfjtOQYxvE"]`)
        this.$roleDropdown=()=>$(`//div[@id='lW0aan4j00']`)
        this.$sachin=()=>$(`//div[@id="popup-TfjtOQYxvE"]/div/ul/li[@aria-label="Sachin"]`)
        this.$dataAdmin=()=>$(`//div[@id="popup-nkjwwIiXLE"]/div/ul/li[@aria-label="LEA_Data_Admin"]`)
        this.$select=()=>$(`//button[@id="dWTy6rv39k"]`)
    }
    async selectUser()
    {
        await this.$selectUser().click()
        await this.$userDropdown().waitForClickable({timeout:5000})
        await this.$userDropdown().click()
    }
    async selectSachin()
    {
        await this.$sachin().click()
    }
}
export default new User()