//'7','7.5','8','8.5','9','9.5','10','10.5'
//'red','blue','green','brown'

window.Indata = {
    //allSize: (function(){})()
    allSize:(function(small,large){
        let sized = [];
        for(let i = small; i <= large; i++){
            sized.push(i);
            sized.push(i+0.5);
        }
        return sized;
    })(7,10),

    allColor:['red','blue','green','brown'],

    bySize:{
        '7' : ['red','green'],
        '8' : ['red','green','brown'],
        '8.5' : ['red','blue','green','brown'],
        '9' : ['red','blue','green'],
        '9.5' : ['blue','green','brown'],
        '10' : ['red','brown'],
        '10.5' : ['blue','brown']
    },
    
    byColor:{
        'red' : ['7.5','8','8.5','9.5','10','10.5'],
        'blue' : ['7.5','8','8.5','9','9.5','10'],
        'green' : ['7','9','9.5','10.5'],
        'brown' : ['7','7.5','8.5','9','10','10.5']
    }
}