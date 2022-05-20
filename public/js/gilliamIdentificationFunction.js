finalGilliamWordGroup = [];
finalLeftWordGroup = [];
finalRightWordGroup = [];
let keep = "";

function Gilliamfind(el) {
  const check = el;
  const gilliamP1 = [
    "ight",
    "ea",
    "oo",
    "ound",
    "y",
    "th",
    "cb",
    "sh",
    "es",
    "tw",
    "dw",
    "br",
    "cr",
    "dr",
    "fr",
    "gr",
    "tr",
    "pr",
    "sk",
    "st",
    "sp",
    "sw",
    "sc",
    "fl",
    "all",
    "ng",
    "ce",
    "ch",
    "nk",
    "ge",
    "gl",
    "nce",
    "nge",
    "mp",
    "nd",
    "nk",
    "nt",
    "pt",
    "ft",
    "ct",
    "ld",
    "lf",
    "lk",
    "lm",
    "lt",
    "lp",
    "nch",
    "lch",
    "ed",
    "nds",
    "ow",
    "tch",
    "dge",
    "ate",
    "ape",
    "ale",
    "age",
    "ame",
    "ade",
    "ote",
    "ole",
    "one",
    "ose",
    "re",
    "est",
    "un",
    "mis",
    "for",
    "dis",
    "en",
    "em",
    "er",
    "ful",
    "ness",
    "less",
    "ly",
    "en",
    "es",
    "ar",
    "str",
    "shr",
    "spl",
    "spr",
    "squ",
    "scr",
    "thr",
    "or",
    "ur",
    "ir",
    "ex",
    "ee",
    "ish",
    "like",
    "ling",
    "oe",
    "ie",
    "ue",
    "oa",
    "ai",
    "ay",
    "au",
    "aw",
    "oy",
    "oi",
    "ou",
    "be",
    "nce",
    "nse",
    "ble",
    "cle",
    "dle",
    "fle",
    "gle",
    "kle",
    "ckle",
    "stle",
    "scle",
    "ple",
    "tle",
    "zle",
    "ere",
    "ire",
    "ore",
    "are",
  ];

  for (let index = 0; index < gilliamP1.length; index++) {
    const results = check.search(gilliamP1[index]);
    if (results !== -1) {
      keep = gilliamP1[index];
    }

    const firstPosition = el.indexOf(keep);
    const lastPosition = el.indexOf(keep) + (keep.length - 1) + 1;

    const leftOfFirstFirst = 0;
    const leftOfFirstLast = el.indexOf(keep);

    const rightOfFirstFirst = el.indexOf(keep) + keep.length;
    const rightOfFirstLast = el.length;

    const gilliamWord = el.substring(firstPosition, lastPosition);
    const leftWord = el.substring(leftOfFirstFirst, leftOfFirstLast);
    const rightWord = el.substring(rightOfFirstFirst, rightOfFirstLast);

    console.log(rightWord);
    console.log(gilliamWord);

    finalGilliamWordGroup.push(gilliamWord);
    finalLeftWordGroup.push(leftWord);
    finalRightWordGroup.push(rightWord);
  }

  finalLeftWord = finalLeftWordGroup[finalLeftWordGroup.length - 1];
  finalGilliamWord = finalGilliamWordGroup[finalLeftWordGroup.length - 1];
  finalRightWord = finalRightWordGroup[finalLeftWordGroup.length - 1];

  // }
  $(document).ready(function () {
    $(".words").append(
      `<p><span style="color:black">${finalLeftWord}</span><span style="color:red">${finalGilliamWord}</span"><span style="color:black">${finalRightWord}</span></p>`
    );
  });
}

Gilliamfind("crane");
