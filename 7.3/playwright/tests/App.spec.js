import { test, expect } from "@playwright/test";
import { email, password } from "./user.js";
// test("test", async ({ page }) => {
//   // Go to https://netology.ru/free/management#/
//   await page.goto("https://netology.ru/free/management#/");

//   // Click a
//   await page.click("a");
//   await expect(page).toHaveURL("https://netology.ru/");

//   // Click text=Учиться бесплатно
//   await page.click("text=Учиться бесплатно");
//   await expect(page).toHaveURL("https://netology.ru/free");

//   page.click("text=Бизнес и управление");

//   // Click text=Как перенести своё дело в онлайн
//   await page.click("text=Как перенести своё дело в онлайн");
//   await expect(page).toHaveURL(
//     "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
//   );
// });

test("test 1 Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder="Email"]', email);

  await page.fill('[placeholder="Пароль"]', password);

  await page.click('[data-testid="login-submit-btn"]');

  await expect(page).toHaveURL("https://netology.ru/profile");

  await expect(
    page.locator(
      "#app > div.src-LMS-containers-Layout--root--_7tuL.src-LMS-containers-Layout--inner--Vmi8T.src-LMS-containers-Layout--mobile--y2_ce > section > div.src-components-pages-Profile--root--GZ5Xm > div.src-components-layouts-ProfileTemplates-WrapTemplate--wrap--zrXel.src-components-layouts-ProfileTemplates-WrapTemplate--mobile--buwI5 > div > div > div.src-components-pages-Profile-Programs--root--kF8uD > div.src-components-pages-Profile-Programs--heading--vVw3p > h2"
    )
  ).toHaveText("Моё обучение");

  await page.close;
});

test("test 2 Authorization with invalid data", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder="Email"]', "vasyapupkin@lya.lya");

  await page.fill('[placeholder="Пароль"]', "vasyapupkin");

  await page.click('[data-testid="login-submit-btn"]');

  await expect(
    page.locator(
      "#__next > div:nth-child(2) > div > div > div.modal_container__yO5GZ > div.modal_content__Flhjj > div.styles_root__l6N51 > div > form > div.Input_root__VNG5T.Input_size-m__VJJaZ.Input_fluid__Cycj8.Input_error__WgHA7 > div"
    )
  ).toHaveText("Вы ввели неправильно логин или пароль");

  await page.close;
});
