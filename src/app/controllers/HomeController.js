module.exports = {

    index(req, res) {
        try {
            return res.render("home/index")
        } catch (error) {
            console.error(error)
        }
    }

}