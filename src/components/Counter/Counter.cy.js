import React from 'react'
import Counter from './index'
import "@/app/globals.css"

describe('counter tests', () => {

  beforeEach(() =>{
    cy.mount(<Counter />)
  })

  it('counter equals to 0 when render', () => {
    cy.get("[data-test-id='counter']").should("have.text", 0)
  })

  it("counter's increment button runs successfully", () =>{
    cy.get("#increment").click()
    cy.get("[data-test-id='counter']").should("have.text", 1)
  })

  it("counter's decrement button runs successfully", () =>{
    cy.get("#increment").click()
    cy.get("[data-test-id='counter']").should("have.text", 1)
    cy.get("#decrement").click()
    cy.get("[data-test-id='counter']").should("have.text", 0)
  })
  
  it("resets counter value when counter starts a negative value", () =>{
    cy.mount(
      <Counter initialValue={-5} />
    )
    cy.get("[data-test-id='counter']").should("have.text", 0)
  })

  it("decrement button disabled when counter equals to 0", () =>{
    cy.mount(
      <Counter initialValue={1} />
    )
    cy.get("#decrement").click()
    cy.get("[data-test-id='counter']").should("have.text", 0)
    cy.get("#decrement").should("be.disabled")
  })

})