function* createIdGenerator()
{
    let i = 1;
    while(true)
    {
        yield i;
        i++;

    }
}

const idGenerator = createIdGenerator();
//console.log(idGenerator.next().value)




function* newFontGenerator(size)
{
    while(true)
    {
        let command = yield size;
        if( command == "up")
        {
            if(size < 30)
            {
            size = parseInt(size) + 2;
            }
            else{command.next, console.log('you cannot increase anymore')}
        }
        else if(command =="down")
        {
            if(size > 0)
            {
           size =  parseInt(size) - 2;
            }
            else{ command.next, console.log('you cannnot decrease anymore')}
        }
    }
}
const fontGenerator = newFontGenerator('14')
console.log(fontGenerator.next('up'))