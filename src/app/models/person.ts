import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { SocialMedia } from "./SocialMedia";

export interface Person{
    idPerson:number;
    name:string;
    surname:string;
    email:string;
    phone:string;
    address:string;
    birth:Date;
    children:number;
    lastGraduation:string;
    avatar:string;
    iam:string;
    aboutme:string;
    civil:string;
    socials:Array<SocialMedia>;
    skills:Array<Skills>;
    education:Array<Education>;
    experience:Array<Experience>;
}