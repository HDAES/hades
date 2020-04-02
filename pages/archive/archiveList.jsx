
import Archive from '../../lib/archive'
import Link from 'next/link'
export default ({archiveList}) =>{

    let list = Archive(archiveList)
    return (
    <div className="archive-list">
        {
            list.map( (year,y) =>{
                return <div key={y} className="year">
                    <div className="year-lable">{year.year}</div>
                    {
                        year.months.map((month,m)=>{
                           return  <div key={m} className="month">
                                <div className="month-lable">{ month.monthStr}</div>
                                <ul className="article">
                                {
                                    month.articles.map((article,a)=>{
                                        return <li key={a}>
                                            <span className="time">{article.d_create_time.slice(5,10)}</span>
                                            <Link href={{pathname: '/article',query: { id:article.c_id}}}>
                                                <a>{article.title}</a>
                                            </Link>
                                        </li>
                                    })
                                }
                                </ul>
                            </div>
                        })
                    }
                    
                </div>
            })
        }
        <style jsx>{`
           .archive-list{
                padding: 20px;
           } 
           .year-lable{
                font-size: 26px;
                font-family: Damion;
                color: var(--header-logo-color)
           }
           .month-lable{
                padding-left:30px;
                font-size: 18px;
                font-family: Damion;
                color: var(--header-logo-color)
           }
           .article{
                padding-top:10px;
                padding-left:70px;
                color: var(--text-color);
           }
           .article li{
               padding-bottom:10px;
           }
           .article a{
                padding-left:15px;
                color: var(--text-color);
                text-decoration: underline;
                transition: all .3s;
           }
           .article a:hover{
                padding-left:20px;
                color: var(--header-logo-color)
           }
        `}</style>
    </div>
    )
}