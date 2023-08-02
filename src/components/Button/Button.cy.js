import React from 'react'
import Button from './index'
import "@/app/globals.css"
import chaiColors from 'chai-colors'

chai.use(chaiColors);

describe('<Button />', () => {

    beforeEach(() => {
        cy.viewport("macbook-15")
    })

    it("should renders successfully", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Button variant={"primary"}/>)
        cy.get("[data-cy='button']")
            .should("have.css", "background-color")
            .and("be.colored", "#669bbc")
    })
    it('should renders variant successfully', () => {
        const testString = "WARNING"
        cy.mount(<Button variant={"warning"}>{testString}</Button>)

        cy.get("[data-cy='button']").as("button")

        cy.get("@button")
            .should("have.css", "background-color")
            .and("be.colored", "#c1121f")

        cy.get("[data-cy='button-text']")
            .should("have.css", "color")
            .and("be.colored", "#ffffff")
    });

    it('should click successfully', () => {
        let clicked = false
        const handleClick = () =>{
            clicked = true
        }
        cy.mount(<Button onClick={handleClick} >
            Click me
        </Button>)

        cy.get("[data-cy='button']").click().then(() =>{

            cy.wrap(clicked).and("eq", true)
        })

    });
})