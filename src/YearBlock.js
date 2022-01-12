import MonthBlock from "./MonthBlock";

const YearBlock = ({products}) => {
    
    let arrivalObject = {};
    let arrivalYear = [];
    let arrivalMonth = [];

    const temMapping = products.map(i => {
        arrivalObject[i.arrivalDate.year] = [];
        arrivalYear.push(i.arrivalDate.year);
        arrivalMonth.push(i.arrivalDate.month);
        return i.arrivalDate.year + i.arrivalDate.month;
    });
    const arrivalDate = temMapping.filter(function(item, pos){
        return temMapping.indexOf(item) == pos;
    });
    arrivalDate.sort(); //["202010","202101","202103"]

    for(let i = 0; i < arrivalYear.length; i++){
       arrivalObject[arrivalYear[i]].push(arrivalMonth[i]);
    }
    arrivalYear = Object.keys(arrivalObject); //擷取出year
    

    return (
        
        <div className="year-blocks">
        {
            arrivalYear.map((year) => (
            <div className="year-block" key={year}>
                <div className="year-text">{year}</div>
                <MonthBlock products={products} year={year} monthUnsorted={arrivalObject[year]}/>
            </div>
            ))
        }    
        </div>
        
        
    );
}
 
export default YearBlock;