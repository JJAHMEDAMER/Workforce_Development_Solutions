import style from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a className={style.logo} href="#">
        <img className={style.logo_img} src="./students_inc_logo.svg" alt="students_inc_logo" />
        <p className={style.logo_text}><span>Students</span> Inc.</p>
      </a>

      <label htmlFor="search" className={style.search_container}>
        <input className={style.search}
          placeholder="Search..." type="text" name="search" id="search" />
        <div className={style.search_icon}>
          <img src="./search.svg" alt="search" />
        </div>
      </label>
    </nav>
  )
}
