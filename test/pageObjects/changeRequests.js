import CommonPage from "../pageObjects/common.js";

class ChangeRequests extends CommonPage{
    constructor(){
        super();
          this.$headers=(header)=>$(`//span[text()="${header}"]`);
    }


}

export default new ChangeRequests();