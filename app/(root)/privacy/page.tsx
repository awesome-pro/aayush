import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
      <p className="text-lg mb-4 text-gray-700">
        Last updated: [Date]
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Introduction</h2>
        <p className="text-gray-700">
          Welcome to [Your Company Name]. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [your website URL]. Please read this privacy policy carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Information We Collect</h2>
        <p className="text-gray-700">
          We may collect personal information that you provide to us directly, such as when you register on our site, subscribe to our newsletter, or interact with our services. This information may include:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Personal identification information (name, email address, etc.)</li>
          <li>Payment information</li>
          <li>Browsing and usage data</li>
          <li>Any other information you choose to provide</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the information we collect to:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our site</li>
          <li>Process transactions and manage orders</li>
          <li>Communicate with you, including for customer support</li>
          <li>Send you marketing and promotional information (if you have opted in)</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">How We Protect Your Information</h2>
        <p className="text-gray-700">
          We implement a variety of security measures to ensure the safety of your personal information. These measures include encryption, firewalls, and secure server hosting. However, please be aware that no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Disclosure of Your Information</h2>
        <p className="text-gray-700">
          We may disclose your information in the following situations:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>To comply with legal obligations</li>
          <li>To protect and defend our rights and property</li>
          <li>To prevent or investigate possible wrongdoing in connection with the site</li>
          <li>To protect the personal safety of users of the site or the public</li>
          <li>With your consent or at your direction</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Third-Party Services</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or the content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Your Rights and Choices</h2>
        <p className="text-gray-700">
          You have the right to access, update, or delete your personal information. You may also choose not to provide certain information or to withdraw your consent to the processing of your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "Last updated" date at the top of this policy. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or our practices, please contact us at:
        </p>
        <p className="text-gray-700">
          Email: [Your Contact Email]
        </p>
        <p className="text-gray-700">
          Address: [Your Contact Address]
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
