export default ({length}) => {
    return (
        <div className="section-header">
            <i className={`iconfont icon-guidang`} />
            <div className="title">归档</div>
            <div className="totol">
                目前共计<span>{length}</span>篇文章
            </div>
        <style jsx>{`
        .section-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            width:100%;
            border-bottom: 1px solid var(--border-color);
        }
        .section-header i {
            font-size: 36px;
            color: var(--text-color);
        }
        .section-header .title {
            padding: 5px 0;
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--keyword-color);
        }
        .totol {
            padding: 5px 0;
        }
        .totol span {
            padding: 0 5px;
            color: var(--keyword-color);
        }
        `}</style>
        </div>
    )
}