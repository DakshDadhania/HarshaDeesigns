"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Last updated: January 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using the services of Harsha Deesigns, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Services</h2>
              <p className="text-gray-600 mb-6">
                Harsha Deesigns provides wall texturing, decorative painting, wood polishing, DUCO finishing, and stucco application services for residential and commercial properties. All services are subject to availability and may vary based on location and project requirements.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Consultation and Quotation</h2>
              <p className="text-gray-600 mb-4">
                Initial consultations and quotations are provided based on information supplied by the client. Final pricing may vary based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Site conditions discovered during inspection</li>
                <li>Changes to project scope or specifications</li>
                <li>Material availability and pricing fluctuations</li>
                <li>Additional preparation work required</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Project Execution</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h3>
              <p className="text-gray-600 mb-6">
                Project timelines are estimates and may be affected by weather conditions, material availability, client delays, or unforeseen site conditions. We will communicate any delays promptly.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h3>
              <p className="text-gray-600 mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Providing safe and clear access to work areas</li>
                <li>Removing or protecting furniture and valuables</li>
                <li>Ensuring utilities (water, electricity) are available</li>
                <li>Making timely decisions on material selections and changes</li>
                <li>Timely payment as per agreed terms</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Standard payment terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Advance payment: 40% upon project confirmation</li>
                <li>Progress payment: 40% at 50% project completion</li>
                <li>Final payment: 20% upon project completion</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Payment terms may vary for large projects and will be specified in the project agreement.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Warranty and Maintenance</h2>
              <p className="text-gray-600 mb-4">
                We provide warranties on workmanship as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Interior textures and finishes: 1 year</li>
                <li>Exterior finishes: 6 months (subject to maintenance)</li>
                <li>Wood polish and DUCO: 1 year</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Warranties do not cover damage from misuse, neglect, alterations, or normal wear and tear. Regular maintenance as per our guidelines is required to maintain warranty validity.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cancellation and Refund</h2>
              <p className="text-gray-600 mb-6">
                Clients may cancel projects with written notice. Refund eligibility depends on project stage and costs incurred. Material costs and work completed are non-refundable.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Liability</h2>
              <p className="text-gray-600 mb-6">
                Harsha Deesigns is not liable for indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the specific service in question.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dispute Resolution</h2>
              <p className="text-gray-600 mb-6">
                Any disputes arising from these terms shall be resolved through arbitration in Anand, Gujarat, under Indian law.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <ul className="list-none text-gray-600 mb-6 space-y-2">
                <li><strong>Email:</strong> hello.harshadeesigns@gmail.com</li>
                <li><strong>Phone:</strong> +91 72839 98801 / +91 87580 88805</li>
                <li><strong>Address:</strong> Sardar Rajmarg Road, Anand - 388001, Gujarat</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default TermsOfServicePage;

