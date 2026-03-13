"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, CheckCircle, DollarSign, Flame, Leaf, MessageCircle, Phone, Star, UtensilsCrossed, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="grid"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Piccolo Potato's"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "#order" }}
          className="bg-transparent"
          buttonClassName="bg-[var(--primary-cta)] text-[var(--primary-cta-text)] hover:shadow-lg"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Piccolo Potato's – Taste the Local Difference"
          description="4.7★ Rated • Freshly prepared street-style meals • Fast, friendly service • Perfect for families, students & professionals"
          background={{ variant: "grid" }}
          tag="🔥 Local Favorite"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            { text: "📞 Call to Order", href: "tel:+21653018500" },
            { text: "🛒 Order Online", href: "#menu" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=5yotsp"
          imageAlt="Golden crispy Piccolo Potato's signature fries"
          className="min-h-screen flex items-center justify-center"
          containerClassName="max-w-6xl mx-auto px-4"
          titleClassName="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
          descriptionClassName="text-lg text-[var(--foreground)] opacity-90"
          buttonClassName="px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Who We Are"
          description="Piccolo Potato's is Hammam-Lif's beloved casual dining spot, serving fresh, delicious meals since day one. We believe great food shouldn't cost a fortune—quality ingredients, bold flavors, and warm hospitality are our promise."
          tag="🏪 Local & Proud"
          tagIcon={Award}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Fresh Ingredients",              description: "Locally sourced potatoes and premium ingredients prepared daily",              icon: Leaf
            },
            {
              title: "Fast Service",              description: "Order to table in minutes—perfect for busy schedules",              icon: Zap
            },
            {
              title: "Affordable Pricing",              description: "10–20 DT per person • Great value, never compromised",              icon: DollarSign
            },
            {
              title: "Trusted Quality",              description: "4.7★ rating from 60+ verified customer reviews",              icon: Star
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1cypij&_wi=1"
          imageAlt="Cozy Piccolo Potato's restaurant interior"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-16 md:py-24"
          containerClassName="max-w-6xl mx-auto px-4"
          titleClassName="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
          descriptionClassName="text-base text-[var(--foreground)] opacity-90 mb-8"
          bulletPointClassName="flex items-start gap-4 mb-6"
          bulletTitleClassName="font-semibold text-[var(--foreground)]"
          bulletDescriptionClassName="text-sm text-[var(--foreground)] opacity-80"
        />
      </div>

      <div id="menu-featured" data-section="menu-featured">
        <ProductCardOne
          title="Our Signature Menu"
          description="Explore our most loved dishes—prepared fresh, served hot, loved by locals"
          tag="⭐ Customer Favorites"
          tagIcon={UtensilsCrossed}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "combo-1",              name: "Classic Fries & Chicken Combo",              price: "15 DT",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=b26mv1",              imageAlt: "Crispy fries with tender chicken pieces"
            },
            {
              id: "combo-2",              name: "Premium Potato Platter",              price: "12 DT",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qnpj12",              imageAlt: "Golden fried potatoes with seasonings"
            },
            {
              id: "combo-3",              name: "Family Feast Bundle",              price: "35 DT",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3op9qr",              imageAlt: "Large family-sized meal combo"
            }
          ]}
          buttons={[
            { text: "View Full Menu", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          className="py-16 md:py-24"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          textBoxDescriptionClassName="text-base text-[var(--foreground)] opacity-90 mb-8"
          cardNameClassName="font-semibold text-[var(--foreground)]"
          cardPriceClassName="text-lg font-bold text-[var(--primary-cta)]"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Local Diners & Online Platforms"
          description="Featured on leading food delivery and review platforms"
          tag="🌟 Verified Partner"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          names={[
            "Google Maps",            "Glovo",            "Uber Eats",            "Facebook",            "TrustPilot",            "Instagram",            "WhatsApp"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={50}
          showCard={true}
          className="py-12 md:py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxTitleClassName="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2"
          textBoxDescriptionClassName="text-base text-[var(--foreground)] opacity-80"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Customers Say"
          description="Real reviews from real diners in Hammam-Lif"
          tag="💬 Customer Reviews"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          kpiItems={[
            { value: "4.7★", label: "Average Rating" },
            { value: "60+", label: "Verified Reviews" },
            { value: "500+", label: "Happy Customers" }
          ]}
          testimonials={[
            {
              id: "test-1",              name: "Fatima M.",              role: "Local Resident",              company: "Hammam-Lif",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2gtuj9"
            },
            {
              id: "test-2",              name: "Ahmed B.",              role: "Office Worker",              company: "Downtown",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=41bc88"
            },
            {
              id: "test-3",              name: "Leila N.",              role: "Family Parent",              company: "Local Area",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qexa10"
            },
            {
              id: "test-4",              name: "Mohamed K.",              role: "Student",              company: "University",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=epi92c"
            },
            {
              id: "test-5",              name: "Hana Z.",              role: "Professional",              company: "Business District",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oqx36g"
            },
            {
              id: "test-6",              name: "Carlos V.",              role: "Tourist",              company: "Visiting",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vakvrv"
            }
          ]}
          className="py-16 md:py-24"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          textBoxDescriptionClassName="text-base text-[var(--foreground)] opacity-90 mb-8"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="📍 Get in Touch"
          title="Ready to Order?"
          description="We're here to serve you. Choose your preferred way to order—call, visit, or order online."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1cypij&_wi=2"
          imageAlt="Piccolo Potato's location"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Your email (for order updates)"
          buttonText="Subscribe to Offers"
          termsText="By subscribing, you'll receive special offers and updates from Piccolo Potato's."
          className="py-16 md:py-24"
          containerClassName="max-w-6xl mx-auto px-4"
          tagClassName="text-sm font-semibold text-[var(--background-accent)]"
          titleClassName="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          descriptionClassName="text-base text-[var(--foreground)] opacity-90 mb-8"
          formWrapperClassName="space-y-4"
          inputClassName="w-full px-4 py-3 rounded-full border border-[var(--accent)] bg-white text-[var(--foreground)]"
          buttonClassName="w-full px-6 py-3 rounded-full bg-[var(--primary-cta)] text-[var(--primary-cta-text)] font-semibold hover:shadow-lg"
          termsClassName="text-xs text-[var(--foreground)] opacity-70"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Piccolo Potato's"
          leftLink={{
            text: "2 Av. 20 Mars, Hammam-Lif, Tunisia",            href: "https://maps.google.com/?q=Piccolo+Potatos+Hammam-Lif"
          }}
          rightLink={{
            text: "+216 53 018 500",            href: "tel:+21653018500"
          }}
          className="bg-[var(--foreground)] text-[var(--secondary-cta)]"
          containerClassName="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center"
          logoClassName="font-bold text-lg"
          linkClassName="hover:text-[var(--background-accent)] transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}