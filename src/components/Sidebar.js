
export default function Sidebar ({visibleSidebar, setVisibleSidebar}) {

    return (
        <div className={`sidebar ${visibleSidebar ? 'sidebar-show' : ''}`}>
            
            <div className="sidebar__info">
                <h3 className="sidebar__title">HISTORY</h3>
                <p className="sidebar__info-title">Character:</p>
                <p className="sidebar__info-value">value</p>
                <p className="sidebar__info-title">Location:</p>
                <p className="sidebar__info-value">value</p>
                <p className="sidebar__info-title">Episode:</p>
                <p className="sidebar__info-value">value</p>
            </div>
            <button className="sidebar__btn" onClick={() => setVisibleSidebar(false)} >Close</button>
        </div>
    )
}