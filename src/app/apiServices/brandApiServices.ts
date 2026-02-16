import axios from "axios";
import assert from "assert";

import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import { Brand } from "../types/user";


class BrandApiServices {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTopBrands() {   
    try {
      const url = "/brand?order=top&page=1&limit=4",
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const topBrands: Brand[] = result.data.data;
      return topBrands;
    } catch (err: any) {
      console.log(`ERROR::: getTopBrands ${err.message}`);
      throw err;
    }
  }
}

export default BrandApiServices;
