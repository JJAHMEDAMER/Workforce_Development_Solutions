import style from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_left}>
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
      </div>

      <div className={style.nav_right}>
        <ul className={style.nav_list}>
          <li><a href="#">Career Library</a></li>
          <li><a href="#">Major Library</a></li>
          <li><a href="#">School Library</a></li>
        </ul>

        <div className={style.profile}>
          <img className={style.profile_notification} src="./notification.svg" alt="notification" />
          <img className={style.profile_img} src="./Male_Avatar.jpg" alt="avatar" />
          <div className={style.profile_info}>
            <p>Welcome</p>
            <h1>
              Name Name
              <img className={style.profile_downarrow} src="./down_arrow.svg" alt="down_arrow" />
            </h1>
          </div>
        </div>
      </div>
    </nav>
  )
}
