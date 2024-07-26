import homepage from "../pageobjects/homepage.js";
import user from "../pageobjects/user.js";

const dropdown_values=['Select User','Role Permission','User Roles','Section Configurations']
describe('End to End flow for Edwise Group website',()=>{
    it('Launch URL and validate username',async()=>{
        await homepage.launchURL()
        expect(await homepage.$username().isDisplayed()).withContext('Username heading not displayed').toBeTrue()
    })

    it('Click on Configurations and validate if the 4 options are coming',async()=>{
        await homepage.clickConfiguration()
        const values=await homepage.validateOptions()
        for(let i=1;i<=4;i++)
        {
            expect(values[i]).toEqual(dropdown_values[i])
        }
    })

    it('Select user and validate text of dropdown items',async()=>{
        await user.selectUser()
    })

    it('Click on Sachin option from Select user dropdown',async()=>{
        

    })

    it('Click on LEA_Data_Admin option from Select role dropdown',async()=>{


    })

    it('Click on select button and validate if Add requests and Approval queue options came',async()=>{


    })

    it('Click on Add request and validate the 3 headings and also validate if user is Sachin',async()=>{


    })

})