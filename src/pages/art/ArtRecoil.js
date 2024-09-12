import React from "react";
import BasicFooter from "../../components/main/BasicFooter";
import NavHeader from "../../components/main/NavHeader";

export default function ArtRecoil({props}){
    return(
    <div className="grid-container fluid">
        <NavHeader />
        <div className="grid-x grid-margin-x">
            <div className="cell auto small-12 medium-8 large-6 medium-offset-2 large-offset-3">
                <h4>Concepts and sketches</h4>
            </div>
        </div>
        <div className="grid-x grid-margin-x">
            <div className="cell auto small-12 medium-8 large-6 medium-offset-2 large-offset-3">
                <p>Recoil is a science-fiction universe of my own design. It takes inspiration from the WW1 era of history crossed with diesel-punk aesthetics. The story takes place in a star system far removed from Earth and possibly the Milky Way. A human-run empire has taken control of a world next door, and our main characters are all mech pilots in an experimental squad for this empire.</p>
            </div>
        </div>
        <div className="grid-x grid-margin-x">
            <div className="cell auto small-12 medium-10 large-8 medium-offset-1 large-offset-2">
                <div className="grid-x featured-image-block-grid">
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (1).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (2).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (3).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (4).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (5).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (6).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (7).jpg" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (1).png" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (2).png" alt="minis" /></div>
                    <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/recoil/recoil (3).png" alt="minis" /></div>
                </div>
            </div>
        </div>
        <BasicFooter />
    </div>
    );  
};