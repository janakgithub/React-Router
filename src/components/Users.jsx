import { Outlet, useSearchParams} from "react-router-dom"

export const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const showFullTimeUsers = searchParams.get('filter') ==='fullTime';

  return (
    <>
        <div>User Detail 1</div>
        <div>User Detail 2</div>
        <div>User Detail 3</div>
        <Outlet/>
        <div>
          <button onClick={()=>setSearchParams({filter:'fullTime'})}>Search Filter</button>
        </div>
        <div>
          <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        </div>
        {showFullTimeUsers? <h2> List of Full Time  Users</h2> : <h2> All the List of Users</h2>}
    </>
  )
}
