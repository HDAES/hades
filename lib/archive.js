
// 处理归类数据方法
const formatMonth = ['January','February','March','April','May','June','July','August ','September','October','November','December']

export default function Archive(archiveList){
    const list=[]
    const year = []
    archiveList.forEach((item)=>{
        year.push(item.d_create_time.slice(0,4))
    })
    const yearList = [...new Set(year)]
    yearList.forEach((item)=>{
        list.push({
            year:item
        })
    })
    list.map((item)=>{
        let tempMonths=[]
        item.months=[]
        archiveList.map((i) =>{
            if(item.year == i.d_create_time.slice(0,4)){
                tempMonths.push(i.d_create_time.slice(5,7))
            }
        })
        const dpTempMonths=[...new Set(tempMonths)] 
        dpTempMonths.forEach((dp)=>{
            item.months.push({
                month:dp,
                monthStr:formatMonth[parseInt(dp)-1]
            })
        })
        

    })
    list.map((item)=>{
        item.months.map((i,index)=>{
            item.months[index].articles=[]
            archiveList.map((j) =>{
                if(item.year == j.d_create_time.slice(0,4) && i.month == j.d_create_time.slice(5,7)){
                    item.months[index].articles.push(j)
                }
            })
        })
    })

    return list

}