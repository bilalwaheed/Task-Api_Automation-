/// <reference types ="Cypress" />

describe('Patch user request', ()=>{
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
            //GETTING USER ID FROM RESPONSE BODY
            const userId = res.body.id
            //GETTING CREATIONDATE FROM RESPONSE BODY
            const creationDate = res.body.createdAt
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','bilal')
            expect(res.body).has.property('job','QA Eng')
            expect(res.body).has.property('createdAt', creationDate)
            expect(res.body).has.property('id', userId)
        }).then((res) =>{
            const userId = res.body.id
            // PATCH USER REQUEST
            cy.request({
                method:  "PATCH",
                url: 'https://reqres.in/api/users/'+userId,
                // ITS A PATCH REQUEST SO ALL FIELD ARE NOT CHANGED  
                body:{
                    "name": "bilal waheed updated",
                    "job": "QA Eng updated",
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('name', 'bilal waheed updated')

            })
        })

    })
})