import React from 'react'
import Profileobj from "../Profileobj.js"
function Connect(){

    return(
        <div>
            <h1> Find Friends! </h1>
            <div className="profile">
                <Profileobj
                    profile={{name: "Dan Bilotto", imgURL: "https://t4.ftcdn.net/jpg/01/75/08/69/360_F_175086988_gYKSBki0ummBMTfuelOEm5WE6hUGlUtI.jpg", user: "@DBilotto01"}}
                />

                <Profileobj
                    profile={{name: "Luke Jacobs", imgURL: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg", user: "@Lajwheels"}}
                />

                <Profileobj
                    profile={{name: "John Amico", imgURL: "https://yt3.ggpht.com/ytc/AKedOLSarXZiATL_3Q2j6pz8M4MousshZ2fW4ljVEvHuoA=s900-c-k-c0x00ffffff-no-rj", user: "@Amico6701"}}
                />

                <Profileobj
                    profile={{name: "Emily Saviano", imgURL: "https://i.pinimg.com/originals/56/47/90/564790c070e47d73cdf4e61ca9f4ee9c.png", user: "@EmilyS"}}
                />

                <Profileobj
                    profile={{name: "Kenzie Lippa", imgURL: "https://media.istockphoto.com/vectors/gamepad-vector-id1187099020?k=20&m=1187099020&s=612x612&w=0&h=XKrJFUtYWO10UEUxGG0juqtgRHmtqxvkG_oWeXAvEGk=", user: "@LippaKK"}}
                />

                <Profileobj
                    profile={{name: "Fauziah Ibrahim", imgURL: "https://thumbs.dreamstime.com/z/user-icon-vector-laptop-computer-female-person-profile-avatar-user-icon-vector-laptop-computer-female-person-profile-106635253.jpg", user: "@FIbrahim"}}
                />

            </div>
        </div>
    )
}

export default Connect;