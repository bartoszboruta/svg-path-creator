const basePipes = [
    {
        stroke: '#9f9f9f',
        strokeWidth: 4.75
    },
    {
        stroke: 'none',
        strokeWidth: 1
    },
];

const startPoints = {
    x: 5,
    y: 5
};

//-----------------------------//

export const Circ = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 120
        },
        {
            x: 140,
            y: 120
        },
    ],
    startPoints: startPoints
};

export const COToCircuitCold = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 155
        },
        {
            x: 100,
            y: 155
        }
    ],
    startPoints: startPoints
};

export const COToCircuitHot = {
    pipes: basePipes,
    points: [
        {
            x: 100,
            y: 5
        },
    ],
    startPoints: startPoints
};

export const CircuitHot = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 5
        },
    ],
    startPoints: {
        x: 5,
        y: 125
    },
};

export const CircuitCold = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 5
        },
    ],
    startPoints:   {
        x: 5,
        y: 140
    },
};

export const COToInsideColdNoBoiler = { //255
    pipes: basePipes,
    points: [
        {
            x: 297,
            y: 160
        },
        {
            x: 297,
            y: 5
        },
    ],
    startPoints: {
        x: 5,
        y: 160
    }
};

export const COToInsideHotNoBoiler = { //255
    pipes: basePipes,
    points: [
        {
            x: 269,
            y: 150
        },
        {
            x: 269,
            y: 20
        },
    ],
    startPoints: {
        x: 30,
        y: 150
    },
};

export const CWUToInsideHotWithoutCO = {
    pipes: basePipes,
    points: [
        {
            x: 175,
            y: 5
        },
        {
            x: 175,
            y: 301.5
        },
        {
            x: 269,
            y: 301.5
        },
        {
            x: 269,
            y: 172
        },
    ],
    startPoints: startPoints
};

export const CWUToInsideColdWithoutCO = {
    pipes: basePipes,
    points: [
        {
            x: 150,
            y: 5
        },
        {
            x: 150,
            y: 285
        },
        {
            x: 294,
            y: 285
        },
        {
            x: 294,
            y: 130
        },
    ],
    startPoints: startPoints
};

export const CWUToInsideHotWithCO = {
    pipes: basePipes,
    points: [
        {
            x: 175,
            y: 5
        },
        {
            x: 175,
            y: 300
        },
    ],
    startPoints: startPoints
};

export const CWUToInsideColdWithCO = {
    pipes: basePipes,
    points: [
        {
            x: 150,
            y: 5
        },
        {
            x: 150,
            y: 283
        },
    ],
    startPoints: startPoints
};

export const CWUBot = {
    pipes: basePipes,
    points: [
        {
            x: 30,
            y: 5
        },
    ],
    startPoints: startPoints
};

export const CWUTop = {
    pipes: basePipes,
    points: [
        {
            x: 200,
            y: 5
        },
        {
            x: 200,
            y: 30
        },
    ],
    startPoints: startPoints
};

export const AutomaticBoilerCold = { //255
    pipes: basePipes,
    points: [
        {
            x: 110,
            y: 81
        },
        {
            x: 110,
            y: 5
        },
    ],
    startPoints: {
        x: 5,
        y: 81
    }
};

export const AutomaticBoilerHot = { //255
    pipes: basePipes,
    points: [
        {
            x: 85,
            y: 40
        },
        {
            x: 85,
            y: 5
        },
    ],
    startPoints: {
        x: 5,
        y: 40
    }
};

export const COTo3connectorCold = {
    pipes: basePipes,
    points: [
        {
            x: 152,
            y: 160
        },
    ],
    startPoints: {
        x: 5,
        y: 160
    }
};

export const CO3connectorToPumpCold = {
    pipes: basePipes,
    points: [
        {
            x: 297,
            y: 160
        },
        {
            x: 297,
            y: 5
        },
    ],
    startPoints: {
        x: 152,
        y: 160
    },
};


export const COToInsideCold = { //255
    pipes: basePipes,
    points: [
        {
            x: 297,
            y: 160
        },
        {
            x: 297,
            y: 5
        },
    ],
    startPoints: {
        x: 5,
        y: 160
    }
};

export const COTo3connectorHot = { //255
    pipes: basePipes,
    points: [
        {
            x: 30,
            y: 5,
        },
        {
            x: 30,
            y: 150
        },
        {
            x: 175,
            y: 150
        },
    ],
    startPoints: startPoints
};

export const CO3connectorToPumpHot = { //255
    pipes: basePipes,
    points: [
        {
            x: 269,
            y: 150
        },
        {
            x: 269,
            y: 20
        },
    ],
    startPoints: {
        x: 175,
        y: 150
    },
};

export const COToInsideHot = { //255
    pipes: basePipes,
    points: [
        {
            x: 30,
            y: 5,
        },
        {
            x: 30,
            y: 150
        },
        {
            x: 269,
            y: 150
        },
        {
            x: 269,
            y: 20
        },
    ],
    startPoints: startPoints
};

export const outsideToInsideCold = {
    pipes: basePipes,
    points: [
        {
            x: 40,
            y: 5,
        },
        {
            x: 40,
            y: 130
        },
        {
            x: 120,
            y: 130
        },
    ],
    startPoints: startPoints
};

export const outsideToInsideHot = {
    pipes: basePipes,
    points: [
        {
            x: 50,
            y: 5,
        },
        {
            x: 50,
            y: 130
        },
        {
            x: 110,
            y: 130
        },
    ],
    startPoints: startPoints
};