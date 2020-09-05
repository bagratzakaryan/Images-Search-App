export class ImageModel {
    constructor(
        public id: number,
        public listId: number,
        public name: string,
        public altDescr: string,
        public authorUrl: string,
        public imageUrl: string
    ) { }
}
