import Common from "./common.js";

class OrganizationDetails extends Common
{
    constructor()
    {
        super()
        this.$categoryName=()=>$(``)
        this.$schoolName=()=>$(``)
        this.$operationalStatusField=()=>$(`//div[@id="7Raeq9bkJU"]`)
        this.$operationalStatus=()=>$(`//div[@id="popup-7Raeq9bkJU"]/div/ul/li[@aria-label="Future"]`)
        this.$schoolCategoryField=()=>$(`//div[@id="NG3NcdO1hE"]`)
        this.$schoolCategory=()=>$(`//div[@id="popup-NG3NcdO1hE"]/div/ul/li[@aria-label="Elementary School"]`)
        this.$schoolTypeField=()=>$(`//div[@id="4jnlEMMc5U"]`)
        this.$schoolType=()=>$(`//div[@id="popup-4jnlEMMc5U"]/div/ul/li[@aria-label="Alternative"]`)
        this.$mediumField=()=>$(`//div[@id="QMTMhBIhaE"]`)
        this.$medium=()=>$(`//div[@id="popup-QMTMhBIhaE"]/div/ul/li[@aria-label="Face-to-face instruction"]`)
        this.$titleField=()=>$(`//div[@id="aUtVWoKTA0"]`)
        this.$title=()=>$(`//div[@id="popup-aUtVWoKTA0"]/div/ul/li[@aria-label="Missing"]`)
        this.$accreditationField=()=>$(`//div[@id="Gns4HvHqAk"]`)
        this.$accreditation=()=>$(`//div[@id="popup-Gns4HvHqAk"]/div/ul/li[@aria-label="Not State Accredited"]`)
        this.$grade1=()=>$(`//div[@id="qxUSLm-yWE"]/div`)
        this.$grade2=()=>$(`//div[@id="rkX-jDsK00"]/div`)
        this.$grade6=()=>$(`//div[@id="Hk8e3YCnZ0"]/div`)
        this.$grade7=()=>$(`//div[@id="7YsemX0V-U"]/div`)
        this.$reason=()=>$(`(//textarea[@name="ReasonForChange"])[position()='1']`)
        this.$save=()=>$(`(//button[@type="submit" and @class="save-button"]/span)[position()='1']`)
    }
}
export default new OrganizationDetails()