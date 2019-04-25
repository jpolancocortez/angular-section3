export class Recipe {

    private _name: string;
    private _description: string;
    private _imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this._name = name;
        this._description = desc;
        this._imagePath = imagePath;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description() {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get imagePath() {
        return this._imagePath;
    }

    set imagePath(imagePath: string) {
        this._imagePath = imagePath;
    }

}
