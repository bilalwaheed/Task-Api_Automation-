/// <reference types ="Cypress" />

describe('Put user request', ()=>{
    it('create test single user', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            // CREATIONDATE FIELD IS NOT ADDED IN BODY IT WILL AUTOMATICALLY ADDED ONCE USER IS CREATED
            // USER ID IS NOT ADDED IN POST BODY IT WILL AUTOMATICALLY ADDED ONCE USER IS CREATED
            body:{
                "name": "bilal",
                "job": "QA Eng",
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','bilal')
            expect(res.body).has.property('job','QA Eng')
        }).then((res) =>{
            //GETTING USER ID FROM RESPONSE BODY
            const userId = res.body.id
            // PUT USER REQUEST
            cy.request({
                method:  "PUT",
                url: 'https://reqres.in/api/users/'+userId,
                // ITS A PUT REQUEST SO ALL FIELD ARE CHANGED  
                body:{
                    "name": "bilal waheed updated",
                    "job": "QA Eng updated",
                    "id": "2",
                    "createdAt": "2021-08-19"
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('name', 'bilal waheed updated')

            })
        })

    })
})