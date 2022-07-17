import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated,{ useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg'

const {width, height} = Dimensions.get("window")
const STROKE_COLOR = '#2C0B8F'
const BACKGROUND_STROKE_COLOR = '#F8CE45'
const CIRCLE_LENGTH = 800
const R = CIRCLE_LENGTH / (2 * Math.PI)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const size = width - 32
const CircularProgress = () => {

    const progress = useSharedValue(0)

    useEffect(() => {
        progress.value = withTiming(1, {duration: 2000})
    }, [])

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset : CIRCLE_LENGTH * (1 - progress.value),
    })) 
     
    return (
            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={R}
                    stroke={BACKGROUND_STROKE_COLOR}
                    strokeWidth={30}
                />
                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={R}
                    stroke={STROKE_COLOR}
                    strokeWidth={30}
                    strokeDasharray={CIRCLE_LENGTH}
                    strokeLinecap={'round'}
                    animatedProps={animatedProps}
                />
            </Svg>
    )
};

export default CircularProgress;

