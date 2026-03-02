// version 1.0.0

(function () {
  const data = {"@type":"JobPosting","title":"Web IT","@context":"https://schema.org/","baseSalary":{"@type":"MonetaryAmount","value":{"@type":"QuantitativeValue","value":100000,"unitText":"MONTH"},"currency":"VND"},"datePosted":"2026-03-02","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","directApply":true,"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","postalCode":"100-000","addressRegion":"HN","addressCountry":"VN","addressLocality":"HN"}},"validThrough":"2026-04-02","employmentType":"OTHER","salaryCurrency":"VND","jobImmediateStart":false,"applicationContact":{"url":"https://example.com.vn","name":"HR","@type":"ContactPoint","contactType":"URL"},"hiringOrganization":{"name":"Vaon test","@type":"Organization"},"experienceInPlaceOfEducation":false};
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();