describe("Scroll Horizontally to Right", () => {

    it("Sroll Horizontally to right and pick the 10th date of new month", async () => {

        // view -> Data Widget->Dialog
        await $("~Views").click();

        await $("~Date Widgets").click();

        await $("~1. Dialog").click();

        //get current date

        let currentDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
        await $("~change the date").click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await browser.pause(4000)
        // await $('//android.view.View[@content-desc="10 December 2023"]').click()

        await $("//*[@text='10']").click()


        await $("//*[@text='OK']").click()

        browser.pause(4000)

        expect(currentDate).not.toEqual(currentDate2)





    })





})