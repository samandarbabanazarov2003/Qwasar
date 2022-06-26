function my_count_on_it(param_1)
{
    resume = [];
    for(i in param_1)
    {
        resume.push(param_1[i].length)
    }
    return resume;
}
console.log(my_count_on_it(["To", "Who", "The", "Big"]));



// function my_count_on_it(param_1)
// {
//     for (var i =0; i<param_1.length; i++){
//         i.push(param_1[i].length)
//     }
//     return i;
// }
// console.log(my_count_on_it(["To", "Who", "The", "Big"]));