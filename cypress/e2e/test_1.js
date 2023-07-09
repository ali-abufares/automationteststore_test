const { it } = require("mocha");

describe('log_in test', () => {
    it('test log  in stander', () => {

        cy.visit("https://automationteststore.com/")
       // cy.get("href='https://automationteststore.com/'")
       //cy.get("a[href='https://automationteststore.com/index.php?rt=product/product&product_id=116']").click({multiple: true})
      // cy.get("a[title='BeneFit Girl Meets Pearl']").click()

      cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()

      cy.get('#ContactUsFrm_first_name').type("ali hasan abufares")
    //    cy.get("[name='filter_category_id']").type("nnnnnnnnnnnnnnnnnnn")
    // cy.get("[name='first_name']").type("momomomomomom")
    cy.get("input[id='ContactUsFrm_email']").type("ali_hassan_200@gmail.com")
    // cy.get("textarea [id='ContactUsFrm_enquiry']").type("I am the best QA in the world")
    // cy.get("//textarea [name='enquiry']").type("I am the best QA in the world")
    cy.get('#ContactUsFrm_enquiry').type("I am the best QA in the world")
    cy.get("button[title='Submit']").click()


    it('cheek contact_us', () => {
        cy.visit("https://automationteststore.com/")

        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()

        cy.get('#ContactUsFrm_first_name').type("ali hasan abufares")
        cy.get("input[id='ContactUsFrm_email']").type("ali_hassan_200@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("I am the best QA in the world")
        cy.get("button[title='Submit']").click()
       // cy.get("div [class='contentpanel']").should("Your enquiry has been successfully sent to the store owner!")
       cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")

       
        
    });
    


    });
    it('test_3', () => {
        
        cy.visit("https://automationteststore.com/")
        // const my_var=cy.get('a[title="Flash Bronzer Body Gel"]')
        // my_var.click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').contains("Hair Care").click()
        
        // cy.get(".fixed_wrapper .prdocutname").each((element,indix,list)=>{
        //     if (element.text().includes("Seaweed")) {
        //         cy.wrap(element).click()

                
        //     }

       // })
       cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("first_item")
       
       //cy.get("@first_item").its('length').should('be.gt',4)
       cy.get("@first_item").should('include','Seaweed')


       
       });
    
   it.only('test_4', () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").find("oneprice").each((elemant,index,list)=>{})

        cy.log(elemant.text()+index)

        
       });


       
    
});