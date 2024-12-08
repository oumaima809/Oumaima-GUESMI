const express = require("express");
const cors = require("cors")
const db = require("./db")
const app = express()



 //Middleware

 app.use(cors())
 app.use(express.json())


 //Routes//

 //Create a task

 app.post("/api/task", (req, res) => {
    try {
        const { title,description,priority,category,due_date,completion_status} = req.body;
        console.log(req.body)
 
        const sql = "INSERT INTO tasks (title,description,priority,category,due_date,completion_status) VALUES (?, ?, ?, ?,?,?)";
        db.query(sql, [title,description,priority,category,due_date,completion_status], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Server error" });
            }

            console.log("Contact added:", result);
            return res.json({ message: "Contact added successfully" });
        });

    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});




 //Get all taks

 app.get("/api/tasks", (req,res)=>{
    try {
        
        const sql =  "SELECT * FROM tasks ";
        db.query(sql, (err,result)=>{
        if(err) return res.json({message: "Server error"});
        console.log(result);
        return res.json(result);
        });
        
    } catch (error) {
        console.log(error.message);
    }

})







 //Get one task depending on the flter if it's category or due_date

 app.get("/api/tasks/:filter/:param", (req, res) => {
    try {
        const { filter, param } = req.params;
       
        let sql ;
        if(filter === 'category'){
            
            sql = "SELECT * FROM tasks WHERE `category` = ? ";
        }
        else {
           
            sql = "SELECT * FROM tasks WHERE `due_date` = ? ";
        }

        
        db.query(sql, [param], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Server error" });
            }

            console.log(result);
            return res.json(result);
        });
    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});




 //Edit a task 

 app.put("/api/tasks/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { title,description,priority,category,due_date,completion_status } = req.body;

        const sql = "UPDATE tasks SET  title= ?,  description= ?, priority = ?,category= ?, due_date = ?, completion_status=? WHERE id = ?";
        db.query(sql, [title,description,priority,category,due_date,completion_status,id], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Server error" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "task not found" });
            }

            console.log("task updated:", result);
            return res.json({ message: "tasls updated successfully" });
        });

    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});




//Delete a task

app.delete("/api/tasks/:id", (req,res)=>{
    try {
        const {id} = req.params;
        const sql = "DELETE FROM tasks WHERE id = ? "
        db.query(sql,[id],(err,result)=>{
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Server error" });
            }

           
            return res.json("task deleted");

        })
               
    } catch (error) {
        console.log(err.message)
    }
}) 
 
app.listen(5000,()=>{
    console.log("listening on port 5000")
})