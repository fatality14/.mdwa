import { Part, PartDataInput } from "./Part"

export class PageData {
    parts!: Part[]
    name!: string
}

export class Page {
    id!: number
    data!: PageData
}

export class PageInput {
    parts!: PartDataInput[]
    name!: string
}

export class PageChangeInput {
    parts!: PartDataInput[]
    name!: string
}