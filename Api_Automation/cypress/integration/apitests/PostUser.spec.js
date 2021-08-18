/// <reference types ="Cypress" />

// const dataJson =  require('../../../../fixtures/createuser')
// const dataJson  = require('../../fixtures/createuser')

describe('Post user request', ()=>{
    it('Creat test signal user', ()=>{
        cy.fixture('createuser').then((payload)=> {

        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body:{
                "name": payload.name,
                "job": payload.job,
                "id": payload.id,
                "createdAt": payload.createdAt
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name',payload.name)
            expect(res.body).has.property('job',payload.job)
            expect(res.body).has.property('id',payload.id)
        })

    })
    })
})