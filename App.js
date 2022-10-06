import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlane,
  ViroScene,
  ViroARPlaneSelector,
  ViroQuad,
  ViroNode,
  ViroAnimations,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DSceneNavigator,
  ViroVRSceneNavigator,
  ViroTrackingStateConstants,
  ViroCamera,
  ViroFlexView
} from '@viro-community/react-viro';

var createReactClass = require('create-react-class');

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
});

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      hasARInitialized : false,
      text : "Initializing AR...",
    };
  },
  render: function() {
    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
        <ViroNode position={[0, -.5, -1]} dragType="FixedToWorld" onDrag={()=>{}} >
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          <Viro3DObject
              source={{ uri: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF/BrainStem.gltf" }}
              position={[0, 0, 0]}
              // animation={{name: "animation_0", run: true, loop: true}}
              scale={[.2, .2, .2]}
              type="GLTF"
            lightReceivingBitMask={3}
            shadowCastingBitMask={2}
            transformBehaviors={['billboardY']}
            // resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
            //            require('./res/emoji_smile/emoji_smile_specular.png'),
            //            require('./res/emoji_smile/emoji_smile_normal.png')]}
                       />

          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />
        </ViroNode>
      </ViroARScene>
    );
  },
  _onTrackingUpdated(state, reason) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (!this.state.hasARInitialized && state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      this.setState({
        hasARInitialized : true,
        text : "Hello World!"
      });
    }
  }
});

export default () => {
  return (

    <ViroARSceneNavigator
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={{width: 300, height: 500}}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
