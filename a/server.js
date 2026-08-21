const express = require('express');

const app = express();
app.use(express.json())
let notes = [];
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.json({
        message: "Created Successfully"
    })
    
})
app.get('/notes',(req,res)=>{
    res.json(notes);

})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"Deleted Sucessfully"
    })
})
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const {title} = req.body

    notes[index].title = title;
    res.json({
        message :"Notes updated successfllyf"
    })
})
 
app.listen(3000,()=>{
    console.log("Server is running");
    
})
#include <stdio.h>

#define MAX 5

int stack[MAX];
int top = -1;

void push(int value)
{
    if (top == MAX - 1)
    {
        printf("Stack Overflow\n");
    }
    else
    {
        top++;
        stack[top] = value;
        printf("%d pushed into stack\n", value);
    }
}

int main()
{
    push(10);
    push(20);
    push(30);

    return 0;
}