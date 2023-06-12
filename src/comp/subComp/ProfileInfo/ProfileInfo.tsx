import style from "./ProfileInfo.module.css"

type ProfileInfoPropTypes = {
    userName: string
    userImg: string | null
}

export const ProfileInfo = ({ userName, userImg = null }: ProfileInfoPropTypes) => {
    return (
        <div className={style.profile}>
            <img className={style.profile_notification} src="./notification.svg" alt="notification" />
            <img className={style.profile_img} src={userImg ? userImg : "./Male_Avatar.jpg"} alt="avatar" />
            <div className={style.profile_info}>
                <p>Welcome</p>
                <h1>
                    {userName}
                    <img className={style.profile_downarrow} src="./down_arrow.svg" alt="down_arrow" />
                </h1>
            </div>
        </div>
    )
}
