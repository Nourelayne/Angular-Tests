import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', ()=>{
  let pipe;
  beforeEach(()=>{
    pipe = new StrengthPipe();
  });
  it("Should display weak if strength is 5", ()=>{
      let val = pipe.transform(5);

      expect(val).toEqual('5 (weak)'); 
   });

  it("Should display strong if strength is 18", ()=>{
    let val = pipe.transform(18);

    expect(val).toEqual('18 (strong)'); 
 });
})