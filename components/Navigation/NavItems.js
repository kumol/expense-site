import Link from 'next/link'
import classes from "../../styles/NavItems.module.css";
const NavItems = ({props, children})=>{
    return(
        <div className={classes.container}>
          <div className="container">
            <ul className={classes.ul2} >
                <li className={classes.li2} >
                    <Link href="/">Home</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/demo-api" >Api</Link>
                </li>
                <li className={classes.li2}>
                    <Link href="/" >Index</Link>
                </li>
            </ul>
          </div>
        </div>
    )
}

export default NavItems;