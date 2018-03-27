import React, { Component } from 'react';
import _ from 'lodash';
import { PathLine } from 'react-svg-pathline'
import { FurnaceSch6Cold } from "../../constants";

class PathCreator extends Component {
    render() {
        const _pipe = FurnaceSch6Cold;

        let pipes = _.map(_pipe.pipes, (pipe, key) => {
            return <PathLine
                key={key}
                points={[_pipe.startPoints, ..._pipe.points]}
                stroke={pipe.stroke}
                strokeWidth={pipe.strokeWidth}
                fill="none"
                r={5.8}
            />
        });

        return <g>
            { pipes }
        </g>;
    }
}

export { PathCreator }