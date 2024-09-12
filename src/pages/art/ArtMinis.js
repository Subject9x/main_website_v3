import React from "react";
import BasicFooter from "../../components/main/BasicFooter";
import NavHeader from "../../components/main/NavHeader";

export default function ArtMinis({props}){

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
            <p>Since the year 1999 I’ve been painting miniatures for almost 25 years. My main efforts go to building and painting miniatures for the wargame Warhammer 40,000 by Games Workshop. I also collect and paint miniatures for various other wargames such as Battletech, and defunct games like Starsiege:Rebellion, and Dystopian Wars. This is a small sampling of my total collections.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-12 medium-10 large-8 medium-offset-1 large-offset-2">
            <div className="grid-x featured-image-block-grid">
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (5).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (6).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (7).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (1).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (2).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (3).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/mechs (4).jpg" alt="minis"/></div>
                
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks (1).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks (2).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks (3).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks (4).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks (1).png" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/tanks.jpg" alt="minis"/></div>

                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (1).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (2).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (3).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (4).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (5).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (6).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/dw (7).jpg" alt="minis"/></div>

                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (1).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (1).png" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (2).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (2).png" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (3).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (4).jpg" alt="minis"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/minis/40k (5).jpg" alt="minis"/></div>

            </div>
        </div>
    </div>
    <BasicFooter />
    </div>
    );
};