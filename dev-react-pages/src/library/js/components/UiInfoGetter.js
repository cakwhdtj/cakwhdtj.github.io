export default function getInfo(props) {
    let _props = props
    let wStep = (_props.uiInfo);
    const match = () => {
        let descNum = _props.dataSet.map((set)=>set.desc).indexOf(wStep[0]);
        let theSet = _props.dataSet[descNum]
        let toSt = theSet.steps.toString();
        let newArr = toSt.split(",");
        let index = newArr.indexOf(wStep[1])
        return index;
    }
    return match();
}