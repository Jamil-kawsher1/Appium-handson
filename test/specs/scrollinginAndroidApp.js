describe("Scrolling in Android APP using Verious Method", () => {


    it("Vertical Scrolling", async () => {
        // APP-->Activity -->Secure Surfaces
        //CLicking On APP using relative Xpath similler to WEB element Xpath

        await $('//*[@text="App"]').click();

        //Clicking on Activity Using Accesibility Id

        await $('~Activity').click()

        //Scrolling to the End

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        

        //Clicking Secure Surfaces

        await $("~Secure Surfaces").click()

        //Assertion
        await expect($('~Secure Dialog')).toHaveText("Secure Dialog")
    })
})