import pool from "./_db.js"
export const resolvers = {
    Query : {
        users(){
            return pool.query("select * from users;")
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
                
        },
        projects(){
            return pool.query("select * projects ;")
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
                
        },
        tasks(){
            return pool.query("select * from tasks;")
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
                
        },
        members(){
            return pool.query("select * from member;")
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
                
        },
        
        user(_ , args){
            const { user_id, email } = args;
            let query = "select * from users where  "
            let values = [] ; 
            if(user_id) {
                query+=` user_id = $1 ;`
                values.push(parseInt(user_id)) ;
            }
            else if(email){
                query+= ` email = $1 ;`
                values.push(email) ; 
            }
            return pool.query(query, values)
            .then(res=>{ return res.rows[0]})
            .catch(err => {throw(err)})
        },
        project(_,args){
            return pool.query("select * from projects where project_id =$1 ;", [parseInt(args.project_id)])
            .then(res=>{ return res.rows[0]})
            .catch(err => {throw(err)})
        },
        task(_ ,args){
            return pool.query("select * from tasks where task_id =$1 ;", [parseInt(args.task_id)])
            .then(res=>{ return res.rows[0]})
            .catch(err => {throw(err)})
        }
    },
    User :{
        projects(parent){
            return pool.query("select * from projects where owner_id =$1  ;" , [parseInt(parent.user_id)])
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
        }
        
    },
    Project:{
        owner(parent){
            return pool.query("select * from users where user_id =$1 ;" , [parseInt(parent.owner_id)])
            .then(res=>{ return res.rows[0]})
            .catch(err => {throw(err)})
        },
        tasks(parent){
            return pool.query("select * from tasks where project_id =$1 ;" , [parseInt(parent.project_id)])
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)}) 
        },
        members(parent){
            return pool.query("select * from member where project_id =$1 ;" , [parseInt(parent.project_id)])
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
        }
    },
    Member :{
        user(parent){
            return pool.query("select * from users where user_id =$1 ;" , [parseInt(parent.user_id)])
            .then(res=>{ return res.rows[0]})
            .catch(err => {throw(err)})
        }
    }
}