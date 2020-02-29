import Link from 'next/link'

function nav({article}){

    var toc = [];
    var reg = /(#+)\s+?(.+?)\n/g;
    var regExecRes = null
    while((regExecRes = reg.exec(article))) {
        toc.push({
            level: regExecRes[1].length,
            title: regExecRes[2].replace(/\s*/g, '')
        });
    }

    console.log(toc)
    return (
        <div className="navbar">
            {
                toc.map((item,index) =>{
                    return <div key={index}>
                            <Link href={`#${item.title.toLowerCase()}`}>
                                <a>{item.title}</a>
                            </Link>
                    </div>
                })
            }
        </div>
    )
}

export default nav;