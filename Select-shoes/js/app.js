(function(){
//필요한 컴포넌트
function ProImg(props){
    return(
        <img src={`/data/${props.color}.jpg`} alt="상세페이지" />
    );
}

function ProSize(props){
    function optionSize(){
        // let sizes = window.Indata.allSize;
        // console.log(sizes);
        return props.sizes.map((num)=>{
            return(
            <option value={num} key={num}>
                {num}
            </option>
            )}
        )
    }
    //onChange
    function onSizeChange(evt){
        props.hSizeChange(evt.target.value);
        // console.log(evt.target.value);
    }

    return(
        <p className="field">
        <label htmlFor="size">size:</label>
        <select 
            id="size"
            name="size"
            onChange={onSizeChange}
            defaultValue={props.size}>
            {optionSize()}
        </select>
        </p>
    );
}

function ProColor(props){
    function optionColor(){
        // let colors = window.Indata.allColor;
        // console.log(colors);
        return props.colors.map((num)=>{
            return(
            <option value={num} key={num}>
                {num}
            </option>
            )}
        )
    }

    function onColorChange(evt){
        props.hColorChange(evt.target.value);
        // console.log(evt.target.value);
    }
    return(
        <p className="field">
        <label htmlFor="color">color:</label>
        <select 
            id="color" 
            name="color"
            defaultValue={props.color}
            onChange={onColorChange}>
            {optionColor()}
        </select>
        </p>
    );
}

function ProSource(props){
    //state
    let [size,setSize] = React.useState(8);
    let [sizes,setSizes] = React.useState(window.Indata.allSize);

    let [color,setColor] =React.useState('blue');
    let [colors,setColors] =React.useState(window.Indata.allColor);

    function hSizeChange(selectSize){
        let ableColors = window.Indata.bySize[selectSize];
        setColors(ableColors);
        setSize(selectSize);
    }
    
    function hColorChange(selectColor){
        let ableSizes = window.Indata.byColor[selectColor];
        setSizes(ableSizes);
        setColor(selectColor);
    }

    return(
        <div className="custome">

            <div className="pic">
                <ProImg 
                color={color} />
            </div>

            <div className="selector">
                <ProSize 
                size={size}
                sizes={sizes} 
                hSizeChange={hSizeChange}/>

                <ProColor 
                color={color}
                colors={colors}
                hColorChange={hColorChange}/>
            </div>
            
        </div>
    )
}

// 출력하기
const box = document.getElementById('box');
ReactDOM.render(
    <ProSource />,
    box
)
})()