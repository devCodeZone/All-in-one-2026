/**
 * INTERVIEW ONE-LINER:
 * Enums create named constants, but const objects plus literal unions are often simpler for frontend APIs.
 *
 * RUN: npx tsx src/01_basics/06_Enum_vs_Const_Object.ts
 * Important code lines are commented for interview revision.
 */

enum RoleEnum{Admin="ADMIN",User="USER"}
const Role={Admin:"ADMIN",User:"USER"} as const;
type Role=(typeof Role)[keyof typeof Role];
const role:Role=Role.Admin;
console.log(RoleEnum.Admin,role);
