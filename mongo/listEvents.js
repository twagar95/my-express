module.exports = function(app) {

    app.get('/list/events', function(req, res) {

        // get the events collection
        var events = app.db.get('events')

        // execute the query to find those matched limiting to 20
        events.find({}, {
            limit: 50
        }, function(err, events) {

            res.render('listEvents.jade', {
                myevents: events
            })
        })

    })
}
