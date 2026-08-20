import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext()

export const UseContextProvider = ({ children }) => {

    const avatars = [
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        'https://i.pravatar.cc/150?img=12',
        'https://i.pravatar.cc/150?img=32',
        'https://i.pravatar.cc/150?img=47'
    ];

    const [userName, setUserName] = useState("username")
    const [icon, setIcon] = useState(avatars[0])

    //Salvando no local Storage
    const saveProfile = () => {


        const profile = {
            userName: userName,
            avatar: icon
        }

        localStorage.setItem("profile", JSON.stringify(profile))
    }

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"))

        if (profile) {
            setUserName(profile.userName)
            setIcon(profile.avatar)
        }

        console.log(profile)
    }, [])

    return (
        <UserContext.Provider
            value={{ userName, setUserName, icon, setIcon, saveProfile }}
        >
            {children}
        </UserContext.Provider>
    )

}

