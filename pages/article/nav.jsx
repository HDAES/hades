import Link from 'next/link'

function nav({article}){

    var toc = [];
    var reg = /(#+)\s+?(.+?)\n/g;
    var regExecRes = null
    while((regExecRes = reg.exec(article))) {
        if(regExecRes[1].length<=3){
            toc.push({
                level: regExecRes[1].length,
                title: regExecRes[2].replace(/\s*/g, '')
            });
        }   
    }

    console.log(toc)
    return (
        <div className="navbar">
            {
                toc.map((item,index) =>{

                    if(item.level==1){
                        return  <Link href={`#${item.title.toLowerCase()}`} key={index}>
                                    <a className="title">{item.title}</a>
                                </Link>
                    }else{
                        return <Link href={`#${item.title.toLowerCase().replace(/\./g,'')}`} key={index}>
                            <a className="second">{item.title}</a>
                        </Link>
                    }
                   
                })
            }
            <style jsx>{`
                .navbar{
                    margin-top:20px;
                    padding:10px;
                    border-radius: 5px;
                    color: var(--text-color);
                    background-color: var(--header-background-color);
                }
                .title{
                    display: block;
                    font-size:24px;
                    font-weight: bold;
                    color: var(--header-logo-color);
                }
                .second{
                    padding:10px;
                    display: block;
                    font-size:16px;
                    color: var(--text-color);
                }
            `}</style>
        </div>
    )
}

export default nav;