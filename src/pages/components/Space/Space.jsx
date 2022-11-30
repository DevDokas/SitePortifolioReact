import React, { Suspense } from 'react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber'
/* import {Points, AnimationCanvas} from './SceneInit.js'; */
//Styles
import star from '../../../assets/star.png'
import './styles/style.css'

function Points() {

}

function AnimationCanvas(){
    return(
        <Canvas
        colorManagement={false}
        camera={{position: [100, 10, 0], fov: 75}}
        >
            <Suspense fallback={null}>
                <Points/>
            </Suspense>
        </Canvas>
    )

}

export default function Space() {
    return(    
        <div className='anim'>
            <Suspense fallback={<div>Loading...</div>}>
                <AnimationCanvas/>
            </Suspense>
        </div>
        )
}
