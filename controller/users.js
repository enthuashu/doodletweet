const router = require("express").Router();
const USERS = require("../models/User");
const TWEET = require("../models/Tweet");
const passport = require("passport");
const { encryptPassword, verifyPassword } = require("../utils/PasswordUtil");
const {
  verifyJWT,
  signJWT,
  setCookie,
  clearCookie,
} = require("../utils/tokenUtil");
const Favourites = require("../models/Favourites");

router.post("/signup", async (req, res) => {
  try {
    const isUserExit = await USERS.findOne({
      email: req.body.email,
    });

    if (isUserExit) {
      return res.status(400).json({
        error: "User already exist",
        success: false,
      });
    }

    const { name, email, password, profilePic } = req.body;

    let newUser;

    newUser = new USERS({
      name,
      email,
      password,
      profilePic,
    });

    newUser.password = await encryptPassword(password);
    newUser.save().then((generatedUser) => {
      res.json({
        user: generatedUser,
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await USERS.findOne({
    email,
  });

  if (!user)
    return res.status(400).json({
      message: "User not found",
      success: false,
    });

  const isPasswordMatch = await verifyPassword(password, user.password);

  if (!isPasswordMatch)
    return res.status(400).json({
      message: "Please check email and password",
      success: false,
    });

  const payloaduser = {
    id: user.id,
    name: user.firstname + " " + user.lastname,
  };

  const token = await signJWT(payloaduser);
  setCookie(res, token);
  return res.json({
    success: true,
    type: user.type,
  });
});

router.get(
  "/current",
  passport.authenticate("user", {
    session: false,
  }),
  async (req, res) => {
    try {
      const profile = await USERS.findById(req.user.id);
      res.status(200).json(profile);
    } catch {
      res.status(400).json({
        success: false,
      });
    }
  }
);

router.get("/logout", function (req, res) {
  clearCookie(res);
  return res.json({
    success: true,
  });
});

router.post(
  "/addtweet",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      const { title, content } = req.body;

      let newTweet;

      newTweet = new TWEET({
        id: req.user.id,
        title,
        content,
      });
      const savetweet = await newTweet.save();
      return res.json({
        data: newTweet,
        success: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);

router.get(
  "/mytweets",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      const tweets = await TWEET.find({ id: req.user.id })
        .populate("id", "name profilePic")
        .sort({ createdAt: -1 });
      return res.json({ success: true, data: tweets });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);
router.get(
  "/number",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      const tweets = await TWEET.countDocuments({ id: req.user.id });

      return res.json({ success: true, data: tweets });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);
router.get(
  "/alltweets",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      const tweets = await TWEET.find()
        .populate("id", "name profilePic")
        .sort({ createdAt: -1 });
      return res.json({ success: true, data: tweets });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);
router.delete(
  "/delete/:id",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      await Promise.all([
        TWEET.findByIdAndDelete(req.params.id),
        Favourites.findOneAndDelete({ tweetid: req.params.id }),
      ]);

      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);
router.get(
  "/fav/:id/:by",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      let check = await Favourites.findOne({
        id: req.user.id,
        tweetid: req.params.id,
        tweetedby: req.params.by,
      });
      if (check) {
        return res.json({
          message: "Already in Favourites",
          success: true,
        });
      }

      let favtweet;

      favtweet = new Favourites({
        id: req.user.id,
        tweetid: req.params.id,
        tweetedby: req.params.by,
      });
      await favtweet.save();
      return res.json({
        message: "Saved in favourites",
        success: true,
      });

      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);

router.get(
  "/favtweets",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      const tweets = await Favourites.find({ id: req.user.id })
        .populate(
          "tweetid tweetedby",
          "title content createdAt name profilePic"
        )
        .sort({ createdAt: -1 });
      return res.json({ success: true, data: tweets });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);

router.delete(
  "/deletefav/:id",
  passport.authenticate("user", { session: false }),
  async (req, res) => {
    try {
      await Favourites.findByIdAndDelete(req.params.id);

      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
);

module.exports = router;
