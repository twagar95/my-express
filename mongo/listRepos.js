module.exports = function(app) {

    app.get('/list/repos', function(req, res) {

        // get the repos collection
        var repos = app.db.get('repos')

        // execute the query to find those matched limiting to 20
        repos.find({}, {
            limit: 15
        }, function(err, repos) {

            res.render('listRepos.jade', {
                repos: repos
            })
        })

    })
}
