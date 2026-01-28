import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Trust from "../../components/Trust/Trust";
import Offerings from "../../components/Offerings/Offerings";
import Testimonials from "../../components/Testimonials/Testimonials";
import Social from "../../components/Social/Social";
import CTA from "../../components/CTA/CTA";
import AboutHome from "../../components/AboutHome/AboutHome";
import WorkshopForm from "../../components/WorkshopForm/WorkshopForm";
import PartnershipForm from "../../components/PartnershipForm/PartnershipForm";
import Modal from "../../components/Modal/Modal";



const Homepage = () => {
    
    const [activeModal, setActiveModal] = useState(null);

    return (
        <>
            <Navbar
                onWorkshopClick={() => setActiveModal("workshop")}
                onPartnerClick={() => setActiveModal("partner")}
            />
            <Hero
                onWorkshopClick={() => setActiveModal("workshop")}
                onPartnerClick={() => setActiveModal("partner")}
            />

            <Trust />
            <ImageSlider />
            <Testimonials />
            <AboutHome />
            <Offerings />

            <CTA
                onWorkshopClick={() => setActiveModal("workshop")}
                onPartnerClick={() => setActiveModal("partner")}
            />

            {/* Workshop Modal */}
            <Modal
                isOpen={activeModal === "workshop"}
                onClose={() => setActiveModal(null)}
            >
                <WorkshopForm />
            </Modal>

            {/* Partnership Modal */}
            <Modal
                isOpen={activeModal === "partner"}
                onClose={() => setActiveModal(null)}
            >
                <PartnershipForm />
            </Modal>

            <Social />
        </>
    );
}

export default Homepage;   
