import HasId from "./interfaces/HasId"
import EPagePartType from "../enums/EPagePartType"


export class PartData{
    type!: EPagePartType
    content!: string
}


export class Part implements HasId {
    id!: number
    data!: PartData
}

export class PartDataInput {
    type!: EPagePartType
    content!: string
}

export class PartInput {
    id!: number
    data!: PartDataInput
}

export class PartChangeInput {
    id!: number
    swapid?: number
    data!: PartDataInput
}