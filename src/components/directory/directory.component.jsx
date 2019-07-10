import React from 'react';
import { sections } from '../../data/directory.data.js';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...SectionProps}) =>
                        <MenuItem key={id}
                            {...SectionProps}
                        />
                    )
                }
            </div>
        );
    }
}

export default Directory;