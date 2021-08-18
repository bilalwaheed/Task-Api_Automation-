/// <reference types ="Cypress" />

describe('Delete user request', ()=>{
    it('create test signal user', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body:{
                "name": "bilal",
                "job": "QA Eng",
                "id": "2",
                "createdAt": "2021-08-18"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','bilal')
            expect(res.body).has.property('job','QA Eng')
        }).then((res) =>{
            const userId = res.body.id
            cy.log("user id is: " + userId)
            // dele userss
            cy.request({
                method:  "DELETE",
                url: 'https://reqres.in/api/users/'+userId,


            }).then((res)=>{
                expect(res.status).to.eq(204)

            })
        })

    })
})