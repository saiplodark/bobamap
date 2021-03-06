module.exports={
    getStores: async(req,res)=>{
        // try {
            const db =req.app.get('db')
            // const{user_id} = req.session.user
            const stores = await db.stores.get_stores()
            res.status(200).send(stores)            
        // } catch (error) {
        //     console.log('error getting stores')
        //     res.status(500).send(error)
        // }
    },
    addStores: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {img,name,address,comment} = req.body
            const {user_id} = req.session.user
            const stores = await db.stores.add_stores({img,name,address,comment})
            console.log(stores)
            res.status(200).send(stores)
        } catch (error) {
            console.log('error add stores', error)
            res.status(500).send(error)
        }
    },
    addRatings: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {rating,store_id} = req.body
            // const {user_id} = req.session.user
            const stores = await db.ratings.add_ratings([rating,store_id])
            console.log(stores)
            res.status(200).send(stores)
        } catch (error) {
            console.log('error add rating', error)
            res.status(500).send(error)
        }
    },
    editStores:async(req,res)=>{
        try {
            const db = req.app.get('db')
            const{comment} = req.query
            const{id} = req.params
            // const {user_id} = req.session.user
            const stores = await db.stores.update_stores([id, comment])
            res.status(200).send(stores)  
        } catch (error) {
            console.log('error updating comment', error)
            res.status(500).send(error)
        }
    },
    deleteStores: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const stores = await db.stores.delete_stores(id) 
            res.status(200).send(stores)
        } catch (error) {
            console.log('error deleting stores', error)
            res.status(500).send(error)
        }
    },
    editRating: async(req,res)=>{
        try {
            const db = req.app.get('db')
            const{rating} = req.query
            const{id} = req.params
            // const {user_id} = req.session.user
            const stores = await db.ratings.update_ratings([id, rating])
            res.status(200).send(stores)  
        } catch (error) {
            console.log('error updating rating', error)
            res.status(500).send(error)
        }
    },
    avgRating:async(req,res,next)=>{
        try {
            const db = req.app.get('db')
            const{store_id}=req.session.store
            console.log(store_id)
            const stores=await db.rating.avg_ratings(store_id)
            res.status(200).send(stores)       
        } catch (error) {
            console.log('error getting avg rating')
            res.status(500).send(error)
        }
    }

}