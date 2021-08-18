/// <reference types ="Cypress" />

describe('get api user tests', ()=>{
    it('get singal user detail', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users/2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.id).to.eq(2)
            expect(res.body.data.first_name).to.eq('Janet')
            expect(res.body.data.last_name).to.eq('Weaver')
            expect(res.body.data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg')
            expect(res.body.data.email).to.eq('janet.weaver@reqres.in')
        })
    })
    it('get total no of users fron singal page', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=1'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.per_page).to.eq(6)
        })
    })
})