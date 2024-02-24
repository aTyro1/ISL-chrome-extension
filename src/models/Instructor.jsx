import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Instructor = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("instructor.glb");
  const { actions, names } = useAnimations(animations, group);
  useEffect(()=>{
    actions['a'].play();
    actions['b'].play();
    actions['c'].play();
    actions['d'].play();
    actions['a'].play();
    actions['m'].play();
    actions['a'].play();
    actions['n'].play();
    actions['h'].play();

  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="metarig">
          <primitive object={nodes.spine} />
        </group>
        <group name="Armature">
          <skinnedMesh
            name="Ch31_Body"
            geometry={nodes.Ch31_Body.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Body.skeleton}
          />
          <skinnedMesh
            name="Ch31_Collar"
            geometry={nodes.Ch31_Collar.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Collar.skeleton}
          />
          <skinnedMesh
            name="Ch31_Eyelashes"
            geometry={nodes.Ch31_Eyelashes.geometry}
            material={materials.Ch31_hair}
            skeleton={nodes.Ch31_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch31_Hair"
            geometry={nodes.Ch31_Hair.geometry}
            material={materials.Ch31_hair}
            skeleton={nodes.Ch31_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch31_Pants"
            geometry={nodes.Ch31_Pants.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch31_Shoes"
            geometry={nodes.Ch31_Shoes.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Shoes.skeleton}
          />
          <skinnedMesh
            name="Ch31_Sweater"
            geometry={nodes.Ch31_Sweater.geometry}
            material={materials.Ch31_body}
            skeleton={nodes.Ch31_Sweater.skeleton}
          />
          <primitive object={nodes.root} />
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes["MCH-hand_ikparentL"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentL"]} />
          <primitive object={nodes["MCH-hand_ikparentR"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentR"]} />
          <primitive object={nodes["MCH-foot_ikparentL"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentL"]} />
          <primitive object={nodes["MCH-foot_ikparentR"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentR"]} />
        </group>
        <group
          name="WGT-Armature_spine_fk"
          position={[0, 1.063, 0.011]}
          rotation={[1.476, 0, 0]}
          scale={0.106}
        />
        <group
          name="WGT-Armature_spine_fk001"
          position={[0, 1.186, -0.001]}
          rotation={[1.476, 0, 0]}
          scale={0.124}
        />
        <group
          name="WGT-Armature_spine_fk002"
          position={[0, 1.186, -0.001]}
          rotation={[1.476, 0, 0]}
          scale={0.141}
        />
        <group
          name="WGT-Armature_spine_fk003"
          position={[0, 1.326, -0.014]}
          rotation={[1.476, 0, 0]}
          scale={0.159}
        />
        <group
          name="WGT-Armature_tweak_spine"
          position={[0, 0.957, 0.021]}
          rotation={[1.476, 0, 0]}
          scale={0.053}
        />
        <group
          name="WGT-Armature_tweak_spine001"
          position={[0, 1.063, 0.011]}
          rotation={[1.476, 0, 0]}
          scale={0.062}
        />
        <group
          name="WGT-Armature_tweak_spine002"
          position={[0, 1.186, -0.001]}
          rotation={[1.476, 0, 0]}
          scale={0.071}
        />
        <group
          name="WGT-Armature_tweak_spine003"
          position={[0, 1.326, -0.014]}
          rotation={[1.476, 0, 0]}
          scale={0.079}
        />
        <group
          name="WGT-Armature_tweak_spine004"
          position={[0, 1.484, -0.029]}
          rotation={[1.863, 0, 0]}
          scale={0.017}
        />
        <group
          name="WGT-Armature_torso"
          position={[0, 1.01, 0.016]}
          scale={0.318}
        />
        <group
          name="WGT-Armature_hips"
          position={[0, 0.957, 0.021]}
          rotation={[1.476, 0, 0]}
          scale={0.132}
        />
        <group
          name="WGT-Armature_chest"
          position={[0, 1.326, -0.014]}
          rotation={[1.476, 0, 0]}
          scale={0.177}
        />
        <group
          name="WGT-Armature_shoulderL"
          position={[0.069, 1.466, -0.029]}
          rotation={[-1.567, -1.314, 1.673]}
          scale={0.145}
        />
        <group
          name="WGT-Armature_upper_arm_parentL"
          position={[0.209, 1.429, -0.029]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.069}
        />
        <group
          name="WGT-Armature_upper_arm_fkL"
          position={[0.209, 1.429, -0.029]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.275}
        />
        <group
          name="WGT-Armature_forearm_fkL"
          position={[0.482, 1.413, -0.054]}
          rotation={[2.831, -1.457, 1.709]}
          scale={0.214}
        />
        <group
          name="WGT-Armature_hand_fkL"
          position={[0.695, 1.42, -0.031]}
          rotation={[-2.202, -1.471, 2.958]}
          scale={0.09}
        />
        <group
          name="WGT-Armature_upper_arm_ikL"
          position={[0.209, 1.429, -0.029]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.275}
        />
        <group
          name="WGT-Armature_upper_arm_ik_targetL"
          position={[0.476, 1.202, -0.492]}
          rotation={[2.694, -0.011, 0.05]}
          scale={0.061}
        />
        <group
          name="WGT-Armature_hand_ikL"
          position={[0.695, 1.42, -0.031]}
          rotation={[-2.202, -1.471, 2.958]}
          scale={0.09}
        />
        <group
          name="WGT-Armature_VIS_upper_arm_ik_poleL"
          position={[0.482, 1.413, -0.054]}
          rotation={[Math.PI / 2, 0, -1.085]}
          scale={0.486}
        />
        <group
          name="WGT-Armature_upper_arm_tweakL"
          position={[0.209, 1.429, -0.029]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.046}
        />
        <group
          name="WGT-Armature_upper_arm_tweakL001"
          position={[0.3, 1.424, -0.038]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.046}
        />
        <group
          name="WGT-Armature_upper_arm_tweakL002"
          position={[0.391, 1.418, -0.046]}
          rotation={[-0.59, -1.461, -1.714]}
          scale={0.046}
        />
        <group
          name="WGT-Armature_forearm_tweakL"
          position={[0.482, 1.413, -0.054]}
          rotation={[2.831, -1.457, 1.709]}
          scale={0.036}
        />
        <group
          name="WGT-Armature_forearm_tweakL001"
          position={[0.553, 1.415, -0.047]}
          rotation={[2.831, -1.457, 1.709]}
          scale={0.036}
        />
        <group
          name="WGT-Armature_forearm_tweakL002"
          position={[0.624, 1.418, -0.039]}
          rotation={[2.831, -1.457, 1.709]}
          scale={0.036}
        />
        <group
          name="WGT-Armature_hand_tweakL"
          position={[0.695, 1.42, -0.031]}
          rotation={[-2.202, -1.471, 2.958]}
          scale={0.015}
        />
        <group
          name="WGT-Armature_palmL"
          position={[0.718, 1.419, -0.038]}
          rotation={[-0.136, -1.269, -0.1]}
          scale={0.073}
        />
        <group
          name="WGT-Armature_f_index01L"
          position={[0.788, 1.408, 0.009]}
          rotation={[-2.601, -1.344, 0.538]}
          scale={0.034}
        />
        <group
          name="WGT-Armature_f_index02L"
          position={[0.821, 1.404, 0.016]}
          rotation={[-2.212, -1.248, 0.913]}
          scale={0.032}
        />
        <group
          name="WGT-Armature_f_index03L"
          position={[0.851, 1.396, 0.022]}
          rotation={[-2.258, -1.268, 0.87]}
          scale={0.027}
        />
        <group
          name="WGT-Armature_f_index01L001"
          position={[0.877, 1.39, 0.027]}
          rotation={[0.884, 1.268, 2.199]}
          scale={0.014}
        />
        <group
          name="WGT-Armature_f_index01_masterL"
          position={[0.788, 1.408, 0.009]}
          rotation={[-2.601, -1.344, 0.538]}
          scale={0.15}
        />
        <group
          name="WGT-Armature_thumb01L"
          position={[0.723, 1.401, -0.001]}
          rotation={[-2.571, -0.679, -0.918]}
          scale={0.036}
        />
        <group
          name="WGT-Armature_thumb02L"
          position={[0.746, 1.386, 0.023]}
          rotation={[-2.346, -0.775, -0.762]}
          scale={0.033}
        />
        <group
          name="WGT-Armature_thumb03L"
          position={[0.769, 1.369, 0.039]}
          rotation={[-2.164, -1.048, -0.619]}
          scale={0.025}
        />
        <group
          name="WGT-Armature_thumb01L001"
          position={[0.791, 1.358, 0.046]}
          rotation={[0.977, 1.048, 0.439]}
          scale={0.013}
        />
        <group
          name="WGT-Armature_thumb01_masterL"
          position={[0.723, 1.401, -0.001]}
          rotation={[-2.571, -0.679, -0.918]}
          scale={0.152}
        />
        <group
          name="WGT-Armature_f_middle01L"
          position={[0.794, 1.413, -0.014]}
          rotation={[-2.18, -1.475, 0.935]}
          scale={0.035}
        />
        <group
          name="WGT-Armature_f_middle02L"
          position={[0.828, 1.41, -0.012]}
          rotation={[-1.737, -1.277, 1.371]}
          scale={0.033}
        />
        <group
          name="WGT-Armature_f_middle03L"
          position={[0.86, 1.401, -0.011]}
          rotation={[-1.792, -1.344, 1.318]}
          scale={0.029}
        />
        <group
          name="WGT-Armature_f_middle01L001"
          position={[0.889, 1.394, -0.009]}
          rotation={[1.35, 1.344, 1.75]}
          scale={0.015}
        />
        <group
          name="WGT-Armature_f_middle01_masterL"
          position={[0.794, 1.413, -0.014]}
          rotation={[-2.18, -1.475, 0.935]}
          scale={0.156}
        />
        <group
          name="WGT-Armature_f_ring01L"
          position={[0.797, 1.415, -0.036]}
          rotation={[-1.564, -1.345, -1.75]}
          scale={0.029}
        />
        <group
          name="WGT-Armature_f_ring02L"
          position={[0.825, 1.409, -0.036]}
          rotation={[-1.574, -1.265, -1.759]}
          scale={0.028}
        />
        <group
          name="WGT-Armature_f_ring03L"
          position={[0.852, 1.401, -0.036]}
          rotation={[-1.99, -1.537, -2.173]}
          scale={0.023}
        />
        <group
          name="WGT-Armature_f_ring01L001"
          position={[0.875, 1.4, -0.036]}
          rotation={[1.151, 1.537, -1.334]}
          scale={0.011}
        />
        <group
          name="WGT-Armature_f_ring01_masterL"
          position={[0.797, 1.415, -0.036]}
          rotation={[-1.564, -1.345, -1.75]}
          scale={0.128}
        />
        <group
          name="WGT-Armature_f_pinky01L"
          position={[0.788, 1.416, -0.06]}
          rotation={[-1.578, -1.386, 1.667]}
          scale={0.026}
        />
        <group
          name="WGT-Armature_f_pinky02L"
          position={[0.813, 1.412, -0.06]}
          rotation={[-1.571, -1.206, 1.671]}
          scale={0.023}
        />
        <group
          name="WGT-Armature_f_pinky03L"
          position={[0.835, 1.403, -0.06]}
          rotation={[-1.801, -1.511, 1.444]}
          scale={0.018}
        />
        <group
          name="WGT-Armature_f_pinky01L001"
          position={[0.853, 1.402, -0.06]}
          rotation={[1.341, 1.511, 1.903]}
          scale={0.009}
        />
        <group
          name="WGT-Armature_f_pinky01_masterL"
          position={[0.788, 1.416, -0.06]}
          rotation={[-1.578, -1.386, 1.667]}
          scale={0.109}
        />
        <group
          name="WGT-Armature_shoulderR"
          position={[-0.069, 1.466, -0.029]}
          rotation={[1.567, -1.314, 1.665]}
          scale={-0.145}
        />
        <group
          name="WGT-Armature_upper_arm_parentR"
          position={[-0.209, 1.429, -0.029]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.069}
        />
        <group
          name="WGT-Armature_upper_arm_fkR"
          position={[-0.209, 1.429, -0.029]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.275}
        />
        <group
          name="WGT-Armature_forearm_fkR"
          position={[-0.482, 1.413, -0.053]}
          rotation={[-0.341, -1.466, 1.703]}
          scale={-0.214}
        />
        <group
          name="WGT-Armature_hand_fkR"
          position={[-0.695, 1.42, -0.032]}
          rotation={[0.793, -1.46, 2.836]}
          scale={-0.09}
        />
        <group
          name="WGT-Armature_upper_arm_ikR"
          position={[-0.209, 1.429, -0.029]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.275}
        />
        <group
          name="WGT-Armature_upper_arm_ik_targetR"
          position={[-0.475, 1.192, -0.486]}
          rotation={[-0.472, -0.015, 0.063]}
          scale={-0.061}
        />
        <group
          name="WGT-Armature_hand_ikR"
          position={[-0.695, 1.42, -0.032]}
          rotation={[0.793, -1.46, 2.836]}
          scale={-0.09}
        />
        <group
          name="WGT-Armature_VIS_upper_arm_ik_poleR"
          position={[-0.482, 1.413, -0.053]}
          rotation={[-Math.PI / 2, 0, -1.061]}
          scale={-0.486}
        />
        <group
          name="WGT-Armature_upper_arm_tweakR"
          position={[-0.209, 1.429, -0.029]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.046}
        />
        <group
          name="WGT-Armature_upper_arm_tweakR001"
          position={[-0.3, 1.424, -0.037]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.046}
        />
        <group
          name="WGT-Armature_upper_arm_tweakR002"
          position={[-0.391, 1.418, -0.045]}
          rotation={[2.542, -1.463, -1.698]}
          scale={-0.046}
        />
        <group
          name="WGT-Armature_forearm_tweakR"
          position={[-0.482, 1.413, -0.053]}
          rotation={[-0.341, -1.466, 1.703]}
          scale={-0.036}
        />
        <group
          name="WGT-Armature_forearm_tweakR001"
          position={[-0.553, 1.415, -0.046]}
          rotation={[-0.341, -1.466, 1.703]}
          scale={-0.036}
        />
        <group
          name="WGT-Armature_forearm_tweakR002"
          position={[-0.624, 1.418, -0.039]}
          rotation={[-0.341, -1.466, 1.703]}
          scale={-0.036}
        />
        <group
          name="WGT-Armature_hand_tweakR"
          position={[-0.695, 1.42, -0.032]}
          rotation={[0.794, -1.46, 2.836]}
          scale={-0.015}
        />
        <group
          name="WGT-Armature_palmR"
          position={[-0.718, 1.419, -0.039]}
          rotation={[3.008, -1.279, -0.1]}
          scale={-0.071}
        />
        <group
          name="WGT-Armature_f_index01R"
          position={[-0.79, 1.407, 0.011]}
          rotation={[0.747, -1.38, 0.674]}
          scale={-0.033}
        />
        <group
          name="WGT-Armature_f_index02R"
          position={[-0.822, 1.403, 0.015]}
          rotation={[1.077, -1.298, 0.995]}
          scale={-0.031}
        />
        <group
          name="WGT-Armature_f_index03R"
          position={[-0.852, 1.396, 0.019]}
          rotation={[1.103, -1.28, 1.021]}
          scale={-0.026}
        />
        <group
          name="WGT-Armature_f_index01R001"
          position={[-0.877, 1.389, 0.023]}
          rotation={[-2.038, 1.28, 1.922]}
          scale={-0.013}
        />
        <group
          name="WGT-Armature_f_index01_masterR"
          position={[-0.79, 1.407, 0.011]}
          rotation={[0.747, -1.38, 0.674]}
          scale={-0.145}
        />
        <group
          name="WGT-Armature_thumb01R"
          position={[-0.722, 1.401, -0.002]}
          rotation={[0.556, -0.644, -0.881]}
          scale={-0.036}
        />
        <group
          name="WGT-Armature_thumb02R"
          position={[-0.743, 1.386, 0.022]}
          rotation={[0.812, -0.809, -0.707]}
          scale={-0.033}
        />
        <group
          name="WGT-Armature_thumb03R"
          position={[-0.768, 1.37, 0.038]}
          rotation={[0.877, -0.903, -0.658]}
          scale={-0.028}
        />
        <group
          name="WGT-Armature_thumb01R001"
          position={[-0.79, 1.356, 0.049]}
          rotation={[-2.265, 0.903, 0.5]}
          scale={-0.014}
        />
        <group
          name="WGT-Armature_thumb01_masterR"
          position={[-0.722, 1.401, -0.002]}
          rotation={[0.556, -0.644, -0.881]}
          scale={-0.157}
        />
        <group
          name="WGT-Armature_f_middle01R"
          position={[-0.796, 1.414, -0.014]}
          rotation={[1.158, -1.403, 1.055]}
          scale={-0.035}
        />
        <group
          name="WGT-Armature_f_middle02R"
          position={[-0.831, 1.409, -0.012]}
          rotation={[1.371, -1.294, 1.264]}
          scale={-0.032}
        />
        <group
          name="WGT-Armature_f_middle03R"
          position={[-0.862, 1.4, -0.01]}
          rotation={[1.275, -1.358, 1.17]}
          scale={-0.029}
        />
        <group
          name="WGT-Armature_f_middle01R001"
          position={[-0.889, 1.394, -0.008]}
          rotation={[-1.867, 1.358, 1.749]}
          scale={-0.014}
        />
        <group
          name="WGT-Armature_f_middle01_masterR"
          position={[-0.796, 1.414, -0.014]}
          rotation={[1.158, -1.403, 1.055]}
          scale={-0.155}
        />
        <group
          name="WGT-Armature_f_ring01R"
          position={[-0.798, 1.415, -0.036]}
          rotation={[1.659, -1.33, -1.436]}
          scale={-0.029}
        />
        <group
          name="WGT-Armature_f_ring02R"
          position={[-0.826, 1.408, -0.037]}
          rotation={[1.682, -1.291, -1.414]}
          scale={-0.027}
        />
        <group
          name="WGT-Armature_f_ring03R"
          position={[-0.852, 1.401, -0.037]}
          rotation={[1.741, -1.484, -1.356]}
          scale={-0.023}
        />
        <group
          name="WGT-Armature_f_ring01R001"
          position={[-0.876, 1.399, -0.038]}
          rotation={[-1.4, 1.484, -1.695]}
          scale={-0.012}
        />
        <group
          name="WGT-Armature_f_ring01_masterR"
          position={[-0.798, 1.415, -0.036]}
          rotation={[1.659, -1.33, -1.436]}
          scale={-0.129}
        />
        <group
          name="WGT-Armature_f_pinky01R"
          position={[-0.786, 1.417, -0.06]}
          rotation={[1.664, -1.389, 1.546]}
          scale={-0.028}
        />
        <group
          name="WGT-Armature_f_pinky02R"
          position={[-0.813, 1.411, -0.06]}
          rotation={[1.676, -1.215, 1.557]}
          scale={-0.023}
        />
        <group
          name="WGT-Armature_f_pinky03R"
          position={[-0.835, 1.403, -0.061]}
          rotation={[1.672, -1.319, 1.554]}
          scale={-0.021}
        />
        <group
          name="WGT-Armature_f_pinky01R001"
          position={[-0.856, 1.398, -0.061]}
          rotation={[-1.469, 1.319, 1.357]}
          scale={-0.01}
        />
        <group
          name="WGT-Armature_f_pinky01_masterR"
          position={[-0.786, 1.417, -0.06]}
          rotation={[1.664, -1.389, 1.546]}
          scale={-0.118}
        />
        <group
          name="WGT-Armature_neck"
          position={[0, 1.484, -0.029]}
          rotation={[1.863, 0, 0]}
          scale={0.069}
        />
        <group
          name="WGT-Armature_head"
          position={[0, 1.55, -0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.236}
        />
        <group
          name="WGT-Armature_tweak_spine005"
          position={[0, 1.517, -0.019]}
          rotation={[1.863, 0, 0]}
          scale={0.017}
        />
        <group
          name="WGT-Armature_thigh_parentL"
          position={[0.089, 0.898, 0.022]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.102}
        />
        <group
          name="WGT-Armature_thigh_fkL"
          position={[0.089, 0.898, 0.022]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.41}
        />
        <group
          name="WGT-Armature_shin_fkL"
          position={[0.127, 0.491, -0.002]}
          rotation={[-1.472, -0.056, 0.749]}
          scale={0.378}
        />
        <group
          name="WGT-Armature_foot_fkL"
          position={[0.148, 0.115, -0.039]}
          rotation={[-2.586, -0.197, 0.121]}
          scale={0.194}
        />
        <group
          name="WGT-Armature_toe_fkL"
          position={[0.186, 0.015, 0.123]}
          rotation={[3.09, -0.224, 3.13]}
          scale={0.079}
        />
        <group
          name="WGT-Armature_thigh_ikL"
          position={[0.089, 0.898, 0.022]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.41}
        />
        <group
          name="WGT-Armature_thigh_ik_targetL"
          position={[0.661, 0.486, 0.577]}
          rotation={[0.008, 0.745, -0.003]}
          scale={0.098}
        />
        <group
          name="WGT-Armature_foot_ikL"
          position={[0.148, 0.115, -0.039]}
          scale={0.194}
        />
        <group
          name="WGT-Armature_VIS_thigh_ik_poleL"
          position={[0.127, 0.491, -0.002]}
          rotation={[Math.PI / 2, 0, 0.8]}
          scale={0.787}
        />
        <group
          name="WGT-Armature_thigh_tweakL"
          position={[0.089, 0.898, 0.022]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.068}
        />
        <group
          name="WGT-Armature_thigh_tweakL001"
          position={[0.102, 0.762, 0.014]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.068}
        />
        <group
          name="WGT-Armature_thigh_tweakL002"
          position={[0.115, 0.627, 0.006]}
          rotation={[-1.512, -0.092, 0.746]}
          scale={0.068}
        />
        <group
          name="WGT-Armature_shin_tweakL"
          position={[0.127, 0.491, -0.002]}
          rotation={[-1.472, -0.056, 0.749]}
          scale={0.063}
        />
        <group
          name="WGT-Armature_shin_tweakL001"
          position={[0.134, 0.366, -0.014]}
          rotation={[-1.472, -0.056, 0.749]}
          scale={0.063}
        />
        <group
          name="WGT-Armature_shin_tweakL002"
          position={[0.141, 0.241, -0.027]}
          rotation={[-1.472, -0.056, 0.749]}
          scale={0.063}
        />
        <group
          name="WGT-Armature_foot_tweakL"
          position={[0.148, 0.115, -0.039]}
          rotation={[-2.586, -0.197, 0.121]}
          scale={0.032}
        />
        <group
          name="WGT-Armature_foot_spin_ikL"
          position={[0.186, 0.015, 0.123]}
          scale={0.097}
        />
        <group
          name="WGT-Armature_foot_heel_ikL"
          position={[0.148, 0.115, -0.039]}
          scale={0.097}
        />
        <group
          name="WGT-Armature_toe_ikL"
          position={[0.186, 0.015, 0.123]}
          rotation={[3.09, -0.224, 3.13]}
          scale={0.079}
        />
        <group
          name="WGT-Armature_thigh_parentR"
          position={[-0.089, 0.898, 0.022]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.103}
        />
        <group
          name="WGT-Armature_thigh_fkR"
          position={[-0.089, 0.898, 0.022]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.41}
        />
        <group
          name="WGT-Armature_shin_fkR"
          position={[-0.127, 0.491, -0.003]}
          rotation={[1.679, -0.056, 0.669]}
          scale={-0.378}
        />
        <group
          name="WGT-Armature_foot_fkR"
          position={[-0.148, 0.115, -0.044]}
          rotation={[0.544, -0.193, 0.116]}
          scale={-0.198}
        />
        <group
          name="WGT-Armature_toe_fkR"
          position={[-0.186, 0.015, 0.122]}
          rotation={[-0.052, -0.224, 3.13]}
          scale={-0.079}
        />
        <group
          name="WGT-Armature_thigh_ikR"
          position={[-0.089, 0.898, 0.022]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.41}
        />
        <group
          name="WGT-Armature_thigh_ik_targetR"
          position={[-0.614, 0.475, 0.616]}
          rotation={[-3.116, 0.666, -0.009]}
          scale={-0.098}
        />
        <group
          name="WGT-Armature_foot_ikR"
          position={[-0.148, 0.115, -0.044]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.198}
        />
        <group
          name="WGT-Armature_VIS_thigh_ik_poleR"
          position={[-0.127, 0.491, -0.003]}
          rotation={[-Math.PI / 2, 0, 0.72]}
          scale={-0.788}
        />
        <group
          name="WGT-Armature_thigh_tweakR"
          position={[-0.089, 0.898, 0.022]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.068}
        />
        <group
          name="WGT-Armature_thigh_tweakR001"
          position={[-0.102, 0.762, 0.014]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.068}
        />
        <group
          name="WGT-Armature_thigh_tweakR002"
          position={[-0.115, 0.627, 0.005]}
          rotation={[1.633, -0.092, 0.666]}
          scale={-0.068}
        />
        <group
          name="WGT-Armature_shin_tweakR"
          position={[-0.127, 0.491, -0.003]}
          rotation={[1.679, -0.056, 0.669]}
          scale={-0.063}
        />
        <group
          name="WGT-Armature_shin_tweakR001"
          position={[-0.134, 0.366, -0.017]}
          rotation={[1.679, -0.056, 0.669]}
          scale={-0.063}
        />
        <group
          name="WGT-Armature_shin_tweakR002"
          position={[-0.141, 0.241, -0.03]}
          rotation={[1.679, -0.056, 0.669]}
          scale={-0.063}
        />
        <group
          name="WGT-Armature_foot_tweakR"
          position={[-0.148, 0.115, -0.044]}
          rotation={[0.544, -0.193, 0.116]}
          scale={-0.033}
        />
        <group
          name="WGT-Armature_foot_spin_ikR"
          position={[-0.186, 0.015, 0.122]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.099}
        />
        <group
          name="WGT-Armature_foot_heel_ikR"
          position={[-0.148, 0.115, -0.044]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.099}
        />
        <group
          name="WGT-Armature_toe_ikR"
          position={[-0.186, 0.015, 0.122]}
          rotation={[-0.052, -0.224, 3.13]}
          scale={-0.079}
        />
        <group name="WGT-Armature_root" scale={0.964} />
      </group>
    </group>
  );
}

export default Instructor

useGLTF.preload("instructor.glb");


