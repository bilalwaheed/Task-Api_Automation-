/// <reference types ="Cypress" />

describe('Delete user request', ()=>{
    it('create test signal user', ()=>{
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
            const userId = res.body.id
            // DELETE USER REQUEST
            cy.request({
                method:  "DELETE",
                url: 'https://reqres.in/api/users/'+userId,

            }).then((res)=>{
                expect(res.status).to.eq(204)

            })
        })

    })
})