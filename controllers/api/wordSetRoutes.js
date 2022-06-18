const router = require("express").Router();
const { Ortonwords } = require("../../model");
const newArray =[]

//get array word set 1 - Phonetics
router.get("/camillaWords", async (req, res) => {
  try {
    const wordData = await Ortonwords.findAll({
      where: {
        phonetics: "cvc",
        word_owner: "Camilla",
      },
    });
   
    if (!wordData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }
    // const newData = wordData.map((word))
    //   console.log(newData)
    for (let i = 0; i < wordData.length; i++) {
     
      newArray.push(wordData[i].word)
      console.log(newArray)
      
    }  
    

    res.status(200).json(newArray);
    
    
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
