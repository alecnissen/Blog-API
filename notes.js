// blog api 

// designing backend models 

// Your blog should have posts and comments, 
// so think about the fields you are going to want to include 
// for each of those.

// model users { 
//     id Int @id @default(autoincrement())
//     username String @unique @db.VarChar(255)
//     password String @db.VarChar(255)
//     email String
//     posts post[]
// }

// model post { 
//     id Int @id @default(autoincrement())
//     title String
//     content String
//     published Boolean @default(false)
//     date DateTime @default(now())
//     author String
//     comments Comment[]
//     public Boolean @default(false)
// }

// model comments { 
//     id Int @id @default(autoincrement())
//     content String
//     post post @relation(fields: [postId], references: [id])
//     postId Int
//     username
// }


// build out the frontend / homepage 

// install sass, each page its own scss file 

// properly link to the create account page, 

// properly create the user, 

// you will have to enforce rules when creating the user such as character length 

// look back at file uploader for ideas 

// validation and sanitation the inputs 

// once that is done the user must be properly stored in the database



// validation checks for frontend and backend 

// apply frontend validation checks and display messages when user 

// does not meet the requirements such as username length and password length 

// use react and state to manage this 

// clear form inputs after submission