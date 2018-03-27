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

export const FurnaceSch6Cold = {
  pipes: basePipes,
  points: [
    {
      x: 30,
      y: 5,
    },
    {
      x: 30,
      y: 125,
    },
    {
      x: 120,
      y: 125,
    },
  ],
  startPoints: {
    x:0,
    y:5
  }
};

export const FurnaceSch6Hot = {
  pipes: basePipes,
  points: [
    {
      x: 180,
      y: 5,
    },
    {
      x: 180,
      y: 63,
    },
  ],
  startPoints: {
    x:0,
    y:5
  }
};

export const LeftBoilerCirculation1 = {
  pipes: basePipes,
  points: [
    {
      x: 5,
      y: 5,
    },
    {
      x: 5,
      y: 170,
    },
    {
      x: 64,
      y: 170,
    },
  ],
  startPoints: {
      x: 44,
      y: 5
  }
};

export const LeftBoilerOutputHot = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 78,
        },
        {
            x: 5,
            y: 5,
        },
        {
            x: 150,
            y: 5,
        },
        {
            x: 150,
            y: 30,
        },
    ],
    startPoints: {
        x: 26,
        y: 78
    }
};

export const LeftBoilerOutputCold = {
    pipes: basePipes,
    points: [
        {
            x: 200,
            y: 5,
        },
    ],
    startPoints: startPoints
};

export const SolarPanelLeftHot = {
    pipes: basePipes,
    points: [
        {
            x: 235,
            y: 5,
        },
        {
            x: 244.89,
            y: 8.89,
        },
        {
            x: 245.89,
            y: 18.89,
        },
        {
            x: 234.78,
            y: 27,
        },
        {
            x: 170,
            y: 75,
        },
        {
            x: 170,
            y: 346,
        },
        {
            x: 272,
            y: 346,
        },
    ],
    startPoints: {
        x: 210,
        y: 23
    },
};

export const SolarPanelLeftCold = {
    pipes: basePipes,
    points: [
        {
            x: 5,
            y: 12,
        },
        {
            x: 5,
            y: 253
        },
        {
            x: 235,
            y: 253
        },
    ],
    startPoints: {
        x: 15,
        y: 5
    },
};