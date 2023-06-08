import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("csseffect").del();

  // Inserts seed entries
  await knex("csseffect").insert([
    {
      title: "hover",
      explain: "card on mouse",
      code: "sub:hover { color: orange; }",
    },
  ]);
}
