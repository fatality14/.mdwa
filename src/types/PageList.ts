
import ERights from "../enums/ERights"
import HasId from "./interfaces/HasId"
import HasRights from "./interfaces/HasRights"
import { Page } from "./Page"


export class PageListData implements HasRights{
    pages!: Page[]
    usersAllowed!: string[]
    rights!: ERights
}


export class PageList implements HasId{
    id!: number
    data!: PageListData
}

export class PageListInput implements HasRights {
    rights!: ERights
    usersAllowed!: string[]
}