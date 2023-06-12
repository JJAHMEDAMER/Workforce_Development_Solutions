type NavListPropTypes = {
    navList: string[]
    CSSClass: string
}

export const NavList = ({ navList, CSSClass }: NavListPropTypes) => {
    return (
        <ul className={CSSClass}>
            {navList.map((elem: String) => <li><a href="#">{elem}</a></li>)}
        </ul>
    )
}
