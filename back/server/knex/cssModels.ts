import knex from "knex";
import knexfile from "../../data/index";
const Knex = knex(knexfile);

const EFFECT_TABLE: string = "csseffect";

const models = {
  /**
   * Description placeholder
   * csseffectテーブル内のデータを全て取得
   * @async
   * @returns {Promise<string[]>}
   */
  async getAll(): Promise<string[]> {
    return await Knex(EFFECT_TABLE).select("*");
  },
};

export default models;
