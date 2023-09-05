import { Outlet } from "react-router-dom"

export const Users = () => {
  return (
    <>
        <div>User Detail 1</div>
        <div>User Detail 2</div>
        <div>User Detail 3</div>

        <Outlet/>
    </>
  )
}
