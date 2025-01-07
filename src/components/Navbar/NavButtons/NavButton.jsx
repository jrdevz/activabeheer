import './NavButton.css'

export default function NavButton(props) {
    return(
        <div>
            <li><a href="">{props.children}</a></li>
        </div>
    );
}