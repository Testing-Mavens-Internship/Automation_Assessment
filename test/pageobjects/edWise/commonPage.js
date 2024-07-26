import dataSheet from "../../testData/edWiseData.json"assert{type:'json'}

export default class CommonPage{
    constructor(){
        this.$changeRequestHeader=()=>$(`//h6[text()="Change Requests"]`)
        this.$adminName=(name)=>$(`//label[text()="${name}"]`)
        this.$relationHeader=()=>$(`//div[@id="1WIlAIbwy0"]//span[text()="Relationships"]`)
        
    }

    async loadUrl(){
        
    }
}