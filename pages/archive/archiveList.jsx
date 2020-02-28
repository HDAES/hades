export default ({archiveList}) =>{

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
                month:dp
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
    console.log(list)

    return (
    <div className="archive-list">1312
        {
            list.map( (item,i) =>{
                return <div key={i}>
                    <div> 年{item.year}</div>
                    {
                        item.months.map((z,zi)=>{
                           return  <div key={zi}>
                                月:{ z.month}
                            </div>
                        })
                    }
                    
                </div>
            })
        }
        <style jsx>{`
           .archive-list{
               
           } 
        `}</style>
    </div>
    )
}