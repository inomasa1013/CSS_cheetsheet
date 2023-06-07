import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cssEffect").del();

  // Inserts seed entries
  await knex("cssEffect").insert([
    { title: "rowValue1", explain: "", code: "" },
  ]);
}
