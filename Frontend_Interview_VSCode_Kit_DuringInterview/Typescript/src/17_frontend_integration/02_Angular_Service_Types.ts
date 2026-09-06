/**
 * INTERVIEW ONE-LINER:
 * In Angular, TypeScript provides contracts behind DI services, HttpClient models, RxJS streams, forms, signals, and component APIs.
 *
 * RUN: npx tsx src/17_frontend_integration/02_Angular_Service_Types.ts
 * Important code lines are commented for interview revision.
 */

type UserDto={id:number;name:string}; type VM=UserDto&{initials:string}; function map(u:UserDto):VM{return{...u,initials:u.name.split(" ").map(p=>p[0]??"").join("")}} console.log(map({id:1,name:"Sujata Kumari"}));
