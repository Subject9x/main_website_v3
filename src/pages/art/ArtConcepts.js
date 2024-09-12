import React from "react";
import BasicFooter from "../../components/main/BasicFooter";
import NavHeader from "../../components/main/NavHeader";

export default function ArtConcepts({props}){
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
            <p>Regardless of any project I am currently working on, I will usually be tinkering on several concepts at once.</p>
        </div>
    </div>
    <div className="grid-x grid-margin-x">
        <div className="cell auto small-12 medium-10 large-8 medium-offset-1 large-offset-2">
            <div className="grid-x featured-image-block-grid">
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (16).png" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (17).png" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (18).png" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (1).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (1).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (2).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (15).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (4).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (5).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (6).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (7).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (8).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (9).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (10).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (11).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (12).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (13).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (14).jpg" alt="conceptart"/></div>
                <div className="cell shrink featured-image-block"><img className="thumbnail thumbnail-size" src="/img/art/concept/concept_art (3).jpg" alt="conceptart"/></div>
            </div>
        </div>
    </div>
    <BasicFooter />
    </div>
);  
};