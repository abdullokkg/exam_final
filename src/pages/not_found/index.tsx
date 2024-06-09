import { Link } from "react-router-dom"
import "./Not_found.scss"

const Not_found = () => {
  return (
    <>
      <div className="not_found">
        <div className="not_found_txt">
            <h3>404</h3>
            <strong>Похоже, ничего не нашлось :(</strong>
            <br />
            <br />
            <br />
            <Link to={"/"}><button>На главную</button></Link>
            <br />
            <br />
            <br />
            <br />
        </div>
      </div>
    </>
  )
}

export default Not_found
