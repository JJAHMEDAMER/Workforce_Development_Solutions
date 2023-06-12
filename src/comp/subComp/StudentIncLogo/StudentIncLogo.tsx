import style from "./StudentIncLogo.module.css"
export const StudentIncLogo = () => {
    return (
        <a className={style.logo} href="#">
            <img className={style.logo_img} src="./students_inc_logo.svg" alt="students_inc_logo" />
            <p className={style.logo_text}><span>Students</span> Inc.</p>
        </a>
    )
}
