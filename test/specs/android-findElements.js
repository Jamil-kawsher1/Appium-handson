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
});
