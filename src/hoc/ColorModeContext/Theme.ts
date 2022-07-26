import TypeStorage from "../../utils/TypeStorage";

export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

const ModeStorage = new TypeStorage<Mode>("theme", localStorage);

class Theme {
  constructor(private storage: TypeStorage<Mode>) {}
  getMode() {
    let mode = this.storage.get();
    if (mode === null) {
      mode = Mode.LIGHT;
      this.storage.set(mode);
    }
    return mode;
  }
  toggleMode() {
    const mode = this.storage.get() === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    this.storage.set(mode);
    return mode;
  }
}

export default new Theme(ModeStorage);
