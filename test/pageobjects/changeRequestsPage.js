
import CommonPage from "./commonPage.js";
import data from '../testData/timeout.json' assert {"type":"json"}

class ChangeRequestPage extends CommonPage{

    constructor()
    {
        super();

        this.$sachinUser =()=>$('//label[@class="rz-label header-profilename"]')
        
       

    }

   
    

}

export default new ChangeRequestPage();