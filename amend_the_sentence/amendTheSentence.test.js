const amendTheSentence = require("./amendTheSentence");

test("A mend the sentence", () => {
  expect(amendTheSentence("CodesignalIsAwesome")).toBe("codesignal is awesome");
});

test("A mend the sentence", () => {
  expect(amendTheSentence("Hello")).toBe("hello");
});

test("A mend the sentence", () => {
  expect(
    amendTheSentence(
      "vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG"
    )
  ).toBe(
    "v s kw w djw ier q k mg va anior r jlerb kp dgvy k b l p nw s r wtylq kew n ft e r nu u b b h as gk t s sfdh q h j yv aigh ade g"
  );
});

test("A mend the sentence", () => {
  expect(
    amendTheSentence(
      "iFvFAxtViLJDuWWXJesppOcLVdRAJZwBobdczkkWSPHzFLfyvmJYPdqYqRKKvLGYLwEFXcJiyYWLqjBvHjeqE"
    )
  ).toBe(
    "i fv f axt vi l j du w w x jespp oc l vd r a j zw bobdczkk w s p hz f lfyvm j y pdq yq r k kv l g y lw e f xc jiy y w lqj bv hjeq e"
  );
});

test("A mend the sentence", () => {
  expect(amendTheSentence("iEiMCyKAdsfGMPa")).toBe("i ei m cy k adsf g m pa");
});
