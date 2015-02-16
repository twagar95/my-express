module.exports = function(app) {

    app.get('/view/repo/:repo_id', function(req, res) {

        // get the repo collection
        var repos = app.db.get('repos')

         var q = {
            'id': Number(req.params.repo_id)            
        }

        var repo = repos.findOne(q, function(err, item) {

            res.render('viewRepos.jade', {
                repo: item
            })
        })

    })
}
