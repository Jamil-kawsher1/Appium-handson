describe("Dialog and Alert", () => {

    it("Working With Dialog box auto Accept", async () => {

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

    it.only("Dialog box Dismiss using In built method ", async () => {

        //Directly Accessing Alert Dialog Activity/Screen

        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        // Clicking On Ok Cancel Dialog with a Message

        await $("//*[@resource-id='io.appium.android.apis:id/two_buttons']").click()

        //Dismissing The Alert using Webedriver IoS Native mathod

        await driver.dismissAlert()

        // Checking For Dismiss is Executed Or Not

        await expect($("//*[@resource-id='android: id / alertTitle']")).not.toExist();


    })

})