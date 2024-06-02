class Controller {
  static home(req, res) {
    res.json({
      message: "Home Page",
    });
  }

  static catch(req, res) {
    let probability = Math.ceil(Math.random() * 100);
    let action = false;
    if (probability > 50) {
      action = true;
    }
    res.json({
      number: probability,
      catch: action,
    });
  }

  static release(req, res) {
    let number = Math.ceil(Math.random() * 10);
    let factors = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors++;
      }
    }
    res.json({
      message: number,
      factors,
    });
  }

  static rename(req, res) {
    const { nickname, renamed } = req.body;
    if (renamed > 0) {
      const justName = nickname.split("-")[0];
      let x = 0;
      let num1 = 0;
      let num2 = 1;
      let num3 = 0;

      for (let i = 0; i <= +renamed; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
      }
      let newNickname = justName + "-" + num1;
      let newRenamed = +renamed + 1;
      res.json({
        nickname: newNickname,
        renamed: +newRenamed,
        // fibonumber: 3,
      });
    } else if(renamed === 1) {
      
    }else {
      let newNickname = nickname + "-0";
      let renamed1 = 1;
      res.json({ nickname: newNickname, renamed: +renamed1 });
    }
  }
}

module.exports = Controller;
