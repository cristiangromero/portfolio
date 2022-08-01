import { Courses } from "./Courses";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Languages } from "./Languages";
import { Projects } from "./Projects";
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
    educations:Array<Education>;
    experiences:Array<Experience>;
    languages:Array<Languages>;
    courses:Array<Courses>;
    projects:Array<Projects>;
}