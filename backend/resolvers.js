import pool from "./_db.js"
import expressSession from "./index.js";
import jsonWebToken from 'jsonwebtoken' ; 
const jwt = jsonWebToken ; 
export const resolvers = {
    Query : {
        users(){
            return pool.query("select * from users;")
            .then(res=>{ return res.rows})
            .catch(err => {throw(err)})
                
        },
        projects(_, args , context){
            return pool.query(`select project_name, priority, projects.created_at, state, task_number, team_number, owner_id , projects.project_id 
            from users 
            join member on users.user_id = member.user_id 
            join projects on member.project_id = projects.project_id 
            where users.user_id =$1`,[context.user_id])
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
        project(_,args ,context){
            console.log(args , context); 
            return pool.query(`select  p.project_name, p.priority, p.created_at, p.state, p.task_number, p.team_number, p.owner_id , p.project_id from users u 
            join member m on u.user_id = m.user_id 
            join projects p on m.project_id=p.project_id 
            where u.user_id =$2 and p.project_id=$1;`, [parseInt(args.project_id) , context.user_id])
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
            return pool.query(`select project_name, priority, projects.created_at, state, task_number, team_number, owner_id , projects.project_id 
            from users 
            join member on users.user_id = member.user_id 
            join projects on member.project_id = projects.project_id where users.user_id = $1` , [parseInt(parent.user_id)])
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
    },
    Mutation : {
        addUser(_,args){
            const user = {
                ...args.user
            }
            return pool.query("INSERT INTO users(email , name , password) values($1,$2,$3)" , [user.email ,user.name , user.password]) 
            .then(res=>{return res.command+"D "+res.rowCount+" rows."})
            .catch(err => {throw(err)});
        },
        addProject(_,args , {context}){

            const project = {
                ...args.project
            }
            return pool.query("INSERT INTO projects(project_name , priority , owner_id) values($1,$2,$3)" , [project.project_name ,project.priority , parseInt(req.session.user)]) 
            .then(res=>{return res.command+"D "+res.rowCount+" rows."})
            .catch(err => {throw(err)});
        },
        addMember(_,args){
            const member = {
                ...args.member
            }
            return pool.query("INSERT INTO member(user_id , project_id , role) values($1,$2,$3)" , [parseInt(member.user_id ),parseInt(member.project_id) , member.role]) 
            .then(res=>{return res.command+"D "+res.rowCount+" rows."})
            .catch(err => {throw(err)});
        },
        login(_,args){

            
            const user = {
                ...args.user
            }
            
            return pool.query("select * from users where email = $1 and password = $2 ; " , [user.email,user.password]) 
            .then(res=>{
                if (res.rowCount ===1){
                    console.log(res.rows) ; 
                    const token = jwt.sign({user_id : res.rows[0].user_id} ,"oussama.bh" , { expiresIn: '50h' });
                    return token ; 
                }
                return "Wrong credetial" ; 
            })
            .catch(err => {throw(err)});
        }
    } 
}