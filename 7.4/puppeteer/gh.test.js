let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 6000);
  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 6000);
});

describe("GitHub another headers content", () => {
  test("The page features the header content", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toContain("Pricing · Plans for every developer · GitHub");
  }, 15000);

  test("The page features the header content", async () => {
    await page.goto("https://github.com/features");
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toContain("Features | GitHub · GitHub");
  }, 15000);

  test("The page features the header content", async () => {
    await page.goto("https://github.com/features");
    const PageFeatureSelh1 = ".h1-mktg";
    await page.waitForSelector(PageFeatureSelh1, {
      visible: true,
    });
    const actual = await page.$eval(PageFeatureSelh1, (link) => link.innerText);
    expect(actual).toContain("The tools you need to build what you want.");
  }, 30000);
});
