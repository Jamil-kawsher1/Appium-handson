describe("Android Activity Direct Access Option", () => {
  it("Access An Inner Activity Directly", async () => {

    //here in parameter 1st one is package name and Second One Is activity Name
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.AutoComplete1"
    );

    //Assertion

    const textContent = await $(
      "//*[@text='Views/Auto Complete/1. Screen Top']"
    );

    expect(textContent).toExist();
  });
});
