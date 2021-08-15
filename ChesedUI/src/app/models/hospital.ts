export interface Hospital {
    id:number;
    hospitalCode:string;
    description:string;
    address:string|null;
    city:string;
    state:string;
    zip:number;
    area:string;
    mainPhone:string;
    erPhone:string|null;
    contactPerson:string|null;

}
