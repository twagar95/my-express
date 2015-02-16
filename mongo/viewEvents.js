module.exports = function(app) {

    app.get('/view/event/:event_id', function(req, res) {

        // get the event collection
        var events = app.db.get('events')

         var q = {
            'id': req.params.event_id            
        }

        var theEvent = events.findOne(q, function(err, item) {

            res.render('viewEvents.jade', {
                theEvent: item
            })
        })

    })
}
