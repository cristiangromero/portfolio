import { SocialMedia } from "./SocialMedia";

export interface Person{
    idPerson:number
    name:string;
    surname:string;
    email:string;
    phone:string;
    address:string;
    birth:Date;
    children:number;
    picture:string;
    avatar:string;
    iam:string;
    aboutme:string;
    socialMedia:Array<SocialMedia>;
}