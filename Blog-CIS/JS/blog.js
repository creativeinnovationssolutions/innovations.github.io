let data = [
  {
    id: 1,
    url: "./assets/about-7.jpg",
    name: "Our Consultants Can Make Your Brand A Reality",
    description:
      "Are you dreaming of launching your own brand but unsure of where to begin? Look no further. Our team of experienced consultants is here to turn your vision into a tangible reality. With a blend of creativity, strategic insight, and industry expertise, we specialize in bringing brands to life from concept to market. Whether you're a budding entrepreneur or an established business looking to refresh your brand identity, we have the tools and know-how to guide you every step of the way. From crafting compelling brand narratives to designing eye-catching logos and developing robust marketing strategies, we're committed to helping you stand out in today's competitive marketplace. Let us be your partners in success as we work together to transform your brand aspirations into a thriving reality.",
  },
  {
    id: 2,
    name: "When A Small Business Is Just Starting Out",
    url: "./assets/about-8.jpg",
    description:
      "Starting a small business can be both exhilarating and daunting. You have a vision, a product or service you're passionate about, but navigating the complexities of launching a business can seem overwhelming. That's where we come in. Our tailored services are designed specifically for small businesses like yours that are just starting out. We understand the unique challenges you face – from budget constraints to establishing a brand identity in a crowded market. Our team of experts is here to provide the guidance and support you need to turn your entrepreneurial dreams into a reality. Whether it's developing a business plan, creating a memorable brand, setting up efficient processes, or reaching your target audience, we're dedicated to helping you lay a strong foundation for long-term success. Let us be your trusted partners on this exciting journey, so you can focus on what you do best – building your business.",
  },
  {
    id: 2,
    name: "When A Small Business Is Just Starting Out",
    url: "./assets/about-9.jpg",
    description:
      "In finance, professionals deal with managing funds, investments, and financial planning, often in dynamic and unpredictable markets. They must possess strong analytical skills, a deep understanding of economic trends, and the ability to assess risk effectively.Accounting, on the other hand, involves the systematic recording, analysis, and reporting of financial transactions of an organization. Accountants need to be meticulous, detail-oriented, and knowledgeable about accounting standards and regulations to ensure accurate financial reporting and compliance.Moreover, both finance and accounting require continuous learning and adaptation to changes in regulations, technology, and market dynamics, further adding to their complexity. Overall, while rewarding, these fields demand a high level of expertise and dedication, making them challenging for many individuals.",
  },
];

// --------------------------------------------------------------

const container = document.getElementById("dataContainer");

// Iterate over the data array
data.forEach((item) => {
  // Create elements for each data item
  const div = document.createElement("div");
  div.setAttribute("class", "img-div");
  const div1 = document.createElement("div");
  div1.setAttribute("class", "text-des");
  const img = document.createElement("img");
  const h2 = document.createElement("h1");
  const p = document.createElement("p");
  const p1 = document.createElement("p");

  // Set attributes and content
  img.src = item.url;
  h2.textContent = item.name;
  p.textContent = item.description;
  const date = new Date();
  // Formatting the date without the time zone information
  const dateString = date.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  });

  // Setting the text content with the formatted date
  p1.textContent = "Last update " + dateString;

  // Append elements to the container

  div.append(img);
  div1.append(h2, p, p1);
  container.append(div, div1);
});
