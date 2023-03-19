export const home  = (req, res) => {res.send("home")}

export const league = (req, res) => {
  console.log(req.params.league)
  return res.render(req.params.league)
}

export const player = (req, res) => {
  if (req.params.league === "pl" && req.params.num == 13) {
    return res.render("hms")
  } else if (req.params.league === "pl" && req.params.num == 14) {
    return res.render("hch")
  }
  
}