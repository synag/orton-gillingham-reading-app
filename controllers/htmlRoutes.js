// const word_list = require('../utils/helpers')
const router = require("express").Router();
const { Ortonwords } = require("../model");


router.get("/", async (req, res) => {
  try {
   
    res.render("login", {
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//     try {
//       const wordData = await Ortonwords.findAll({
//         where: {
//           phonetics: "vc",
//           word_owner: "Camilla",
//         },
//       });
      
  
//       if (!wordData) {
//         res.status(404).json({ message: "No project found with this id!" });
//         return;
//       }
  
//       res.status(200).json(wordData);
//       let new_list_word = wordData


// res.render("camilla", {
//     new_list_word,
  
//   });

//     } catch (err) {
//       res.status(500).json(err);
//     }
//   })
  //get array word set 2
  //get array word set 3
  //get array word set 4
  //get array word set 5
  //get array word set 5



  module.exports = router;