import { useEffect, useState } from "react"
import md5 from 'md5';
import style from "./Navbar.module.css"
import { appFetch } from "../../utiles/appFetch";
import { StudentIncLogo, SearchBar, ProfileInfo, NavList } from "../subComp";


type fetchObject = {
  [key: string]: string
}

export const Navbar = () => {
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
        <SearchBar />
      </div>

      <div className={style.nav_right}>
        <input className={style.hambCheck} type="checkbox" id="side-menu" />

        <NavList CSSClass={style.nav_list} navList={["Career Library", "Major Library", "School Library"]} />

        <ProfileInfo userName={user.name} userImg={userImg} />

        <label className={style.hamb} htmlFor="side-menu">
          <span className={style.hambSpan}></span>
        </label>
      </div>
    </nav>
  )
}
