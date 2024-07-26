import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$$options=()=>$$(`//ul[@class="rz-navigation-menu"]/li/div/a/i/following-sibling::span[@class="rz-navigation-item-text"]`)  //4
        this.$education=()=>$(`//span[text()='Education Organization']`)
        this.$category=()=>$(`//span[text()='Category']`)
        this.$date=()=>$(`//span[text()='Effective Date']`)
        this.$edu=()=>$(`//span[text()='St David Unified District']`)
        this.$edudropdown=()=>$(`//label[text()='Select Education Organization']`)
        this.$category=()=>$(`//label[text()='Select Category']`)
        this.$categoryvalue=()=>$(`//span[text()='Charter Authorizer']`)
        this.$future=()=>$(`//div[@id="qxORRwkjAE"]/div/div[@class="rz-radiobutton-box"]`)
        this.$calendar=()=>$(`//button[@class="rz-datepicker-trigger rz-calendar-button rz-button rz-button-icon-only"]`)
        this.$dateValue=()=>$(`//table[@class="rz-datepicker-calendar"]/tbody/tr[5]/td/span`)
    }
    async validateOptions()
    {
        let a=[]
        for(let item of await this.$$options())
        {
            a.push(await item.getText())
        }
        return a
    }

    // async userDropdown()
    // {
    //     let u=[]
    //     for(let item of await this.$$users())
    //         {
    //             u.push(await item.getText())
    //         }   
    //         return u
    // }

}
export default new HomePage()