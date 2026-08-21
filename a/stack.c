#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;


void push(int val)
{
    if (top == MAX - 1)
    {
        printf("Stack Overflow\n");
    }
    else
    {
        top++;
        stack[top] = val;
        printf("pushed value is %d \n", val);
    }
}
void pop()
{
    if (top == -1)
    {
        printf("Stack UnderFlow \n");
    }
    else
    {
        printf("Popped value from stack is %d \n", stack[top]);
        top--;
    }
}
void trav()

{
    if (top == -1)
    {
        printf("Stack is empty \n");
    }
    else
    {
        printf("Stack Elems are \n");
        for (int i = top; i >= 0 ; i--)
        {
            printf("%d \n",stack[i]);
        }
    }
}

void main()
{
    push(10);
    push(20);
    push(50);
    pop();
    trav();
}