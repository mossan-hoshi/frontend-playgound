/**
 * Landing Page for a Tech Product Launch
 *
 * Overview:
 * This file is for a landing page designed to promote a new tech product, "TechPro X100".
 * The page should be visually engaging, user-friendly, and mobile-responsive,
 * making use of Next.js and TailwindCSS for a modern and efficient design.
 *
 * Page Sections:
 * 1. Hero Section: A large, eye-catching header with the product name, a brief slogan,
 *    and a high-quality image or video of the product.
 *    Include a call-to-action (CTA) button for pre-orders.
 *
 * 2. Features Section: A detailed section highlighting the key features of "TechPro X100".
 *    Use concise bullet points and relevant icons or small images.
 *
 * 3. Testimonials Section: Display customer reviews and testimonials
 *    to build trust and credibility. Include customer photos and quotes.
 *
 * 4. Pricing Section: Clearly outline the pricing plans or options for the product.
 *    This section should include another CTA button for purchasing.
 *
 * 5. Footer: Include contact information, social media links, and legal disclaimers.
 *
 * Functionality:
 * - Ensure smooth scrolling navigation linking to each section of the page.
 * - Implement a responsive design for optimal viewing on desktops, tablets, and mobile devices.
 * - Integrate a newsletter sign-up form connected to a backend service for email collection.
 *
 * SEO Best Practices:
 * - Use semantic HTML tags and appropriate meta tags for SEO optimization.
 * - Ensure fast loading times and image optimization for better SEO performance.
 *
 * Accessibility Considerations:
 * - Ensure high contrast text and background for readability.
 * - Implement keyboard navigation and screen reader compatibility.
 *
 * Note to GitHub Copilot:
 * Use Next.js for the framework and TailwindCSS for styling.
 * The focus is on a sleek, modern design with user-friendly navigation and clear call-to-action elements.
 */
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Advanced Performance",
    description: "High speed and efficiency with cutting-edge technology.",
    icon: "/images/icon1.webp", // Replace with actual image path
  },
  {
    id: 2,
    title: "User-Friendly Interface",
    description: "Ease of use with an intuitive and simple design.",
    icon: "/images/icon1.webp", // Replace with actual image path
  },
  {
    id: 3,
    title: "Compact and Lightweight Design",
    description: "Portable and ergonomic, perfect for on-the-go usage.",
    icon: "/images/icon1.webp", // Replace with actual image path
  },
  {
    id: 4,
    title: "Long-Lasting Battery Life",
    description: "Durable and reliable for extended use without charging.",
    icon: "/images/icon1.webp", // Replace with actual image path
  },
  {
    id: 5,
    title: "Cutting-Edge Technology",
    description: "Innovative features setting new industry standards.",
    icon: "/images/icon1.webp", // Replace with actual image path
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/customer1.png", // 顧客の写真へのパス
    quote:
      "This product changed my life! Highly recommend to anyone looking for a quality tech product.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/customer2.png",
    quote:
      "Excellent performance and great value. I am extremely satisfied with my purchase.",
  },
];

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$9.99/month",
    features: [
      "Advanced Performance",
      "User-Friendly Interface",
      "Compact and Lightweight Design",
    ],
    isRecommended: false,
  },
  {
    name: "Pro Plan",
    price: "$19.99/month",
    features: [
      "Advanced Performance",
      "User-Friendly Interface",
      "Compact and Lightweight Design",
      "Long-Lasting Battery Life",
    ],
    isRecommended: true,
  },
  {
    name: "Enterprise Plan",
    price: "$49.99/month",
    features: [
      "Advanced Performance",
      "User-Friendly Interface",
      "Compact and Lightweight Design",
      "Long-Lasting Battery Life",
      "Cutting-Edge Technology",
    ],
    isRecommended: false,
  },
];

