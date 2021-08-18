/// <reference types ="Cypress" />

describe('Put user request', ()=>{
    it('create test signal user', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body:{
                "name": "bilal",
                "job": "QA Eng",
                "id": "5",
                "createdAt": "2021-08-18"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','bilal')
            expect(res.body).has.property('job','QA Eng')
        }).then((res) =>{
            const userId = res.body.id
            cy.log("user id is: " + userId)
            // put user request
            cy.request({
                method:  "PUT",
                url: 'https://reqres.in/api/users/'+userId,
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