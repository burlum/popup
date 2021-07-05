import VueRouter from 'vue-router'
import Button from "../components/Button"
import Popup from "../components/popup"

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"MainPage",
            component:Button
        },
        {
            path:"/popup",
            name:"MainForm",
            component:Popup
        }
    ]
})