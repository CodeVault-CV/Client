import TypeStorage, { IStorageMapper, WebStorage } from "../../utils/TypeStorage";

export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

class ThemeMapper implements IStorageMapper<Mode> {
  toJson(target: Mode) {
    return target;
  }
  fromJson(json: any): Mode {
    return json;
  }
}

class Theme {
  constructor(private modeStorage: TypeStorage<Mode>) {}
  getMode() {
    let mode = this.modeStorage.get();
    if (mode === null) {
      mode = Mode.LIGHT;
      this.modeStorage.set(mode);
    }
    return mode;
  }
  toggleMode() {
    const mode = this.modeStorage.get() === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    this.modeStorage.set(mode);
    return mode;
  }
}

const themeStorage = new TypeStorage("theme", new ThemeMapper(), new WebStorage(localStorage));

export default new Theme(themeStorage);
