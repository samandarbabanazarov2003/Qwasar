function my_levenshtein(string1, string2)
{
    if(string1.length != string2.length){
        return -1;
    }
    var resume = 0;
    for(var i = 0; i < string2.length; i++){
        if(string1[i] != string2[i]){
            resume++;
        }
    }
    return resume;
}
console.log(my_levenshtein("GGACT" , "asACT"));