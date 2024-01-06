function receivesAFunction(return_function)
{
    return return_function()
}

const return_function = ()=> 4+5;
const returnsANamedFunction=()=>
{
    return function NamedFunction()
    {
        4+5
    }
}

const returnsAnAnonymousFunction=()=> 
{
    return (function(){return 4+5})
}
