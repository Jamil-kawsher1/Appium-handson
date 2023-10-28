describe("Dialog and Alert", () => {

    it("Working With Dialog box", async () => {

        //path APP ->Alert Dialog-> Ok Cancel Dialog With Message

        // Clicking on APP

        await $('~App').click()

        // Clicking On Alert Dialog

        await $('~Alert Dialogs').click()

        // Clicking On Ok Cancel Dialog with a Message

        await $("//*[@resource-id='io.appium.android.apis:id/two_buttons']").click()

        // Accpting The Alert 

        await driver.acceptAlert()


        //assert That Alert text Is Gone

        await expect($("//*[@resource-id='android: id / alertTitle']")).not.toExist()

    })
})