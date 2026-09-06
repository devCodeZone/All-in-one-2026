/**
 * INTERVIEW ONE-LINER:
 * Abstract classes provide shared implementation plus abstract members concrete subclasses must implement.
 *
 * RUN: npx tsx src/08_classes_oop/04_Abstract_Class.ts
 * Important code lines are commented for interview revision.
 */

abstract class Shape{abstract area():number;describe(){return`Area=${this.area()}`}} class Rect extends Shape{constructor(private w:number,private h:number){super()} area(){return this.w*this.h}} console.log(new Rect(4,5).describe());
