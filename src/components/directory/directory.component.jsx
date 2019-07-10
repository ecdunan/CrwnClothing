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
                    this.state.sections.map(({title, imageUrl, id, size}) =>
                        <MenuItem key={id}
                            title={title}
                            imageUrl={imageUrl}
                            size={size}/>
                    )
                }
            </div>
        );
    }
}

export default Directory;