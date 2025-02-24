import styles from './NavButton.module.css'

export default function NavButton(props) {
    return(
        <div>
            <li><a href="">{props.children}</a></li>
        </div>
    );
}