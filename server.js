const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

app.set("view engine", "ejs")
app.use('/articles', articleRouter)

app.get("/", (req, res) => {
	const articles = [{
		title: "sampole text title",
		dateModified: Date.now(),
		desc: "blah blah blah!!"
	}]
	res.render("index", { articles: articles })
})
app.listen(8000)