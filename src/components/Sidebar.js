function Sidebar() {
    const asidestyle = {
        background: "pink",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return (
        <aside
            className="sidebar-component"
            style={asidestyle}>
            <h2>Sidebar content is here</h2>
        </aside>
    )
}

export default Sidebar;