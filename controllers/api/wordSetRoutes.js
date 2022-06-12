const router = require("express").Router();
const { Ortonwords } = require("../../model");

//get array word set 1 - Phonetics
router.get("/camillaWords", async (req, res) => {
  try {
    const wordData = await Ortonwords.findAll({
      where: {
        phonetics: "vc",
        word_owner: "Camilla",
      },
    });
    console.log(wordData);

    if (!wordData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get array word set 2
//get array word set 3
//get array word set 4
//get array word set 5
//get array word set 5

//Create new words to the list

//note - ideas - Voice  and Video

module.exports = router;
