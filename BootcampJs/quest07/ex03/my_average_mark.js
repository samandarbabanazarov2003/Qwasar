function my_average_mark(param_1){
    let resume = 0;
    for(i in param_1)
    {
        resume += param_1[i]['integer'];
    }
    return (resume / param_1.length).toFixed(2)
};


// function my_average_mark(param_1)
// {
//     for (var resume = 0; resume < param_1; resume++)
//     {
//         resume += param_1.resume['integer']
//     }
//     return (resume / param.length).toFixed(1)
// };