export default function Home() {
  const testimonialColsMd = "grid-cols-" + Math.min(2, testimonials.length);
  const testimonialColsLg = "grid-cols-" + Math.min(3, testimonials.length);
  return (
    <main>
      {/*
       * Navigation Bar (Navibar) Section
       *
       * Overview:
       * The navigation bar is a critical component of the website layout,
       * providing users with an easy-to-navigate interface to access various sections of the site.
       * It is consistently displayed across all pages for easy access and brand consistency.
       *
       * Design:
       * - The Navibar is designed with a modern and minimalist aesthetic using TailwindCSS.
       * - It features the brand logo on the left, which also serves as a link to the home page.
       * - The background color and font style should align with the overall website theme.
       * - On mobile devices, the Navibar transitions to a hamburger menu for space efficiency.
       *
       * Sections and Links:
       * The Navibar includes the following links:
       * 1. Home: Redirects to the main landing page of the website.
       * 2. Features: Scrolls to the Features Section, highlighting the key offerings of the product or service.
       * 3. Pricing: Navigates to the Pricing Section, detailing the cost and plans available.
       * 4. Testimonials: Scrolls to the Testimonials Section, showcasing customer feedback.
       * 5. Contact: Leads to the Contact Section or page, where users can reach out for inquiries.
       *
       * Functionality:
       * - Each link should ensure smooth scrolling to the respective sections on the same page,
       *   or redirect to different pages, depending on the website structure.
       * - The Navibar should be sticky or fixed at the top, remaining accessible as the user scrolls down.
       * - Include hover effects for each link for better user interaction.
       *
       * Accessibility:
       * - Ensure that the Navibar is keyboard navigable for accessibility purposes.
       * - Use ARIA labels where necessary to enhance screen reader compatibility.
       *
       * Responsive Design:
       * - The Navibar should be fully responsive, adjusting to different screen sizes and devices.
       * - On smaller screens, the links should collapse into a hamburger menu to maximize space and maintain usability.
       *
       * Note:
       * This Navibar is a central element of the user interface, designed to enhance user experience
       * by providing clear, easy-to-find navigation throughout the website.
       */}
      <section>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-8 md:px-14 w-full">
            <div className="text-3xl font-bold">TechPro</div>
            <div className="space-x-12 hidden md:flex items-center">
              <a
                href="#home"
                className="hover:text-selected-text transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#features"
                className="hover:text-selected-text transition-all duration-300"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="hover:text-selected-text transition-all duration-300"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="hover:text-selected-text transition-all duration-300"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="hover:text-selected-text transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden px-6">
            <button className="bg-theme font-bold text-xl hover:bg-purple-600 px-8 py-2 rounded-xl my-4">
              Menu
            </button>
          </div>
        </div>
      </section>
      {/* 1. Hero Section: A large, eye-catching header with the product name, a brief slogan,
       *    and a high-quality image or video of the product.
       *    Include a call-to-action (CTA) button for pre-orders. */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center">TechPro X100</h1>
          <h2 className="text-2xl text-center">The Future of Technology</h2>
          <button className="bg-theme font-bold text-xl bg-purple-900 hover:bg-purple-600 px-8 py-2 rounded-xl my-4">
            Pre-Order Now
          </button>
          <Image
            src="/images/techpro-x100.png"
            alt="TechPro X100"
            width={500}
            height={500}
          />
        </div>
      </section>
      {/* 2. Feature Details:
       * - Feature 1: "Advanced Performance"
       *   Description: Highlight the high speed and efficiency of the product.
       *   Visual: Use a dynamic icon or image representing speed or high performance.
       *
       * - Feature 2: "User-Friendly Interface"
       *   Description: Emphasize the ease of use and intuitive design of the product's interface.
       *   Visual: Display a screenshot or icon that illustrates simplicity and user-friendliness.
       *
       * - Feature 3: "Compact and Lightweight Design"
       *   Description: Describe the product's portable and ergonomic design, ideal for on-the-go use.
       *   Visual: Include a photo or illustration that showcases the product's compact size.
       *
       * - Feature 4: "Long-Lasting Battery Life"
       *   Description: Focus on the durability and long battery life of the product, suitable for extended use.
       *   Visual: Consider an icon or graphic that symbolizes battery life or endurance.
       *
       * - Feature 5: "Cutting-Edge Technology"
       *   Description: Mention the innovative technology used in the product, setting it apart from competitors.
       *   Visual: Use a futuristic or high-tech image to represent this feature.
       *
       * Design Considerations:
       * - Ensure that the layout is responsive and looks attractive on all devices.
       * - Use TailwindCSS for styling, with a focus on consistent spacing, readable fonts, and a color scheme that complements the overall page design.
       * - Each feature should have enough space to breathe, avoiding a cluttered appearance.
       *
       * Interaction:
       * - Consider adding subtle animations or hover effects to each feature card/grid for a more dynamic user experience.
       * - Ensure that all visual elements are high-quality and load efficiently.
       *
       * Note to GitHub Copilot:
       * The aim is to create an engaging and informative section that effectively communicates the value of each feature of "TechPro X100".
       * Balance text and visuals to keep the section interesting and easy to navigate.
       */}
      <section id="features">
        <div className="py-12 bg-theme">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-100 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                Why Choose TechPro X100
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* Replace 'img' with 'Image' from Next.js for better performance */}
                        <Image
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-200">
                        {feature.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Testimonials Section: Display customer reviews and testimonials
       *    to build trust and credibility. Include customer photos and quotes. */}
      <section id="testimonials">
        <div className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">
              What Our Customers Say
            </h2>
            <div
              className={`grid grid-cols-1 md:${testimonialColsMd} lg:${testimonialColsLg} gap-8`}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border border-gray-700 p-6 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-center text-lg">{testimonial.quote}</p>
                  <p className="text-center text-sm mt-4">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 4. Pricing Section: Clearly outline the pricing plans or options for the product.
       *    This section should include another CTA button for purchasing. */}
      <section id="pricing">
        <div className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
              <p className="mb-12">Choose a plan that's right for you.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`border p-6 rounded-lg ${
                    plan.isRecommended ? "border-blue-500" : "border-gray-700"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-lg font-semibold mb-6">{plan.price}</p>
                  <ul className="mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 5. Footer: Include contact information, social media links, and legal disclaimers. */}
      <footer className="bg-black text-white p-4 flex border-t-2 border-t-gray-800 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <p>123 Tech Street, Tech City, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@techprox100.com</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="#">
                <span className="hover:text-gray-300 cursor-pointer">
                  Facebook
                </span>
              </Link>
              <Link href="#">
                <span className="hover:text-gray-300 cursor-pointer">
                  Twitter
                </span>
              </Link>
              <Link href="#">
                <span className="hover:text-gray-300 cursor-pointer">
                  Instagram
                </span>
              </Link>
              <Link href="#">
                <span className="hover:text-gray-300 cursor-pointer">
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div>
            <h5 className="text-lg font-bold mb-2">Legal</h5>
            <Link href="#">
              <span className="hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <br />
            <Link href="#">
              <span className="hover:text-gray-300 cursor-pointer">
                Terms of Use
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
