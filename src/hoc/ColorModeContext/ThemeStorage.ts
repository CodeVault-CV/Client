import Storage, { StorageMapper } from "../../utils/Storage";

type Theme = "light" | "dark";

class ThemeMapper implements StorageMapper<Theme> {
  toJson(target: Theme) {
    return target;
  }

  fromJson(json: any): Theme {
    return json; 
  }
}

export default new Storage("theme", new ThemeMapper());

