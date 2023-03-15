import React, { useState, useEffect } from 'react';
import "./partners-subset.scss";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { usePartners } from "shared/hooks"
import { fetchPartners } from "redux/actions"
import BeatLoader from "react-spinners/BeatLoader";
import { LOADED, LOADING } from "redux/status-types";
import store from "redux/store";


export const PartnersSubset = () => {

    const { partners, status } = usePartners()

    useEffect(() => {
        store.dispatch(fetchPartners)
    }, [])

    const renderStartup = (partner, index) => (
        <div className="card" key={index}>
            <img src={partner.StartupInfo.LogoLink} className="img" alt="founder-img" />
            <p className="name">{partner.StartupInfo.StartupName}</p>
        </div>
    )

    return (
        <div className="partners-subset-container">
            <Carousel
                itemWidth={300}
                centered
                infinite
                autoPlay={4500}
                animationSpeed={1000}
                stopAutoPlayOnHover
                clickToChange
            >
                {status === LOADED ? partners.models.slice(100).map((partner, index) => renderStartup(partner, index)):
                    status === LOADING
                    ? <div className="loading-partners">
                        <p className="loading">Loading partners </p>
                        <BeatLoader color="#333333" size={15} />
                    </div>
                    : <p className="failed">Failed partners. Please reload the page.</p>}
               
            </Carousel>
        </div>
    )
};