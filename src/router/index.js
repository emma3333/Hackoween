import Vue from "vue"
import Router from "vue-router"
import Index from "@/components/Index"
import PlayGame from "@/components/PlayGame"
import HowToPlay from "@/components/HowToPlay"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/playgame",
      name: "PlayGame", 
      component: PlayGame
    },
    {
      path: "/howtoplay",
      name: "HowToPlay",
      component: HowToPlay
    }
  ]
})
