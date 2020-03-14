import React, { PureComponent } from 'react';
import Heading from './Heading';

class HeadingBlock extends PureComponent {
    renderHtml = () => {
        const { level, children } = this.props;

        if (children && children.length > 0) {
            const nodeValue = children[0].props.value;
            return (
                <Heading level={`h${level}`} id={nodeValue} style={{ cursor: 'pointer' }}>
                    <span className="title">{children}</span>
                    <a href={`#${nodeValue}`} className="quick-link" level={`h${level}`} name={nodeValue}></a>
                </Heading>
            );
        } else {
            return <>{children}</>;
        }
    };
    render() {
        return <>{this.renderHtml()}</>;
    }
}

export default HeadingBlock;
