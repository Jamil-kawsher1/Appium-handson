describe("Input Value", async () => {
  it("Input Value test Exercise", async () => {
    // Clicking on Viewa using Accessibility Id

    await $("~Views").click();

    //Clicking on Auto complete Element using Xpath
    // optional using text //*[@text='Auto Complete']
    await $("//android.widget.TextView[@text='Auto Complete']").click();
    //
    await $("//android.widget.TextView[@content-desc='1. Screen Top']").click();

    //Typing value In Input Field
    await $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]'
    ).setValue("Bangladesh");

    //Assertion To Be sure about Value

    let InnerValue = await $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]'
    ).getText();

    await expect(InnerValue).toEqual("Bangladesh");
  });
});
