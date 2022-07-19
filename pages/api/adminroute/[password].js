export default function handler(req, res) {
    if(req.query.password == "wirReich") {
        res.send("true");
    } else {
        res.redirect("/404");
    }
}