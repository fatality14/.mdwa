import ERights from "../enums/ERights"
import HasId from "./interfaces/HasId"
import { HasLoginPass } from "./interfaces/HasLoginPass"
import HasRights from "./interfaces/HasRights"


export class UserData implements HasRights, HasLoginPass{
    rights!: ERights
    csrf!: string
    login!: string
    password!: string
}


export class User implements HasId{
    id!: number
    data!: UserData
}

export class UserAuthInput implements HasLoginPass{
    csrf?: string
    login?: string
    password?: string
}


export class UserRightsInput implements HasRights{
    rights!: ERights
}

export class UserChangeInput implements HasLoginPass, HasRights{
    rights?: ERights
    login?: string
    password?: string
}
