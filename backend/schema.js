export const typeDefs = `#graphql

    type User{
        user_id: ID!,
        email: String! ,
        name: String! ,
        password: String! , 
        created_at: String! , 
        projects: [Project!] ,
    }
    type Project{
        project_id: ID!,
        project_name: String!,
        priority: String!,
        state: String! ,
        task_number: Int! , 
        team_number: Int!, 
        created_at: String!,
        owner: User,
        tasks: [Task!],
        members: [Member!]

    }
    type Task{
        task_id: ID!,
        description: String!,
        priority: String!,
        state: String! ,
        team_number: Int!, 
        created_at: String!
        project: Project
    }
    type Member{
        role: String,
        user: User
    }

    type Query{
        users: [User],
        user(user_id: ID ,email: String ) : User,
        projects:[Project],
        project(project_id: ID!) : Project,
        tasks:[Task],
        task(task_id: ID!) : Task
        members:[Member]
    }

    type Mutation{
        addUser(user : UserAdd):String 
        addProject(project: ProjectAdd): String
        addMember(member: MemberAdd) :String
    }
    input UserAdd{
        email: String! ,
        name: String!,
        password: String!
    }

    input ProjectAdd{
        project_name: String! ,
        priority: String!,
        owner_id: ID!
    }
    input MemberAdd{
        user_id: ID!,
        project_id : ID!,
        role: String!
    }

`