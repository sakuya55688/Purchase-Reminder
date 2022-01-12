import { useState, useEffect } from "react";
import ItemPreview from "./ItemPreview"; //載入通用模板

const MonthBlock = ({products,year,monthUnsorted}) => {
    
    const monthText = {
        "01": 'Jan', "02":'Feb', "03":'Mar', "04":'Apr', "05":'May', "06":'June', 
        "07":'July', "08":'Aug', "09":'Sept', "10":'Oct', "11":'Nov', "12":'Dec'
    }
    
    //trim and sort the array of monthUnsorted
    const months = monthUnsorted.filter(function(item, pos){
        return monthUnsorted.indexOf(item) == pos;
    });
    months.sort();
    console.log(year, months);
    
    
    return (  
        <div className="month-blocks">
            {
                months.map((month) => (
                    <div className="month-block" key={year+month}>
                        <div className="vertical-line"></div>
                        
                        <div>
                            <div className="month-text">{month}</div>
                            <ItemPreview products={products} filterYear={year} filterMonth={month} />
                        </div>
                        
                    </div>
                ))
                
            }

        </div>
    );
}
 
export default MonthBlock;