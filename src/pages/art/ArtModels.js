import React from "react";
import BasicFooter from "../../components/main/BasicFooter";
import NavHeader from "../../components/main/NavHeader";

export default function ArtModels({props}){
return(
    <div className="grid-container fluid">
    <NavHeader />
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-12 medium-8 large-6 medium-offset-2 large-offset-3">
            <h4>3D Models and Artwork</h4>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-12 medium-8 large-6 medium-offset-2 large-offset-3">
            <p>Over the years I’ve also branched out into modest 3D artwork. This effort is usually project-based but over time I’ve honed my style around low-poly, minimalist aesthetics. I generally lack the resources to hire great 3D artists so I work with what I can. These are also mostly concept work, for a complete example the game <i>battleMETAL</i>.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-12 medium-10 large-8 medium-offset-1 large-offset-2">
            <div className="grid-x featured-image-block-grid">
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/sapper_front.png" alt="3dmodel" />
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/warden_and_ket.png" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/40q_wep_test.png" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/thawk.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/chamond_plank.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/mark_iv_hi.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/og_ft17.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/rig_heavy.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/rig_light.gif" alt="3dmodel"/>
                </div>
                <div className="cell shrink featured-image-block">
                    <img className="thumbnail thumbnail-size" src="/img/art/3d/rig_medium.gif" alt="3dmodel"/>
                </div>
            </div>
        </div>
    </div>
    <BasicFooter />
    </div>
);  
};