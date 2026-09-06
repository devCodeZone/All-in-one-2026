/**
 * INTERVIEW ONE-LINER:
 * Separate API DTOs from domain/view models when transport shapes differ from application needs.
 *
 * RUN: npx tsx src/17_frontend_integration/03_DTO_vs_Domain.ts
 * Important code lines are commented for interview revision.
 */

type Dto={user_id:number;full_name:string}; type User={id:number;name:string}; function map(d:Dto):User{return{id:d.user_id,name:d.full_name}} console.log(map({user_id:1,full_name:"Sujata"}));
