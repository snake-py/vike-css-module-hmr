export { Page };

import { Counter } from './Counter';
import classes from './test.module.css';

function Page() {
    return (
        <>
            <h1 className={classes.test}>Welcome</h1>
            This page is:
            <ul>
                <li>Rendered to HTML.</li>
                <li>
                    Interactive. <Counter />
                </li>
            </ul>
        </>
    );
}
