import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function PrivacyPolicy({ lastUpdated }) {
  return (
    <>
      <SEO
        title="Privacy Policy - Trident Realty"
        description="Read our privacy policy to understand how Trident Realty collects, uses, and protects your personal information when you use our services."
        keywords="privacy policy, data protection, personal information, Trident Realty, real estate privacy"
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium">
                Last updated: {lastUpdated}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to Trident Realty ("we," "our," or "us"). We are
                committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                By using our website or services, you consent to the practices
                described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Name and contact information (phone number, email address)
                </li>
                <li>Property preferences and budget information</li>
                <li>Communication records and inquiries</li>
                <li>Financial information for property transactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>To provide and improve our real estate services</li>
                <li>To communicate with you about properties and services</li>
                <li>To process transactions and manage your account</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.1 With Your Consent
              </h3>
              <p className="text-gray-700 mb-4">
                We may share your information when you have given us explicit
                consent to do so.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.2 Service Providers
              </h3>
              <p className="text-gray-700 mb-4">
                We may share information with trusted third-party service
                providers who assist us in operating our business.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.3 Legal Requirements
              </h3>
              <p className="text-gray-700">
                We may disclose information when required by law or to protect
                our rights and safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> While we strive to protect your
                  information, we cannot guarantee absolute security of data
                  transmitted over the internet.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data
                  in a portable format
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and personalize content.
                You can control cookie settings through your browser
                preferences.
              </p>
              <p className="text-gray-700">
                By continuing to use our website, you consent to our use of
                cookies as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700">
                Your continued use of our services after any changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700">
                      <a
                        href="mailto:privacy@tridentrealty.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        privacy@tridentrealty.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-700">
                      <a
                        href="tel:+919138331357"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        9138331357
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">
                    Trident Realty
                    <br />
                    123 Business District
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700">
                This Privacy Policy is governed by the laws of India. Any
                disputes arising from this policy will be subject to the
                jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need Help?
              </h3>
              <p className="text-blue-800">
                If you have any questions about our privacy practices or need
                assistance with your data rights, please don't hesitate to
                contact our privacy team at{" "}
                <a
                  href="mailto:privacy@tridentrealty.com"
                  className="font-semibold underline"
                >
                  privacy@tridentrealty.com
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Generate current date for last updated
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    props: {
      lastUpdated,
    },
  };
}
