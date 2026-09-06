/**
 * INTERVIEW ONE-LINER:
 * A form model can intentionally differ from API/domain models so UI-only fields do not leak into backend contracts.
 *
 * RUN: npx tsx src/17_frontend_integration/04_Form_Model.ts
 * Important code lines are commented for interview revision.
 */

type Form={email:string;password:string;confirmPassword:string}; type Request={email:string;password:string}; function toRequest(f:Form):Request{const{confirmPassword:_,...r}=f;return r} console.log(toRequest({email:"a@x.com",password:"p",confirmPassword:"p"}));
