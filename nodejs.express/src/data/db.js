const MongoClient = require('mongodb').MongoClient
const mongo = require('mongodb');

const defaultConnection = process.env.COLLECTION
let db


MongoClient.connect('mongodb://mongo:27017', (error, database) => {
    if (error) {
    } else {
        db = database.db(process.env.DATABASE)
    }

})


function findOne({ collection = defaultConnection, query }) {
    return new Promise((res, rej) => {
        var col = db.collection(collection);

        col.findOne(query, function(err, item) {
            if (err) {
                rej(err) 
            } else {
                res(item)
            }
        })
    })
}


function find({ collection = defaultConnection, query }) {
    return new Promise((res, rej) => {
        db
            .collection(collection)
            .find(query)
            .toArray(function(err, items) {
                if (err) {
                    return rej(err) 
                } else {
                    res(items)
                }
            })
        
    })
}

function insert({ collection = defaultConnection, search = {}, query }) {
    return new Promise((res, rej) => {
        db
            .collection(collection)
            .insert((search, query), 
                function(err, items) {
                    if (err) {
                        return rej(err) 
                    } else {
                        res(items)
                    }
                })
    })
}


function sureUpdate({ collection = defaultConnection, search, query }) {
    return new Promise((res, rej) => {
        var col = db.collection(collection)

        col.update(search, query,
            function(err, u) {
                if (err) {
                    return rej(err) 
                } else {
                    if (u.result.n === 0) {
                        return rej("No match was found with query")
                    } else {
                        return res(u)
                    }
                }
            })

    })
}

function update({ collection = defaultConnection, search, query }) {
    return new Promise((res, rej) => {
        var col = db.collection(collection)

        col.update(search, query,
            function(err, items) {
                if (err) {
                    return rej(err) 
                } else {
                    res(items)
                }
            })

    })
}


function remove({ collection = defaultConnection, query }) {
    return new Promise((res, rej) => {
        var col = db.collection(collection);

        col.remove(query,
            function(err, items) {
                if (err) {
                    return rej(err) 
                } else {
                    res(items)
                }
            })
    })
}

module.exports =  {
    findOne,
    find,
    insert,
    update,
    remove,
    ObjectId: mongo.ObjectId
}
