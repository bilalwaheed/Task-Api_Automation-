/// <reference types ="Cypress" />

describe('Post user request', ()=>{
    it('Creat test single user', ()=>{
        cy.fixture('createuser').then((payload)=> {
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            // USER ID IS NOT ADDED IN POST BODY IT WILL AUTOMATICALLY ADDED
            body:{
                "name": payload.name,
                "job": payload.job,
                "createdAt": payload.createdAt
            }
        }).then((res)=>{
            //GETTING USER ID FROM RESPONSE BODY
            const userId = res.body.id
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name',payload.name)
            expect(res.body).has.property('job',payload.job)
            expect(res.body).has.property('id',userId)
        })

    })
    })
    // REGISTRATION WITH POST REQUEST
    it('register user', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/register',
            headers : {
                "id": 4,
                'token' : "QpwL5tke4Pnpja7X4",
            },
            body:{
                "email": "eve.holt@reqres.in",
                "password": "pistol",
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

 
    })
    // LOGIN WITH POST REQUEST
    it('login user', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/login',
            headers : {
                'token' : "QpwL5tke4Pnpja7X4",
            },
            body:{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka",
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

 
    })
})