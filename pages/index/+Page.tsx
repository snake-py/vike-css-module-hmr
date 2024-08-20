export { Page };

import { Counter } from './Counter';
import cssClasses from './test.module.css';
import scssClasses from './test.module.scss';

function Page() {
    return (
        <>
            <h1 className={cssClasses.test}>Welcome</h1>
            <h1 className={scssClasses.test}>Welcome</h1>
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
