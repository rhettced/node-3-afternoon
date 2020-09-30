module.exports = {
    create: (req,res, next) => {
        const db = req.app.get('db');
        const {name,description,price,image_url} = req.body;

        db.create_product( {name, description,price,image_url} )
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    getOne: (req,res, next) =>{
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    getAll: (req,res, next) => {
        const db = req.app.get('db');

        db.read_products()
        .then( product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    update: (req,res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {desc} = req.query;
//maybe something wrong here
        db.update_product([id,desc])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    delete: (req,res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
}