

describe('this us contunie to test 1', () => {
    it('test_1', () => {
        
            cy.visit("https://automationteststore.com/")
            cy.get(".thumbnail").as("items")

            cy.get("@items").find(".oneprice").each((element,index,list)=>{

                cy.log(element.text()+index)


            })
    
          
    
            
          
        
    });
    it('test_2', () => {
        cy.visit("https://automationteststore.com/")
            cy.get(".thumbnail").as("items")
            cy.get("@items").find(".oneprice").invoke('text').as("item_price")
            cy.get("@item_price").then((price_text)=>{
                let my_list_price= price_text.split("$")
                let total=0
                for (let i= 0; i < my_list_price.length; i++) 
                
                {
                    cy.log(my_list_price[i])
                    total+=Number(my_list_price[i])
                   
                    
                }

            })


        
    });
    
});