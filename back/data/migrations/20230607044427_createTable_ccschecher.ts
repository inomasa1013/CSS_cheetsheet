import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("ccsEffect", (table) => {
    table.increments("id");
    table.string("title", 255);
    table.string("explain", 1000);
    table.string("node", 1000);
  });
}

export async function down(knex: Knex): Promise<void> {}
