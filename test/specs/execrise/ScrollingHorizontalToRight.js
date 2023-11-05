describe("Scroll Horizontally to Right", () => {

    it("Sroll Horizontally to right and pick the 10th date of new month", async () => {

        // view -> Data Widget->Dialog
        await $("~Views").click();

        await $("~Date Widgets").click();

        await $("~1. Dialog").click();

        await $("~change the date").click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await browser.pause(4000)
        await $('//android.view.View[@content-desc="10 December 2023"]').click()
    })





})