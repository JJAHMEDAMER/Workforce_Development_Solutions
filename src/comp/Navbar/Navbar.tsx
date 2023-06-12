import { useEffect, useState } from "react"
import md5 from 'md5';
import style from "./Navbar.module.css"
import { appFetch } from "../../utiles/appFetch";
import { StudentIncLogo } from "../subComp";

type fetchObject = {
  [key: string]: string
}

export const Navbar = () => {
  const [search, setSearch] = useState<Boolean>(false)
  const [user, setUser] = useState<fetchObject>({})
  const [userImg, setUserImg] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await appFetch("https://jsonplaceholder.typicode.com/users/1")
      setUser(await res!.json())
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const fetchAvatar = async () => {
      const resImg = await appFetch(`https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}`)
      const url = URL.createObjectURL(await resImg!.blob());
      setUserImg(url)
    }
    fetchAvatar()
  }, [user])


  return (
    <nav className={style.nav}>
      <div className={style.nav_left}>
        <StudentIncLogo />

        <label htmlFor="search" className={style.search_container}>
          <input
            className={style.search}
            style={search ? { display: "block" } : undefined}
            placeholder="Search..." type="text" name="search" id="search" />
          <div
            className={style.search_icon}
            style={search ? { borderRadius: "0 var(--border-radius) var(--border-radius) 0" } : undefined}
            onClick={() => setSearch(!search)}>
            <img src="./search.svg" alt="search" />
          </div>
        </label>
      </div>

      <div className={style.nav_right}>
        <input className={style.hambCheck} type="checkbox" id="side-menu" />
        <ul className={style.nav_list}>
          <li><a href="#">Career Library</a></li>
          <li><a href="#">Major Library</a></li>
          <li><a href="#">School Library</a></li>
        </ul>

        <div className={style.profile}>
          <img className={style.profile_notification} src="./notification.svg" alt="notification" />
          <img className={style.profile_img} src={userImg ? userImg : "./Male_Avatar.jpg"} alt="avatar" />
          <div className={style.profile_info}>
            <p>Welcome</p>
            <h1>
              {user.name}
              <img className={style.profile_downarrow} src="./down_arrow.svg" alt="down_arrow" />
            </h1>
          </div>
        </div>

        <label className={style.hamb} htmlFor="side-menu">
          <span className={style.hambSpan}></span>
        </label>
      </div>
    </nav>
  )
}
