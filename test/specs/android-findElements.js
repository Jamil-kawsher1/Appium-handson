describe("Android Element", () => {
  it("Find Element By accessibility id", async () => {
    //find element By Accessibility id
    const appOption = await $("~App");

    // Click On The Element
    await appOption.click();
    //Assertion
    const actionBar = await $("~Action Bar");
    //checking If Action Bar Is available or not not as element
    await expect(actionBar).toBeExisting();
  });

  it("Find Element By Class Name ", async () => {
    const className = await $("android.widget.TextView");
    // console.log(await className.getText());
    //Assertion

    expect(className).toHaveText("API Demo");
  });

  it("Find Element By Xpath", async () => {
    //Find Element using Xpath

    //xpath - (//tagname[@attribute=value])
    (
      await $("//android.widget.TextView[@content-desc='Alert Dialogs']")
    ).click();

    //Find Element Using resource-id
    //xpath - (//tagname[@attribute=value])
    await $(
      "//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']"
    ).click();

    //Find Element By text

    (await $("//android.widget.TextView[@text='Command two']")).click();

    // Find By Text And -----Assertion
    const textAssertion = await $("android.widget.TextView");

    expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
});
