import { IApiResult } from "./IApiResult";

export interface ITraits{
    name: string,
    index: string,
    races: IApiResult[],
    subraces: IApiResult[],
    desc: string[],
    proficiencies: IApiResult[],
    url: string
}