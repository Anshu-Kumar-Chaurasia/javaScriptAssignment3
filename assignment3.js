//ASSIGNMENT:3

//Q1
const Find_Digits = () =>
{
    let a=parseInt(prompt("Enter the number"));
    let b=a.toString();
    return (`${b.length} is the number of digits`);
}
console.log(Find_Digits());

//Q2
const Find_Five = () =>
{
    let a=prompt("Enter the number you want to check");
    let b=a.toString();
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(b[i]==5)
        {
            count++;
        }
    }
    return count;
}
console.log(Find_Five());

//Q3
const Findsum = () =>
{
    let a=0;
    for(let i=1;i<=6;i++)
    {
        if(i%2==0)
        {
            a+=i;
        }
    }
    return a;
}
console.log(Findsum());

//Q4
const Number_Sum = () =>
{
    let a=parseInt(prompt("Enter the number you wanna add"));
    let b=a.toString();
    let sum=0;
    for(let i=1;i<=b.length;i++)
    {
        sum=+i;
    }
    return sum;
}
console.log(Number_Sum());

//Q5
const Print_Odd = () =>
{
    for(let i=1;i<=10;i++)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    }
}
Print_Odd();

//Q6
const Print_pattern = () =>
{
    let n=5;
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<i;j++)
        {
            document.write("* ");
        }
        document.write("*"+ "<br>");
    }
}
Print_pattern();

//Q7
const Prime_check = (a) =>
{
    let check=true;
    if(a==0 || a==1)
    {
        check=false;
    }
    for(let i=2;i<=a-1;i++)
    {
        if(a%i==0)
        {
            check=false;
        }
    }
    if(check==true)
    {
        return (`${a} is a prime number`);
    }
    else
    {
        return (`${a} is not a prime number`);
    }
}
console.log(Prime_check(9))

//Q8
const printnumber = () =>
{
    for(let i=1;i<=10;i++)
    {
        console.log(i);
    }
}
printnumber();

//Q10
const table = (a,b) =>
{
    for(let i=1;i<=b;i++)
    {
        console.log(a,"*",i,"=",a*i);
    }
}
table(3,10);



