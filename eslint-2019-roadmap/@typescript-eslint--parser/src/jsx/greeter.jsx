
import * as React from 'react';

export interface GreeterProps extends React.Props<Greeter> {
    whomToGreet: string;
    greeting?: string | (() => string|undefined);
}

export class Greeter extends React.Component<GreeterProps, {}> {
    render() {
        let g = this.props.greeting;

        let greeting:string|undefined = 'Hello';

        if (typeof g === 'string') {
            greeting = g;
        }
        else if (g) {
            greeting = g();
        }

        return <div>{greeting}, {this.props.whomToGreet}</div>;
    }
}
