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

// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState('Initializing AR...');

//   function onInitialized(state, reason) {
//     console.log('guncelleme', state, reason, ViroTrackingStateConstants.TRACKING_NORMAL);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText('Hello World!');
//     } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
//       // Handle loss of tracking
//     }
//   }

//   const handleLoadStart = () => {
//     console.log("OBJ loading has started");   
//   }  
//   const handleLoadEnd = () => {
//     console.log("OBJ loading has finished");
//   }
//   const handleError = (event) =>{
//     console.log("OBJ loading failed with error: " + event.nativeEvent.error);  
//   }

//   return (

  
//     <ViroARScene onTrackingUpdated={onInitialized} style={{width: 300, height: 500}}>

//       {/* Text to show whether or not the AR system has initialized yet, see ViroARScene's onTrackingInitialized*/}
//       {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}

//       {/* <ViroBox position={[0, -.5, -1]}
//         animation={{name: "rotate", run: true, loop: true}}
//         scale={[.3, .3, .1]} materials={["grid"]} /> */}

//       <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

//       <ViroSpotLight
//           innerAngle={5}
//           outerAngle={90}
//           direction={[0,-1,-.2]}
//           position={[0, 3, 1]}
//           color="#aaaaaa"
//           castsShadow={true}
//           />

//       {/* Node that contains a light, an object and a surface to catch its shadow
//         notice that the dragType is "FixedToWorld" so the object can be dragged
//         along real world surfaces and points. */}
//       <ViroNode position={[.5,-.5,-.5]} dragType="FixedToWorld" onDrag={()=>{}} >

//         {/* Spotlight to cast light on the object and a shadow on the surface, see
//             the Viro documentation for more info on lights & shadows */}
//         <ViroSpotLight
//           innerAngle={5}
//           outerAngle={45}
//           direction={[0,-1,-.2]}
//           position={[0, 3, 0]}
//           color="#ffffff"
//           castsShadow={true}
//           influenceBitMask={4}
//           shadowMapSize={2048}
//           shadowNearZ={2}
//           shadowFarZ={5}
//           shadowOpacity={.7} />

//         <Viro3DObject
//           source={{ uri: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF/BoxAnimated.gltf" }}
//           position={[0, .15, 0]}
//           scale={[.3, .3, .3]}
//           type="GLTF"
//           lightReceivingBitMask={5}
//           shadowCastingBitMask={4}
//           transformBehaviors={['billboardY']}
//           // resources={[require('./res/object_soccerball/object_soccer_ball_diffuse.png'),
//           //             require('./res/object_soccerball/object_soccer_ball_normal.png'),
//           //             require('./res/object_soccerball/object_soccer_ball_specular.png')]}
//                       />
//         <ViroQuad
//           rotation={[-90,0,0]}
//           width={.5} height={.5}
//           arShadowReceiver={true}
//           lightReceivingBitMask={4} />

//       </ViroNode>

//     </ViroARScene>
//   );
// };

var createReactClass = require('create-react-class');

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
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

        {/* Text to show whether or not the AR system has initialized yet, see ViroARScene's onTrackingInitialized*/}
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

        <ViroBox position={[0, -.5, -1]}
          animation={{name: "rotate", run: true, loop: true}}
          scale={[.3, .3, .1]} materials={["grid"]} />

        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

        <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0,-1,-.2]}
            position={[0, 3, 1]}
            color="#aaaaaa"
            castsShadow={true}
            />

        {/* Node that contains a light, an object and a surface to catch its shadow
            notice that the dragType is "FixedToWorld" so the object can be dragged
            along real world surfaces and points. */}
        <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >

          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
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
              source={require('./res/emoji_smile/emoji_smile.vrx')}
              position={[0, .2, 0]}
              scale={[.2, .2, .2]}
              type="VRX"
            lightReceivingBitMask={3}
            shadowCastingBitMask={2}
            transformBehaviors={['billboardY']}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                       require('./res/emoji_smile/emoji_smile_specular.png'),
                       require('./res/emoji_smile/emoji_smile_normal.png')]}/>

          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />

        </ViroNode>

        {/* Node that contains a light, an object and a surface to catch its shadow
          notice that the dragType is "FixedToWorld" so the object can be dragged
          along real world surfaces and points. */}
        <ViroNode position={[.5,-.5,-.5]} dragType="FixedToWorld" onDrag={()=>{}} >

          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={4}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          <Viro3DObject
            source={require('./res/object_soccerball/object_soccer_ball.vrx')}
            position={[0, .15, 0]}
            scale={[.3, .3, .3]}
            type="VRX"
            lightReceivingBitMask={5}
            shadowCastingBitMask={4}
            transformBehaviors={['billboardY']}
            resources={[require('./res/object_soccerball/object_soccer_ball_diffuse.png'),
                       require('./res/object_soccerball/object_soccer_ball_normal.png'),
                       require('./res/object_soccerball/object_soccer_ball_specular.png')]}/>
          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={4} />

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