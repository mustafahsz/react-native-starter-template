import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const Background = (props: SvgProps) => (
  <Svg
    style={{position: 'absolute', top: 0}}
    width={402}
    height={844}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M0 0h402v844H0z" />
      <Path
        d="M518.368 14.5c0 48.877-141.875 88.5-316.887 88.5s-316.888-39.623-316.888-88.5S26.469-74 201.481-74c175.012 0 316.887 39.623 316.887 88.5Z"
        fill="url(#b)"
      />
    </G>
    <Defs >
      <LinearGradient
        id="b"
        x1={457.474}
        y1={68.554}
        x2={16.686}
        y2={-64.439}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3EAF45" />
        <Stop offset={1} stopColor="#88C543" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h402v844H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Background;
