const React = require("react")
const ReactDOM = require("react-dom")
const App = require("../src/App")

describe("boom button", function () {

    describe("when I don't click the button", function () {
        it("then the page does not say 'BOOM'", function () {
            expect(page()).not.toContain("BOOM")
        })
    })

    describe("when I click the BOOM button", function () {
        it("then the page says 'BOOM'", function () {
            boomButton().click()

            expect(page()).toContain("BOOM")
        })
    })

    let domFixture

    beforeEach(function () {
        setupDOM()
        mountApp()
    })

    function boomButton() {
        return document.querySelector("button");
    }

    function setupDOM() {
        domFixture = document.createElement("div")
        document.body.appendChild(domFixture)
    }

    function mountApp() {
        ReactDOM.render(
            <App/>,
            domFixture
        )
    }

    function page() {
        return domFixture.innerText
    }

    function cleanupDOM() {
        domFixture.remove()
    }

    afterEach(function () {
        cleanupDOM()
    })
})