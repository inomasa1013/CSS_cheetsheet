import chai from "chai";
import chaihttp from "chai-http";
chai.use(chaihttp);

import setupServer from "../server/src/routes/index";
const expect = chai.expect;

let request: any;
/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */

const server = setupServer();
describe("GET:cssAlldata", () => {
  beforeEach(() => {
    request = chai.request("http://localhost:3001");
  });

  it("it should return 200", async () => {
    request.get("/api/data").end((err: Error, res: Response) => {
      // console.log(res.statusCode);

      expect(res).to.have.status(200);

      expect(err).to.be.null;
    });
  });
});
