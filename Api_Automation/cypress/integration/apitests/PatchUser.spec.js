/// <reference types ="Cypress" />

describe('Patch user request', ()=>{
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
            const userId = res.body.id
            const creationDate = res.body.createdAt
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','bilal')
            expect(res.body).has.property('job','QA Eng')
            expect(res.body).has.property('createdAt', creationDate)
            expect(res.body).has.property('id', userId)
        }).then((res) =>{
            const userId = res.body.id
            // patch user request
            cy.request({
                method:  "PATCH",
                url: 'https://reqres.in/api/users/'+userId,
                body:{
                    "name": "bilal waheed",
                    "job": "QA Eng updated",
                    "id": "9",
                    // "createdAt": "2021-08-19"
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('name', 'bilal waheed')

            })
        })

    })
})