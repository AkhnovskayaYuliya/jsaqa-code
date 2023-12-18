const { TestWatcher } = require("jest");
const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("No sorted books", () => {
    const input = ["Алиса в стране чудес", "Алиса в стране чудес"];
    const output = sorting.sortByName(input);
    const expected = ["Алиса в стране чудес", "Алиса в стране чудес"];
    expect(output).toEqual(expected);
  });
});
