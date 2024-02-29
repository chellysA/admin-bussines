"use client"
import { useCurrentRouteContext } from "@/providers/CurrentRouteProvider"
import { useEffect } from "react"

const useChangeTitleLayoutAdmin=(title: string)=>{
  const {changeRoute} = useCurrentRouteContext()

  useEffect(()=>{
    changeRoute && changeRoute(title)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[title])
}

export default useChangeTitleLayoutAdmin
